import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import './nav.css';
// import '../../context/Context'

const { cartItems } = useContext(Context);


const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');

    window.location.href = '/auth/login';
  };

  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <div className="navbar">

        <div className='text-[#f42c37] tracking-wider text-3xl font-bold'>
          <Link to="/">TrendyHub</Link>

        </div>
        <div className="links">
          {user && (
            <>
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
            </>

          )}
        </div>
        {!user && (
          <NavLink to="/auth/login" className="btn">
            Login
          </NavLink>
        )}
        {user && (
          <button className="btn" onClick={handleLogout} style={{ fontSize: "1rem" }}>
            Logout
          </button>
        )}


        <div className='nav-icons'>
          <p>
            < FaSearch />

          </p>
          <p>

            <NavLink to="/cart">
              <FaShoppingBag />
              {cartItems.length > 0 && (
                <span className="notification-badge">{cartItems.length}</span>
              )}
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
