import React, { useState } from "react";
const FilterPanel=()=>{
    const [isOpen1,setIsOpen1] = useState(true);
    const [isOpen2,setIsOpen2] = useState(true);
    const [isOpen3,setIsOpen3] = useState(true);
    return(
            <div className="sticky top-[356px] left-24 h-screen w-[320px] overflow-y-auto border-r-2 border-gray-200">
                <p className="text-center text-2xl pb-2">Filter And Sort</p>
                <button
                className="block w-full h-10 text-lg text-left pl-10 rounded-lg hover:bg-gray-200"
                onClick={()=> setIsOpen1(!isOpen1)}
                >
                <span>Category</span>
                <span className="absolute right-10"> {isOpen1 ? '−' : '+'}</span>
                </button>
                {isOpen1 &&(
                    <div className="p-4 bg-gray-50 text-md space-y-4">
                    <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     Dry Food
                     </label>
                     <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     Wet Food
                     </label>
                    </div>
                )}  
                <button
                className="block w-full h-10 text-lg text-left pl-10 rounded-lg hover:bg-gray-200"
                onClick={()=> setIsOpen2(!isOpen2)}
                >
                <span>Price</span>
                <span className="absolute right-10"> {isOpen2 ? '−' : '+'}</span>
                </button>
                {isOpen2 &&(
                    <div className="p-4 bg-gray-50 text-md space-y-4">
                    <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     0-1000
                     </label>
                     <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     1000-2000
                     </label>
                      <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     3000-4000
                     </label>
                      <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     1000-2000
                     </label>
                    </div>
                )}  
                <button
                className="block w-full h-10 text-lg text-left pl-10 rounded-lg hover:bg-gray-200"
                onClick={()=> setIsOpen3(!isOpen3)}
                >
                <span>Age Range</span>
                <span className="absolute right-10"> {isOpen3 ? '−' : '+'}</span>
                </button>
                {isOpen3 &&(
                    <div className="p-4 bg-gray-50 text-md space-y-4">
                    <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     0-1000
                     </label>
                     <label className="flex items-center">
                     <input type="radio" name="price" className="h-[20px] w-[20px] p-2 mr-2"/>
                     1000-2000
                     </label>
                    </div>
                )}  
            </div>
    );
}
export default FilterPanel;