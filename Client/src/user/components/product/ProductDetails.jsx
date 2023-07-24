import React, { useEffect, useState } from 'react';
import { apiDomain } from '../../../utils/utilsDomain';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Clients from '../../../shared/Clients';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [itemCount, setItemCount] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]); // State for the number of items selected
  const { id } = useParams();
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${apiDomain}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        // Assuming that the RelatedProducts column contains comma-separated IDs of related products
        if (product?.RelatedProducts) {
          const relatedProductIds = product.RelatedProducts.split(',').map((id) => parseInt(id.trim(), 10));
          const relatedProductPromises = relatedProductIds.map((id) => axios.get(`${apiDomain}/products/${id}`));
          const relatedProductResponses = await Promise.all(relatedProductPromises);
          const relatedProductsData = relatedProductResponses.map((response) => response.data);
          setRelatedProducts(relatedProductsData);
        }
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [id, product]);


  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart
    // For example, you can use Redux or any other state management system
    // and dispatch an action to add the product to the cart state.
    console.log('Product added to cart:', productId);
  };

  const renderStars = (stars) => {
    const filledStars = Math.min(stars, 5);
    const emptyStars = 5 - filledStars;

    const starElements = [];

    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
      starElements.push(<span key={`filled-${i}`}>&#9733;</span>);
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<span key={`empty-${i}`}>&#9734;</span>);
    }

    return <div>{starElements}</div>;
  };

  if (!product) {
    // Handle loading state here
    return <div>Loading...</div>;
  }
  

  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full'>
          <img src={product.ImageLink} alt={product.Name} />
          <h2 className='font-bold text-2xl mb-5'>{product.Name}</h2>
          <div className='flex'>
            <h2 className='text-red-500 gap-6 mb-5'>{renderStars(product.Stars)}</h2>
            <h1>(1 customer review)</h1>
          </div>
          <p className='font-bold text-2xl mb-5'> ${product.Price}</p>
          <p className='mb-s text-[#959595] mb-5'>
            There are many variations passages of Lorem <br />
            Ipsum available, but the majority have suffered <br />
            Ialteration words some form by injected or<br />
            I randomized which don’t even slightly believable.<br />
            I If you are going to use a passage of Lorem Ipsum, <br />
            Iyou need to be sure there isn’t anything
          </p>
          <p className='tracking-wide font-bold mb-5'>Category:${product.Category}</p>

          <div className='flex gap-6 mb-5'>
            {/* Button for increasing the number of items */}
            <div className='flex items-center'>
              <button
                onClick={() => setItemCount(itemCount - 1)}
                disabled={itemCount <= 1}
                className='border border-black rounded-md px-3 py-1'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-black'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M8.293 4.293a1 1 0 011.414 0L10 5.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <span className='mx-2'>{itemCount}</span>
              <button
                onClick={() => setItemCount(itemCount + 1)}
                className='border border-black rounded-md px-3 py-1'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-black'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
            {/* Button for adding to cart */}
            <button
              onClick={() => handleAddToCart(product.ID)}
              className='bg-red-500 text-white rounded-md px-4 py-2 mt-3'
            >
              Add to Cart
            </button>
          </div>
        </div>
        <hr />

        {/* Related products */}
        <div>
          <h3 className='text-center font-bold text-3xl'>Related Products</h3>
          <div className='flex gap-6 p-6'>
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.ID} className='flex flex-col gap-2 cursor-pointer select'>
                <Link to={`/product/${relatedProduct.ID}`}>
                  <div className='rounded-[5px] h-[13rem]'>
                    <img
                      className='rounded-[10px] h-full object-contain'
                      src={relatedProduct.ImageLink}
                      alt={relatedProduct.Name}
                    />
                  </div>
                  <h3 className='font-bold hover:text-red-500 transition-all duration-300'>
                    {relatedProduct.Name}
                  </h3>
                </Link>
                <p className='relative inline-block group font-bold'>
                  <span className='inline-block transition-all duration-300 transform group-hover:translate-x-[-100%]transform -translate-x-[-100%] group-hover:translate-x-0 '>
                    ${relatedProduct.Price}
                  </span>
                  <button
                    className='left-full group-hover:translate-y-0 bg-red-500 text-white rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300'
                    onClick={() => handleAddToCart(relatedProduct.ID)}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Clients />
    </>
  );
};

export default ProductDetails;
