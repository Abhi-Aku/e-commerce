import React from 'react';
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import ImageSlider from '../Pages/ImageSlider';
import Sec from '../Pages/Sec';

 
const Header = () => {
  

  return (
    <>
       <header className=' flex justify-center items-center'>
      <nav className="bg-amber-700 w-full  flex justify-center items-center p-3 gap-30">
        {/* Logo */}
        <div className="text-5xl font-bold text-white">flipkart</div>
        
        {/* Search Bar */}
        <div className="flex items-center gap-2 w-1/3 bg-blue-300 p-2 rounded-sm border">
          <input
            className="outline-none w-full p-1"
            type="text"
            placeholder="Search"
          />
          <span>
            <FaSearch />
          </span>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center gap-2 text-white">
          <MdOutlineShoppingCart />
          <span>Cart</span>
        </div>

        {/* Login Icon */}
        <div className="flex items-center gap-2 text-white">
          <VscAccount />
          <span>Login</span>
        </div>
      </nav>
    </header>
    {/* sec */}
    <Sec />

{/*      <ImageSlider /> */}
<ImageSlider /> 
     
    </>
  );
};

export default Header;
