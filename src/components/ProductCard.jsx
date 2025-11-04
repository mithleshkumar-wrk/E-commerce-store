import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import Button from './common/Button'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import RatingStar from '../utils/RatingStar'

const ProductCard = ({ product }) => {
    
   const {addToCart} = useCart();
    const navigate = useNavigate();

    let rating = Math.floor(product.rating.rate);

    return (
        <div className='hover:shadow-2xl aspect-square p-2 shadow md:p-3 hover:scale-105 transition-all rounded-2xl ' >
            <img className='bg-gray-100 aspect-square ' src={encodeURI(product.image)} alt={product.title} onClick={() => navigate(`/products/${product.id}`)} />

            <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>

            <RatingStar starRating={product.rating.rate}/>

            <p className='my-1 text-xl text-gray-800 font-bold'>${product.price}</p>



            <Button onClick={()=>{
                product? (addToCart(product)): ""
            }} text={"Add to Card"} icon={IoCartOutline} className={"w-full mt-4 rounded-md py-1.5 flex justify-center items-center md:gap-2"} />
        </div>
    )
}

export const  HOF = (Product) =>{
    return (props)=>{
        return(
            <>
            <div className='relative hover:cursor-zoom-in'>
                <span className='text-white absolute left-3 top-3  bg-red-500 rounded-sm  text-center px-4 '>Tranding</span>
                <ProductCard {...props}/>
            </div>
            </>
        )
    }
}

export default ProductCard