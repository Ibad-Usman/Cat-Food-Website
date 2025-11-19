import React from "react";
import ProductCard from "./ProductCard";
const Card = () =>{
    return(
            <div className="grid grid-cols-3 gap-4 pl-28 pt-24">
                <ProductCard
                image="/royalcanpro.png"
                title="Sensitive Digestion Dry Cat Food"
                price="7060"/>
                <ProductCard
                image="royalcaninadult.png"
                title="Weight Care Adult Dry Cat Food"
                price="8190"
                />
                <ProductCard
                image="/royalcanincare.png"
                title="Hairball Care Dry Cat Food"
                price="8190"
                />
                <ProductCard
                image="/royalcanincare.png"
                title="Hairball Care Dry Cat Food"
                price="8190"
                />
            </div>
    )
}
export default Card;