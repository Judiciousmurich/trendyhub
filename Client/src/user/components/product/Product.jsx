import React, { useContext, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';
import axios from 'axios';
import { apiDomain } from '../../../utils/utilsDomain';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {
  const { products } = useContext(Context);
  const [cartItems, setCartItems] = useState([]);
  const numberOfProducts = 20;
  const displayedProducts = products.slice(0, numberOfProducts);

  return (
    <>

      {displayedProducts.map((product) => (
        <div key={product.ID} className="flex flex-col gap-2 cursor-pointer select ">
          {/* Wrap the product image and name with Link component */}
          <Link to={`/product/${product.ID}`}>
            <div className="rounded-[5px] h-[13rem]">
              <img
                className="rounded-[10px] h-full object-contain"
                src={product.ImageURL}
                alt={product.Name}
              />
            </div>


            <h3 className="font-bold hover:text-red-500 transition-all duration-300">
              {product.Name}
            </h3>
          </Link>
          <p className="relative inline-block group font-bold">
            <span className="inline-block transition-all duration-300">
              ${product.Price}
            </span>
            <ToastContainer />
            {/* <button
              className="left-full group-hover:translate-y-0 bg-red-500 text-white rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={() => handleAddToCart(product.ID)} // Call handleAddToCart with the product ID when the button is clicked
            >
              Add to Cart
            </button> */}
          </p>

        </div>

      ))}
    </>
  );
};

export default Product;
