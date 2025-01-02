import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { IoEarthOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="text-black">
      {/* Navbar container with transparency applied only to the background */}
      <div className="bg-white/10 shadow-md w-full h-[98px] px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Website Logo" className="h-[67px] w-[119px]" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? (
              <HiX size={30} />
            ) : (
              <HiOutlineMenu size={30} />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 font-semibold ml-auto">
          <Link to="/" className="text-white hover:text-blue-500">Home</Link>
          <Link to="/how-it-works" className="text-white hover:text-blue-500">How It Works</Link>
          <Link to="/packages" className="text-white hover:text-blue-500">Packages</Link>
          <Link to="/about-us" className="text-white hover:text-blue-500">About Us</Link>
          <Link to="/contact-us" className="text-white hover:text-blue-500">Contact Us</Link>
        </div>

        {/* Desktop Language and Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <IoEarthOutline color="white" />
            <Link to="/" className="text-white hover:text-blue-500">
              English
            </Link>
            <MdOutlineArrowDropDown color="#00A0B1" size={30} />
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact-us" className="text-white hover:text-blue-500">
              Sign Up
            </Link>
            <button className="w-[129px] h-[42px] text-white bg-[#00A0B1]">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white/10 md:hidden flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-white hover:text-blue-500">Home</Link>
          <Link to="/how-it-works" className="text-white hover:text-blue-500">How It Works</Link>
          <Link to="/packages" className="text-white hover:text-blue-500">Packages</Link>
          <Link to="/about-us" className="text-white hover:text-blue-500">About Us</Link>
          <Link to="/contact-us" className="text-white hover:text-blue-500">Contact Us</Link>
          <div className="flex items-center gap-2">
            <IoEarthOutline color="white" />
            <Link to="/" className="text-white hover:text-blue-500">
              English
            </Link>
            <MdOutlineArrowDropDown color="#00A0B1" size={30} />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link to="/contact-us" className="text-white hover:text-blue-500">
              Sign Up
            </Link>
            <button className="w-[129px] h-[42px] text-white bg-[#00A0B1]">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
