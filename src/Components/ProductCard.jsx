import React from "react";

const ProductCard = ({image, title, price}) =>{
    return(
        <div className="relative w-full max-w-[320px] h-[60vh] overflow-hidden p-[40px] bg-white shadow-xl border border-gray-300 box-border">
            <img 
            src={image} 
            alt={title}
            loading="lazy"
            className="w-[100vh] h-[235px] object-cover"></img>
            <div className="pt-2 text-xl text-red-600 text-center">
                <h2>
                    {title}
                </h2>
                <p className="flex justify-center absolute bottom-16 inset-x-0 text-black text-md">PKR {price}</p>
            </div>
            <div className="flex justify-center absolute bottom-4 inset-x-0 text-lg text-white">
                <button className="bg-yellow-400 border border-gray-500 px-4 py-1 rounded-l-2xl">Add To Cart</button>
                <button className="bg-yellow-400 border border-gray-500 px-4 py-1 rounded-r-2xl">Buy Now</button>
            </div>
        </div>
    )
}
export default ProductCard;