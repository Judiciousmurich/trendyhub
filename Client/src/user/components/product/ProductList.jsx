import { Link } from "react-router-dom";
import { useState } from "react";
import Product from "./Product";
import Clients from "../../../shared/Clients";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import PriceFilter from "../../../shared/Range";

const ProductList = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const togglePrice = () => {
    setShowPrice(!showPrice);
  };

  return (
    <>
      <div className="bg-[#e2e2e2] w-screen p-16 mb-8 ">
        <i className="flex flex-col items-center w-full">
          <Link to="/" className="text-[#666666]">
            Home / Products
          </Link>
          <h1 className="font-bold text-4xl">Products</h1>
        </i>
      </div>

      <div className="flex">
        <div>
          <div className="flex bg-[#ededed] p-3 rounded-[50px] m-6">
            <input
              type="email"
              placeholder="Search Here"
              className="bg-[#ededed] mx-2"
            />
            <button className="bg-[#f42c37] rounded-[50px] py-2 px-2 text-[#ffffff]">
              <FaSearch />
            </button>
          </div>
          <h1
            className="font-bold text-1xl mb-3 tracking-wide m-6 cursor-pointer"
            onClick={toggleCategories}
          >
            Product Categories{" "}
            <FaCaretDown
              className={`inline ml-1 ${
                showCategories ? "transform rotate-180" : ""
              }`}
            />
          </h1>
          {showCategories && (
            <ul className="text-[#7f7f7f] mx-5 mb-3 tracking-wide">
              <li className="hover:text-[#f42c37] cursor-pointer hover:font-bold">
                Earphones
              </li>
              <li className="hover:text-[#f42c37] cursor-pointer hover:font-bold">
                <Link to="/blog">Gadgets</Link>
              </li>
              <li className="hover:text-[#f42c37] cursor-pointer hover:font-bold">
                Gaming
              </li>
              <li className="hover:text-[#f42c37] cursor-pointer hover:font-bold">
                <Link to="/products">Headphones</Link>
              </li>
              <li className="hover:text-[#f42c37] cursor-pointer hover:font-bold">
                Laptop
              </li>
              <li className="hover:text-[#f42c37] cursor-pointer hover:font-bold">
                Speaker
              </li>
              <li className="hover:text-[#f42c37] cursor-pointer hover:font-bold">
                Uncategorized
              </li>
            </ul>
          )}
          <hr />
          <h1
            className="font-bold text-1xl tracking-wide m-6 cursor-pointer"
            onClick={togglePrice}
          >
            Choose Price{" "}
            <FaCaretDown
              className={`inline ml-1 ${
                showPrice ? "transform rotate-180" : ""
              }`}
            />
          </h1>

          {showPrice && <PriceFilter />}
        </div>
        <div className="p-6">
          <div>
            <h1 className="font-bold text-4xl mb-4">Shop</h1>
            <h1 className="text-[#0d0d0d] mb-4">
              Showing 1-9 of 10 results
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
      <Clients />
    </>
  );
};

export default ProductList;
