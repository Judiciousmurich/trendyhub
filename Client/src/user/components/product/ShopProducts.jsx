import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiDomain } from '../../../utils/utilsDomain';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend
    axios.get( `${apiDomain}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      {products.map((product) => (
        
        <div key={product.ID} className="flex flex-col gap-2 cursor-pointer select">
          <div className="rounded-[5px] h-[13rem]">
            <img
              className="rounded-[10px] h-full object-contain"
              src={product.imageURL}
              alt={product.Name}
            />
          </div>

          <h3 className="font-bold hover:text-red-500 transition-all duration-300">
            {product.Name}
          </h3>
          <p className="relative inline-block group font bold">
            <span className="inline-block transition-all duration-300 transform group-hover:translate-x-[-100%]transform -translate-x-[-100%] group-hover:translate-x-0 ">
              ${product.Price}
            </span>
            <button className="left-full group-hover:translate-y-0 bg-red-500 text-white rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300">
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </>
  );
};

export default Product;
