import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-5 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div 
      className="text-2xl font-bold relative z-10">Katty Bites
      </div>

      <div className="flex text-black text-lg space-x-6">
        <Link to="/" className="hover:text-gray-800">Home</Link>
        <Link to="/cat-food-products" className="relative -top-1 items-center justify-center bg-[#FFB700] text-white px-3 py-1 rounded-xl hover:bg-yellow-500 transition duration-200">Products</Link>
        <Link to="/cat-food-subscription" className="hover:text-gray-800">Subscription</Link>
        <Link to="/about-us" className="hover:text-gray-800">About</Link>
        <a href="#" className="hover:text-gray-800">Contact</a>
      </div>
      

      <div className="flex">
        <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded-l-lg text-black border border-black border-r-0"
        />
        <button className="h-9 w-10 bg-yellow-400 flex items-center justify-center rounded-r-lg border border-black border-l-0 hover:bg-yellow-500 transition duration-200">
           <MagnifyingGlassIcon className="h-6 w-7 text-white" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
