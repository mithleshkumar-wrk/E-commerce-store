import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import Button from './common/Button'
import { useCart } from '../context/CartContext'


const ProductCard = ({ product }) => {
    
   const {addToCart} = useCart();
  
    return (
        <div className='hover:shadow-2xl aspect-square p-2 shadow md:p-3 hover:scale-105 transition-all rounded-2xl ' >
            <img className='bg-gray-100 aspect-square ' src={encodeURI(product.image)} alt={product.title} onClick={() => window.open(`/products/${product.id}`, "_blank")} />

            <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>

            <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>

            <Button onClick={()=>{
                product? (addToCart(product)): ""
            }} text={"Add to Card"} icon={IoCartOutline} className={"w-full mt-4 rounded-md py-1.5 flex justify-center items-center md:gap-2"} />
        </div>
    )
}

export default ProductCard