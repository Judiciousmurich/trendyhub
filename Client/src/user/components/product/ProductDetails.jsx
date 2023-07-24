import React, { useContext } from 'react';
import { Context } from '../../../context/Context';

const ProductDetails = ({ productId }) => {
  const { products } = useContext(Context);
  const product = products.find((p) => p.ID === productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.Name}</h2>
      <p>Price: ${product.Price}</p>
      <p>Description: {product.Description}</p>
      {/* Add more details here as needed */}
    </div>
  );
};

export default ProductDetails;
