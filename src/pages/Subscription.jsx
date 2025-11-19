import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SubCardTemp from "../Components/SubCardTemp";
import { Helmet } from "react-helmet-async";

export default function Subscription()
{
    return(
        <>
        <Helmet>
        <title>Subscribe Now And Never Run Out of Cat Food | Katty Bites</title>
        <meta name="description" content="Never run out of cat food with our convenient subscription service. Get premium natural cat food delivered all over Pakistan." />
        <meta property="og:title" content="Cat Food Subscription - Monthly Delivery Pakistan" />
        <meta property="og:description" content="Subscribe & save! Get Katty Bites natural cat food delivered automatically each month. Never run out, always save money." />
      </Helmet>
        <section className="overflow-hidden">
            <Navbar/>
            <div className="relative pt-16 w-screen min-h-screen">
                <div className="w-screen min-h-screen bg-yellow-400">
                    <div className="relative pl-14">
                        <img
                        src="/catpaws_sub.png"
                        alt="cat paws on screen"
                        loading="lazy"
                        className="relative left-20 w-[360px] h-[460px]"></img>
                        <div className="absolute top-0">
                        <h1 className="font-bebas text-6xl pt-32">Subscriptions</h1>
                        <p className="text-xl max-w-2xl">Want to stop looking for your cats specific preference every time?<br/> Well you're at the right stop then! We offer a wide variety of subscription packages packed with specially curated cat products. If our default packages are not to your liking then make your own Kitty Package!</p>
                        </div>
                    </div>
                    <div className="pt-24">
                        <h2 className="text-center font-bebas text-6xl">Packages</h2>
                        <div>
                            <SubCardTemp/>
                        </div>
                    </div>
                    <div className="h-32"></div>
                </div>
                <div className="absolute w-[40%] h-[70vh] right-0 top-16 bg-white rounded-l-full">
                <img
                    src="/cat_tongue.png"
                    alt="Cat sticking its tongue out while thinking about food"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-l-full">
                </img>
                <img
                    src="/taffys_food_2.png"
                    alt="Cat food being imagined by cat"
                    loading="lazy"
                    className="absolute top-4 transform -translate-x-1/2 w-[320px]">
                </img>
                </div>
                
            </div>
            <Footer/>
        </section>
        </>
    );
}