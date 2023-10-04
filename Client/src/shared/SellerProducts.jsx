import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Product from "../user/components/product/Product";

const SellerProducts = () => {
  return (
    <>
      <div>
        <h1 className="text-[#000000]font-bold text-5xl text-center mb-3">
          Best Seller Products
        </h1>
        <p className="text-[#b9b9b9] text-center">
          speakerThere are many variations passages.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-6">
        <Product />
      </div>
    </>
  );
};

export default SellerProducts;
