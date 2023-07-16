import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
const Product = () => {
    return (
        <div className="flex flex-col gap-2 cursor-pointer select">
        <div className=' rounded-[5px]  h-[13rem]'>
            <img className='rounded-[10px] h-full object-contain' src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1273-935x701.jpg" alt="product" />
        </div>
        <div className='flex gap-1 '>
            <FaStar className='text-[gold]' />
            <FaStar className='text-[gold]' />
            <FaStar className='text-[gold]' />
            <FaStar className='text-[gold]' />

            <FaRegStar className='text-[#e2e8f0]' />
        </div>
        <h3 className='font-bold'>Rocky Mountain</h3>
         <p>$8,250</p> 
         </div>
    )
}

export default Product