import React from 'react'
import { useGetData } from '../context/DataContext'
import Button from './common/Button';
import Category from './Category';

const FilterSection = ({ handleCategoryChange, handleBrandChange,handleResetFilterBtn, props }) => {
    const { categoryOnlyData, brandOnlyData } = useGetData();

    return (
        <div className='mt-2  md:mt-10 bg-gray-100 rounded-md p-4 h-max '>


            <input type="text"
                value={props.value}
                onChange={(e) => props.setSearch(e.target.value)} placeholder='Search...'
                className='bg-white border rounded-md w-full px-2 py-2 md:py-1 outline-none border-gray-300 '
            />

            {/* sorting product  */}
            <h1 className='mt-5 font-semibold text-lg'>Sorting</h1>
            <select
                value={props.sortOption}
                onChange={(e) => props.setSortOption(e.target.value)}
                className="border border-gray-300 mt-2 outline-none bg-white px-2  py-2 md:py-1.5 rounded-md"
            >
                <option value="Relevance">Relevance</option>
                <option value="LowToHigh">Low to High</option>
                <option value="HighToLow">High to Low</option>
            </select>

            {/* Category wise data  */}
            <h1 className='mt-5 font-semibold text-lg'>Category</h1>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-2 mt-3 '>
                {
                    categoryOnlyData?.map((item, index) => {
                        return <label
                            key={index}
                            className="flex gap-2 cursor-pointer items-center"
                        >

                            <input
                                type="checkbox"
                                name={item}
                                value={item}
                                onChange={handleCategoryChange}
                                checked={props.categories.includes(item)}
                                className="cursor-pointer"
                            />
                            <span className="uppercase text-sm">{item}</span>
                        </label>
                    })
                }
            </div>

            {/* brand only data 
            <h1 className='mt-5 font-semibold text-lg'>Brand</h1>

            <select
                name=""
                id=""
                className='bg-white px-2 py-2 md:py-1.5 rounded-md border border-gray-300 outline-none mt-2'
                value={props.brand}
                onChange={handleBrandChange}
            >
                {
                    brandOnlyData?.map((item, index) => {
                        return <option value={item} key={index} className='text-sm uppercase'>{item}</option>
                    })
                }
            </select> */}

            {/* price range  */}
            <h1 className='mt-5 font-semibold text-lg'>Price Range</h1>
            <div className='mt-2 flex flex-col'>
                <label htmlFor="">
                    Price: $0- ${props.priceRange}
                </label>
                <input
                    type="range"
                    min={0}
                    max={1000}
                    step={1}
                    value={props.priceRange}
                    onChange={(e) => props.setPriceRange(Number(e.target.value))}

                />
            </div>
            <Button onClick={handleResetFilterBtn} text={"Reset Filter"} className={"my-5 px-4 py-2 md:py-1.5 text-white rounded-md"} />


        </div>
    )
}

export default FilterSection