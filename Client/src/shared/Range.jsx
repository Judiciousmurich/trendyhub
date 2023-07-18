import React, { useState } from 'react';

const PriceFilter = () => {
    const [minPrice, setMinPrice] = useState(300);
    const [maxPrice, setMaxPrice] = useState(2000);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = [
        { name: 'Product A', price: 500 },
        { name: 'Product B', price: 1000 },
        { name: 'Product C', price: 1500 },
        // Add more products here
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
                    <input
                        type="range" className='bg-[#f42c37] w-[80%] px-6 m-6'
                        id="max-price"
                        min={300}
                        max={2000}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                    <div className='flex justify-around gap-20'>
                        <div className='font-bold'>$300</div>
                        <div className='font-bold'>${maxPrice}</div>

                    </div>
                </div>

                <button onClick={handleFilter} className='bg-black rounded-[50px] py-3  px-28 m-6 text-[#ffffff] '>Filter</button>

                <ul>
                    {filteredProducts.map((product, index) => (
                        <li key={index}>{product.name} - ${product.price}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default PriceFilter;
