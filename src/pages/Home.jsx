import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";
import HomePageCardTemp from "../Components/HomePageCardTemp";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Katty Bites | Premium Quality Pet Food Available in Pakistan</title>
        <meta name="description" content="Your one-stop shop for all feline diet needs, offering premium and nutritionally balanced cat food delivered across Pakistan. Premium quality food that keeps your feline friend healthy and happy." />
        <meta name="keywords" content="cat food, kitten food, cat food Pakistan, cat biscuits, good cat food" />
        <meta property="og:title" content="Katty Bites | Premium Quality Pet Food Available in Pakistan" />
        <meta property="og:description" content="Your one-stop shop for all feline diet needs, offering premium and nutritionally balanced cat food delivered across Pakistan. All our products are made from natural ingredients with no artificial flavouring so you can get only the BEST for your cat." />
      </Helmet>
    <div>
      <Navbar/>  
      <section className="w-full h-screen pt-[64px] flex justify-center">
        <img 
            src="/catpaws.png"
            alt="Cat paws on screen"
            loading="eager"
            width="800"
            height="500"
            className="absolute top-24 left-0 w-[800px] h-[500px] object-contain"
          />
        <h1 className="absolute left-28 top-60 font-oswald text-6xl max-w-2xl">Nature's Best for Your Cat</h1>
        <div className="font-yellow text-5xl space-y-8">
          <h2 className="absolute left-56 top-80 ">100% Natural!</h2>
          <h2 className="absolute left-52 top-[360px] ">Premium Quality</h2>
          <h2 className="absolute left-40 top-[440px] ">No Artificial Flavouring</h2>
        </div>
         <img 
            src="/onlycat.jpg"
            alt="Cat laying down and eating food from bowl"
            loading="eager"
            className="mx-auto"
          />
          <button
            className="absolute flex items-center gap-2 bottom-36 left-64 bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-full"
          >
             <span>Shop Now</span>
             <div className="absolute text-black right-4">
            <ArrowUpRightIcon className="w-5 h-5" />
            </div>
           </button>
      </section>
      <section className="flex items-center pl-44 pt-44">
      <div className="">
      <h2 className="font-bebas text-6xl">WHAT WE PROVIDE.</h2>
      <p className="text-xl max-w-xl">We offer a wide range of high-quality cat food whether it be dry, wet or from a specific brand. We're your one-stop shop for your cats diet with all our products being sourced from trusted sellers to ensure they meet <span className="font-bold">YOUR</span> quality standards.</p>
      </div>
      <img
        src=""
        alt="cat playing with toy"
        loading="lazy"
        className="relative w-[50vh] h-[50vh] shadow-2xl rounded-3xl left-40"
      ></img>
      </section>
      <section className="flex flex-col items-center pt-28 mb-32 overflow-hidden">
        <h2 className="font-bebas text-6xl"> Product Types</h2>
        <div className="relative left-52 mb-10">
        <HomePageCardTemp/>
        <p className="absolute bottom-36 right-48 text-lg hover:text-gray-600 cursor-pointer">All Products</p>
        </div>
      </section>
      <Footer/>
    </div>
    </>
  );
}