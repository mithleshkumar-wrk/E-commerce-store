import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import Loader from '../components/common/Loader';
import Button from '../components/common/Button';
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../components/ProductListView';

const CategoryProducts = () => {
    const params = useParams();
    const category = params.category;
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const getCategoryData = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)

            setData(res.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategoryData();
    }, [])

    return (
        <div>
           
                {
                    data.length > 0 ? (
                        <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
                            <Button onClick={()=> navigate('/')} icon={ChevronLeft} text={'Back'} className={'rounded-md px-4 py-1.5 flex items-center justify-center gap-2'}/>

                               {
                                data?.map((item, index)=>{
                                    return <ProductListView key={index} product = {item}/>
                                })
                               }
                        </div>
                    ): (
                        <div>
                            <Loader className={'h-[1500px] '}/>
                        </div>
                    )
                }
            
        </div>
    )
}

export default CategoryProducts