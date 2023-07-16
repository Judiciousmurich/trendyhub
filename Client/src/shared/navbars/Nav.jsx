import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import './nav.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
      </ul> */}
        <div className='text-[#f42c37] tracking-wider text-3xl font-bold'>
            TrendyHub
          
        </div>
        <div className="links">
          <NavLink to="/" >
            Home
          </NavLink>
          <NavLink to="/products" >
            Shop
          </NavLink>
          <NavLink to="/about" >
            About us
          </NavLink>
          <NavLink to="/blog" >
            Blog
          </NavLink>
          <NavLink to="/contact" >
            Contact Us
          </NavLink>
        </div>
        <NavLink to="/auth/login" className="btn">
          Login
        </NavLink>

        <div className='nav-icons'>
          <p>
            < FaSearch />

          </p>
          <p>

            <NavLink to="cart">

              <FaShoppingBag />
            </NavLink>
          </p>
        </div>
      </div>
      <div className='nav-links'>
        <div className='links'>

        </div>
      </div>

    </>

  );
};

export default Navbar;
