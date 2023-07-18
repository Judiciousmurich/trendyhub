import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <div className="flex flex-col gap-2 cursor-pointer select">
        <div className="rounded-[5px] h-[13rem]">
          <img
            className="rounded-[10px] h-full object-contain"
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1273-935x701.jpg"
            alt="product"
          />
        </div>

        <h3 className="font-bold  hover:text-red-500 transition-all duration-300">
          Rocky Mountain
        </h3>
        <p className="relative inline-block group font bold">
          <span className="inline-block transition-all duration-300 transform group-hover:translate-x-[-100%]transform -translate-x-[-100%] group-hover:translate-x-0 ">
            $8,250
          </span>
          <button className=" left-full group-hover:translate-y-0 bg-red-500 text-white   rounded-[20px]  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            Add to Cart
          </button>
        </p>
      </div>
    </>
  );
};

export default Product;
