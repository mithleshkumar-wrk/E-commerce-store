import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './common/Button';
import { useCart } from '../context/CartContext';

const ProductListView = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Get today's date
    const today = new Date();

    // Tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // 2 days after today
    const twoDaysLater = new Date(today);
    twoDaysLater.setDate(today.getDate() + 2);

    // Format the date (e.g. "17 Apr")
    const formatDate = (date) =>
        date.toLocaleDateString("en-US", { day: "numeric", month: "short" });


    return (
        <div className='space-y-4 rounded-md mt-2 '>
            <div className='bg-green-600 flex flex-col md:flex-row  gap-7 items-center rounded-md p-2'>
                <div className='  bg-red-400'>
                    <img src={product.image} onClick={() => {
                        navigate(`/products/${product.id}`),
                            window.scrollTo(0, 0)
                    }} alt={product.title} className='   w-[500px] h-auto  rounded-md cursor-pointer ' />
                </div>


                <div className='space-y-2'>

                    <h1 onClick={() => {
                        navigate(`/products/${product.id}`),
                            window.scrollTo(0, 0)
                    }} className='text-xl font-bold cursor-pointer text-gray-800'>{product.title}</h1>

                    <p className='text-md flex gap-1'><span className='text-red-500 text-2xl font-bold  '>${product.price}</span> <span >({product.discount}% off)</span> </p>

                    <p className="text-sm text-gray-700">
                        Free delivery <span className='font-semibold text-black'>Fri, {formatDate(twoDaysLater)}</span> <br />
                        Or fastest delivery <span className='font-semibold text-black'>tomorrow, {formatDate(tomorrow)}</span>
                    </p>

                    <Button onClick={() => addToCart(product)} text={'Add to cart'} className={'rounded-md py-2'} />

                </div>

            </div>

        </div>
    )
}

export default ProductListView