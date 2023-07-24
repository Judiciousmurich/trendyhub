import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Product from '../user/components/product/Product'

const SellerProducts = () => {
  return (
    <>

      <div >
        <h1 className='text-[#000000]font-bold text-5xl text-center mb-3'>Best Seller Products</h1>
        <p className='text-[#b9b9b9] text-center'>speakerThere are many variations passages.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-6">
        {/* <div className="flex  gap-2 cursor-pointer select">
          <div className=' rounded-[5px]  h-[13rem]'>
            <img className='rounded-[10px] h-full object-contain' src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1269-935x701.jpg" alt="product" />
          </div>

          <h3 className="font-bold  hover:text-red-500 transition-all duration-300">
            Rocky Mountain
          </h3>
          <p className="relative inline-block group font bold">
            <span className="inline-block transition-all duration-300 transform group-hover:translate-x-[-100%]transform -translate-x-[-100%] group-hover:translate-x-0 ">
              $8,250
            </span>
            <button className=" left-full group-hover:translate-y-0 bg-red-500 text-white   rounded-[20px]  opacity-0 group-hover:opacity-100 transition-all duration-300 text-[0.5px] ">
              Add to Cart
            </button>
          </p>


        </div> */}





        <Product />
      </div>

    </>




  )
}

export default SellerProducts