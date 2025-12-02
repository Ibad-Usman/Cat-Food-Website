import React from "react";
import ProdCardTemp from "../Components/ProdCardTemp";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FilterPanel from "../Components/FilterPanel";
export default function Product(){
    return(
        <>
        <Helmet>
                <title>Katty Bites | Premium & Natural Cat Food Products In Pakistan</title>
                <meta name="description" content="Browse our premium natural cat food products deliverd all over Pakistan. From kitten to senior cats, we have everything your cat needs!" />
                <meta name="keywords" content="cat food, kitten food, cat food Pakistan, cat biscuits, good cat food" />
                <meta property="og:title" content="Premium Natural Cat Food Products - Katty Bites" />
                <meta property="og:description" content="Check out our 100% natural cat food products which are made from the finest ingredients with no artificial flavouring." />
        </Helmet>
        <Navbar/>
        <main>
        <div className="pt-32">
        <h1 className="text-center font-bebas text-6xl">Our Products</h1>
        <p className="text-lg pt-4 pl-32 max-w-[1404px]">
            Give your feline friend the pure nutrition they deserve with our 100% natural cat food. 
            Our recipes use only the finest ingredients with absolutely no artificial flavors, colors, or preservatives.
        </p>
        </div>
        <div className="flex mb-32">
        <FilterPanel/>
        <ProdCardTemp/>
        </div>
        </main>
        <Footer/>
        </>
    );
}