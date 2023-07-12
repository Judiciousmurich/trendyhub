import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Product from '../user/product/Product'

const SellerProducts = () => {
  return (
    <>
    <div >
        <h1 className='text-[#000000]font-bold text-5xl'>Best Seller Products</h1>
        <p className='text-[#b9b9b9]'>speakerThere are many variations passages.</p>
    </div>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 p-6">
      <div className="flex flex-col gap-2 cursor-pointer select">
            <div className=' rounded-[5px]  h-[13rem]'>
                <img className='rounded-[10px] h-full object-contain' src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1269-935x701.jpg" alt="product" />
            </div>
            <div className='flex gap-1 '>
                <FaStar className='text-[gold]' />
                <FaStar className='text-[gold]' />
                <FaStar className='text-[gold]' />
                <FaStar className='text-[gold]' />

                <FaRegStar className='text-[#e2e8f0]' />
            </div>
            <h3 className='font-bold'>Game Console Controller</h3>
             <p>$8,250</p> 
        

        </div>
      
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>

        </>
    



  )
}

export default SellerProducts