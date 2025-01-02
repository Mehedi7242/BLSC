import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaPhone, FaSignInAlt, FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false); // State for toggling mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for toggling dropdown menu
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

  // Check if the page is scrolled
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-gray-800 text-white shadow-md w-full ${isSticky ? "fixed top-0 left-0 z-10" : "relative"}`}
    >
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-green-500">B</span>LCS
          </Link>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 md:space-x-8 transition-all duration-300 ease-in-out ${
            isMobile ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-green-500">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center space-x-2 hover:text-green-500">
              <FaInfoCircle />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center space-x-2 hover:text-green-500">
              <FaPhone />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center space-x-2 hover:text-green-500">
              <FaSignInAlt />
              <span>Login</span>
            </Link>
          </li>

          {/* Dropdown for Private Routes */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 hover:text-green-500"
            >
              <FaCaretDown />
              <span>Private Routes</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-gray-800 text-white shadow-md mt-2 w-48 rounded-md">
                <li>
                  <Link
                    to="/dashboard"
                    className="block p-2 hover:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appointments"
                    className="block p-2 hover:bg-gray-700"
                  >
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="block p-2 hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support/issues"
                    className="block p-2 hover:bg-gray-700"
                  >
                    Support Issues
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support/raise-issue"
                    className="block p-2 hover:bg-gray-700"
                  >
                    Raise Issue
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
