import React from 'react'
import img1 from '../assets/img1.jpg'
import Button from './common/Button'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-100 md:py-18 md:px-16 p-8 '>
      <div className='relative max-w-7xl mx-auto rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className='absolute inset-0 bg-black/60 rounded-2xl bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white px-4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Next-Gen Electronics at Your Fingertips</h1>
            <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>

            <Button onClick={()=> navigate('/products')} text={"Shop Now"} className={"text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 "}/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner