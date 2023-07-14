import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { motion } from 'framer-motion';

const SideNav = () => {
  return (
    <motion.div
      className="bg-[#e6e6e6] h-screen w-[30%]"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <h1 className='font-bold
        text-3xl text-[#666666]'>Trendy Hub</h1>
      <ul className="mt-8">
        <li className="mb-4">
          <Link to="/add-product" className="flex items-center text-blue-600 hover:text-blue-800">
            <AiOutlinePlus className="mr-2" />
            Add Product
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/users" className="flex items-center text-blue-600 hover:text-blue-800">
            <AiOutlineUser className="mr-2" />
            Users
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800">
            <AiOutlineShopping className="mr-2" />
            Products
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default SideNav;
