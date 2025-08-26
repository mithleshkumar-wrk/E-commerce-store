import axios from 'axios';
import { Divide } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/common/Loader';
import Breadcrums from '../components/Breadcrums';
import Button from '../components/common/Button'
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState();
    const {addToCart} = useCart();
    const [quantity, setQuantity] = useState(1);

    
    // getting product id from url 
    const params = useParams();

    // getting single product from api 
    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
            setSingleProduct(res.data.product);
        } catch (error) {
            console.log(error);
        }
    }

    // call single product function 
    useEffect(() => {
        getSingleProduct();
    }, [])


    // calculate original price with discount % 
    const OriginalPrice = (discountPrice, discountPercentage) => {
        const price = discountPrice / (1 - discountPercentage / 100)
        return Math.floor(price)
    }




    return (
        <>
            {
                singleProduct ?
                    (<div className='px-4 pb-4 md:px-0 mt-4 md:mt-0'>
                        <Breadcrums title={singleProduct.title} />
                        <div className='max-w-6xl mx-auto md:px-6 grid md:grid-cols-2 md:gap-10 gap-3'>
                            {/* product image  */}
                            <div >
                                <img src={singleProduct.image} alt={singleProduct.title} className='rounded-2xl w-full object-cover' />
                            </div>

                            {/* product details  */}
                            <div className='flex flex-col md:gap-6 gap-2'>

                                <h1 className='md:text-2xl font-bold text-gray-800'>{singleProduct.title}</h1>

                                <div className='text-gray-700'>
                                    {singleProduct.model?.toUpperCase()} /  {singleProduct.category?.toUpperCase()} / {singleProduct.brand?.toUpperCase()}
                                </div>

                                <div className='flex items-center gap-3'>
                                    <p className='text-red-500 text-xl font-bold'>${singleProduct.price}</p>
                                    {
                                        singleProduct.discount ? (
                                            <div className='flex gap-3 items-center justify-center'>
                                                <p className='font-bold line-through text-xl'>${OriginalPrice(singleProduct.price, singleProduct.discount)}</p>
                                                <p className='bg-red-500 text-white px-3 py-1 rounded-full'> {singleProduct.discount}% Discount</p>
                                            </div>
                                        ) : ("")
                                    }
                                </div>

                                <p className='text-gray-600 text-sm'>{singleProduct.description}</p>

                                {/* Quantity selector  */}
                                <div className='flex items-center gap-4'>

                                    <label htmlFor="" className='font-medium text-gray-700 text-xl md:text-md'> Quantity: </label>

                                    <input onChange={(e)=> setQuantity(e.target.value)} value={quantity} type="number" className='w-20 text-black border border-gray-300 rounded-lg px-3 py-2 md:py-1 focus:outline-none focus:ring-2 focus:ring-black' />

                                </div>

                                {/* add to card button  */}
                                <div className='flex gap-4 mb-12'>
                                    <Button onClick={()=>{
                                        singleProduct? (addToCart(singleProduct,quantity)):"",
                                        setQuantity(1)
                                    }} icon={IoCartOutline} className={"px-6 rounded-md flex justify-center items-center gap-3 py-3 md:py-2"} text={"Add to cart"} />
                                </div>
                            </div>
                        </div>
                    </div>) :
                    (<div>
                        <Loader className={'h-[500px]'} />
                    </div>)
            }
        </>
    )
}

export default SingleProduct