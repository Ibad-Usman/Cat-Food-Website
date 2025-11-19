import React from "react";

const SubCard = ({image, title, price}) =>{
    return(
        <div className="relative w-full max-w-[320px] h-[320px] overflow-hidden p-[40px] bg-[#fea006] shadow-xl border border-black rounded-3xl box-border hover:scale-105 transition-transform duration-300 hover:bg-[#f89b01] transition-transform duration-300 cursor-pointer">
            <img 
            src={image} 
            alt={title}
            className="mx-auto w-[130px] h-[130px] object-cover"></img>
            <div className="pt-2 text-xl text-black text-center">
                <h2>
                    {title}
                </h2>
                <p className="flex justify-center absolute bottom-16 inset-x-0 text-black text-md">{price}</p>
            </div>
            <div className="flex justify-center absolute bottom-4 inset-x-0 text-lg text-white">
                <button className="bg-yellow-400 border border-black text-black px-4 py-1 rounded-2xl">Check Package</button>
            </div>
        </div>
    )
}
export default SubCard;