import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaPhone,
} from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            MyTalorZone
          </Link>
        </div>
        {/* Center Section: Search Bar */}
        <div className="navbar-center">
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search"
              className="navbar-search-input"
            />
            <button className="navbar-search-button">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="navbar-right">
          <Link to="/wishlist" className="navbar-icon">
            <FaHeart />
            <span className="navbar-icon-label">Wishlist</span>
          </Link>
          <Link to="/cart" className="navbar-icon">
            <FaShoppingCart />
            <span className="navbar-icon-label">Cart</span>
          </Link>
          <Link to="/login" className="navbar-icon">
            <FaUser />
            <span className="navbar-icon-label">Login</span>
          </Link>
          <Link to="/contact" className="navbar-icon">
            <FaPhone />
            <span className="navbar-icon-label">Contact Us</span>
          </Link>
        </div>
      </nav>

      {/* Categories Section */}
      <div className="navbar-categories">
        <ul>
          <li>
            <Link to="/Home" className="navbar-category-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/ethnic-wear" className="navbar-category-link">
              Ethnic Wear
            </Link>
          </li>
          <li>
            <Link to="/best-sellers" className="navbar-category-link">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link to="/dresses" className="navbar-category-link">
              Dresses
            </Link>
          </li>
          <li>
            <Link to="/co-ords-jumpsuits" className="navbar-category-link">
              Co-Ords & Jumpsuits
            </Link>
          </li>
          <li>
            <Link to="/tops-shirts" className="navbar-category-link">
              Tops & Shirts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
