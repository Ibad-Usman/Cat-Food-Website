import React from "react";
import HomePageCard from "./HomePageCard";
const HomePageCardTemp = () =>{
    return(
            <div className="grid grid-cols-3 gap-20 pt-28">
                <HomePageCard
                image="/dryfood.png"
                title="Dry Cat Foods"/>
                <HomePageCard
                image="wetfood.png"
                title="Wet Cat Foods"
                />
            </div>
    )
}
export default HomePageCardTemp;