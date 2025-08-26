import React from 'react'
import { useNavigate } from 'react-router-dom'

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className='hidden md:flex max-w-6xl mx-auto my-6'>
      <h1 className='text-md text-gray-700 font-semibold'><span onClick={() => navigate("/")} className='cursor-pointer'>Home</span> / <span onClick={() => navigate("/products")} className='cursor-pointer'>Products</span> / <span >
        {title}</span></h1>
    </div>
  )
}

export default Breadcrums