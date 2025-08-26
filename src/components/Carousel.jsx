import { useEffect, useState } from 'react'
import { useGetData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Button from './common/Button';
import Loader from './common/Loader';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Carousel = () => {
    const { data, fetchAllProducts } = useGetData();
    const [loading, setLoading] = useState(false);

    const randomNumFirst = Math.floor(Math.random() * 140)
    const randomNumSecond = randomNumFirst + 6

    useEffect(() => {
        fetchAllProducts();
    }, [])

    useEffect(() => {
        if (!data) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [loading])

    const SamplePrevArrow = (props) => {
        const { className, onClick, style } = props;
        return <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
            <IoIosArrowBack className='arrows' style={{ ...style, display: "block", position: "absolute", padding: "2px", left: "50px", opacity: "10%" }}
            />

        </div>
    }

    const SampleNextArrow = (props) => {
        const { className, onClick, style } = props;
        return <div onClick={onClick} className={`arrow  ${className} hidden md:block`} style={{ zIndex: 3 }}>
            <IoIosArrowForward className='arrows ' style={{ ...style, display: "block", position: "absolute", padding: "2px", right: "50px", opacity: "10%" }}

            />

        </div>
    }


    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />
    };

    if (loading) {
        <Loader className={'h-800px'} />
    }

    return (
        <div>
            <Slider {...settings}>
                {
                    data?.slice(randomNumFirst, randomNumSecond).map((item, index) => {
                        return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] '>

                            <div className='md:flex md:flex-row-reverse  md:gap-10 justify-center md:h-[600px] items-center px-4 mt-4 md:mt-0'>


                                <div className='mb-16 md:mb-0'>
                                    <img onClick={() => window.open(`/products/${item.id}`, "_blank")} src={item.image} alt={item.title} className='md:rounded-full rounded-2xl md:h-[350px] md:w-[300px] h-[350px] w-[350px] hover:scale-105 md:p-10 p-2 transition-all shadow-2xl bg-white shadow-[#f36d6d]' />
                                </div>

                                <div className='space-y-6  mb-12 md:mb-0'>
                                   

                                    <h3 className='text-red-500 font-semibold font-sans text-sm hidden md:flex'>
                                        Powering your world with the best in Electronic
                                    </h3>

                                    <h1 onClick={() => window.open(`/products/${item.id}`, "_blank")} className='text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>

                                    <p onClick={() => window.open(`/products/${item.id}`, "_blank")} className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>

                                    <Button onClick={() => window.open(`/products/${item.id}`, "_blank")} text="Shop Now" className="rounded-sm hidden md:block" />
                                </div>

                            </div>
                        </div>
                    })
                }

            </Slider>
        </div>
    )
}

export default Carousel