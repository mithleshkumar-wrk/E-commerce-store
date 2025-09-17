import React, { useEffect } from 'react'
import Button from './common/Button';
import { useGetData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const {categoryOnlyData } = useGetData();
    const navigate = useNavigate();

    return (
        <div className='bg-[#101829] '>
            <div className='md:max-w-7xl  md:mx-auto flex gap-4 items-center justify-around py-7 overflow-x-auto whitespace-nowrap md:overflow-x-visible md:flex-wrap px-4'>
                {
                    categoryOnlyData.filter(item=>item !== "All")?.map((item, index) => {
                        return <div key={index}>
                            <Button onClick={()=> {
                                navigate(`/products`),
                                window.scrollTo(0,0)
                            }} className="rounded-full px-6" text={item} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Category