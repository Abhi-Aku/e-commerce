import React from 'react'
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";



const Header = () => {
  return (
   <>
   <header>
    <nav className=' bg-amber-700 w-screen flex justify-between p-3 items-center'>
       <div>Logo</div>
       <div className=' flex justify-center items-center gap-2 bg-blue-300 p-1 rounded-sm border-1 border-black'  >
        <input
        className=' outline-none ' type="text" name=" " id="" placeholder=' search'/><span><FaSearch />        </span>
       </div>
       <div className=' flex justify-center items-center gap-2'><MdOutlineShoppingCart />
       Cart</div>
       <div className=' flex justify-center items-center gap-2'> <VscAccount />
       login</div>
    </nav>
   </header>
   </>
  )
}

export default Header