import React from 'react'
import Button from './common/Button'

const Pagination = ({ page, pageHandler, dynamicPage }) => {

    const getPages = (current, total) => {
        const pages = [];
        if(total <=5){
            for(let i=1; i<=total; i++ ){
                pages.push(i);
            }
        }else{
            if(current <= 3){
                pages.push(1,2,3,"...",total);
            }else if(current >= total-2){
                pages.push(1,"...", total-2, total-1, total)
            }else{
                pages.push(1,"...", current-1, current, current+1, "...", total)
            }
        }
        return pages;
    }

    return (
        <div className='flex gap-4 justify-center items-center mt-12 mb-12'>
            <button onClick={() => pageHandler(page - 1)} disabled={page === 1} className={` text-white px-4 py-1.5 rounded-md cursor-pointer  ${page === 1 ? "bg-red-300" : "bg-red-500"}`}>Prev</button>

            {
                getPages(page, dynamicPage).map((item, index)=>{
                    return <span
                     key={index} 
                     onClick={()=> typeof item === "number" && pageHandler(item)}
                     className={`cursor-pointer ${item === page? "font-bold text-red-600": "text-black"}`}
                     >
                        {item}
                    </span>
                })
            }
            <button onClick={() => {
                pageHandler(page + 1)
            }} disabled={page === dynamicPage} className={` text-white px-4 py-1.5 rounded-md cursor-pointer ${page === dynamicPage ? "bg-red-300" : "bg-red-500"}`}>Next</button>

        </div>
    )
}

export default Pagination