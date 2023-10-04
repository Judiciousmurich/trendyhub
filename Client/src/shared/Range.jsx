import React, { useState } from 'react';


const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { name: 'Smartwatch 2.0 LTE Wifi', price:199.99 },
    { name: 'Wireless Audio System Multiroom 360', price:299.99 },
    { name: 'Gore Wear C7', price: 159.99},
    { name: 'Audio System Multiroom 360', price:299.99 },
    { name: 'Beats', price:149.99 },
   ,
  ];

  const handleFilter = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="max-price"></label>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="font-bold">$0</div>
             
            </div>
            <input
              type="range"
              className="bg-[#f42c37] w-[80%] px-6 m-6"
              id="max-price"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className="flex items-center">
              <div className="font-bold">${maxPrice}</div>
            
            </div>
          </div>
        </div>

        <button
          onClick={handleFilter}
          className="bg-black rounded-[50px] py-3 px-28 m-6 text-[#ffffff]"
        >
          Filter
        </button>

        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PriceFilter;
