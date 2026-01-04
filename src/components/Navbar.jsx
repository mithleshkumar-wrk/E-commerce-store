import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { MapPin } from 'lucide-react'
import { CgClose } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline, IoCloseSharp, IoMenu } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import Button from './common/Button';

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
    const { cartItem } = useCart();
    const [openNav, setOpenNav] = useState(false);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown)
    }
    // nav list 
    const navList = [
        {
            name: "Home",
            Path: "/"
        },
        {
            name: "Products",
            Path: "/products"
        },
        {
            name: "Orders",
            Path: "/orders"
        },
        {
            name: "About",
            Path: "/about"
        },

        {
            name: "Contact",
            Path: "/contact"
        },
    ]

    const hasOrders = JSON.parse(localStorage.getItem("orders") || "[]").length > 0;

    return (
        <div className='bg-gray-100  py-3 shadow-2xl px-4 '>
            <div className='max-w-6xl mx-auto flex justify-between items-center '>
                <div className='flex flex-row gap-2 md:gap-7 items-center  '>

                    {/* menu for mobile view  */}
                    <div onClick={() => setOpenNav(!openNav)} className='md:hidden'>
                        {
                            openNav ? (<IoCloseSharp className='h-6 w-8 ' />) : (<IoMenu className='h-6 w-8 ' />)
                        }

                    </div>


                    {/* logo section  */}
                    <Link to={"/"}>
                        <h1 className='font-bold text-xl md:text-2xl'><span className='text-red-500 text-2xl font-serif md:text-3xl'>M</span>store</h1>
                    </Link>

                    {/* location area  */}
                    <div onClick={toggleDropdown} className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
                        <MapPin size={16} className='text-red-500 text-lg' />
                        <span className='font-semibold'>{location ? <div className='-space-y-2 text-sm'>
                            <p>{location.country}</p>
                            <p>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleDropdown} />
                    </div>

                    {/* change location  */}
                    {
                        openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-32 border-2 px-5 py-2 border-gray-100 rounded-md '>
                            <h1 className='font-semibold mb-4 text-lg flex justify-between '>
                                Change Location
                                <span className='cursor-pointer' onClick={toggleDropdown}><CgClose />
                                </span>
                            </h1>
                            <button className='bg-red-500 hover:bg-red-600 transition-all px-6 py-0.5 text-center rounded-md text-white cursor-pointer' onClick={getLocation}>Detect my location</button>
                        </div> : null
                    }
                </div>

                {/* menu section  */}
                <nav className='flex gap-7 items-center '>
                    <ul className='md:flex flex-row gap-4 hidden'>
                        {
                            navList
                            .filter(nav => nav.name !== "Orders" || hasOrders)
                            .map((nav) => (
                                <li key={nav.name} >
                                    <NavLink to={nav.Path}
                                   
                                    className={({ isActive }) => `${isActive ? " border-b-2 border-red-500 transition-all" : ""}`}>
                                        {nav.name}
                                    </NavLink>
                                </li>
                            ))
                            
                        }
                    </ul>
                    <Link to={"/cart"} className='relative '>
                        <IoCartOutline className='h-5 w-5' />
                        <span className='bg-red-500 px-1.5 text-center rounded-full text-sm absolute text-white -top-3 -right-3'>{cartItem.length}</span>
                    </Link>
                    <div >
                        <SignedOut className="cursor-pointer">
                            <SignInButton className=" cursor-pointer bg-red-600 text-white px-3 rounded-md py-0.5 hover:bg-red-600 transition-all" />
                        </SignedOut >
                        <SignedIn className="cursor-pointer">
                            <UserButton className="cursor-pointer" />
                        </SignedIn>
                    </div>
                </nav>
            </div>
            {/* mobile view navbar  */}

            {
                openNav && <div className='flex flex-col h-screen'>
                    <div >
                        <ul className='flex flex-col gap-3 ml-2 py-4 '>
                            {
                                navList.map((nav) => (
                                    <li key={nav.name} >
                                        <NavLink onClick={() => setOpenNav(false)} to={nav.Path} className={({ isActive }) => `text-lg font-semibold  ${isActive ? " border-b-2 border-red-500 transition-all " : ""}`}>
                                            {nav.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex gap-1 cursor-pointer text-gray-700 items-center py-3'>
                        <MapPin size={16} className='text-red-500 text-lg' />
                        <span className='font-semibold'>{location ? <div className='-space-y-2 text-sm'>
                            <p>{location.country}</p>
                            <p>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown />
                    </div>

                    <div>
                        <Button onClick={getLocation} text={'Detect My Location'} className={'rounded-md py-1.5'} />
                    </div>

                    <hr className='mt-10 text-gray-300'/>
                </div>
            }





        </div>
    )
}

export default Navbar