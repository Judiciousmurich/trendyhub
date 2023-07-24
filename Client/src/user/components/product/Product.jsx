import React, { useContext } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';

const Product = () => {
  const { products } = useContext(Context);
  const numberOfProducts = 9;
  const displayedProducts = products.slice(0, numberOfProducts);

  const handleAddToCart = async (productId) => {
    try {
      // Send a POST request to the server to add the item to the cart
      await axios.post(`${apiDomain}/cart`, { productId });
      console.log('Item added to cart successfully.');
      // You can show a success message or update the cart in the Context here if needed.
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <>
      {displayedProducts.map((product) => (
        <div key={product.ID} className="flex flex-col gap-2 cursor-pointer select">
          <div className="rounded-[5px] h-[13rem]">
            <img
              className="rounded-[10px] h-full object-contain"
              src={product.ImageURL} // Use the product's ImageURL from the Context
              alt={product.Name}
            />
          </div>

          <h3 className="font-bold hover:text-red-500 transition-all duration-300">
            {product.Name}
          </h3>
          <p className="relative inline-block group font-bold">
            <span className="inline-block transition-all duration-300 transform group-hover:translate-x-[-100%]transform -translate-x-[-100%] group-hover:translate-x-0 ">
              ${product.Price}
            </span>
            <button
              className="left-full group-hover:translate-y-0 bg-red-500 text-white rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={() => handleAddToCart(product.ID)} // Call handleAddToCart with the product ID when the button is clicked
            >
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </>
  );
};

export default Product;
