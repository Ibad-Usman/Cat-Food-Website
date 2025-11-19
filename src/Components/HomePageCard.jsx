import React from "react";

const HomePageCard = ({image, title}) =>{
    return(
        <div className="relative w-full max-w-[320px] h-[40vh] overflow-hidden p-[40px] bg-yellow-400 shadow-xl border border-gray-300 rounded-xl hover:scale-105 transition-transform duration-300 hover:bg-yellow-500 transition-transform duration-300 cursor-pointer">
            <img 
            src={image} 
            alt={title}
            loading="lazy"
            className="w-[100vh] h-[160px] object-cover"></img>
            <div className="pt-2 text-xl text-black text-center">
                <h2>
                    {title}
                </h2>
            </div>

        </div>
    )
}
export default HomePageCard;