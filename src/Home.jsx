import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import HomeCategory from "./components/HomeCategory";
import AdBlock1 from "./components/AdBlock1";
import Collection from "./components/Collection";
import AdBlock2 from "./components/AdBlock2";
import NewProduct from "./components/NewProduct";
import BrandBlock from "./components/BrandBlock";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

const Home = () => {
        useEffect(()=>{
            window.scrollTo(0,0);
            document.title = "Home Page";
        },[])
    return (
        <>
        {/* <Header/> */}
        <Banner/>
        <HomeCategory/>
        <AdBlock1/>
        <Collection/>
        <AdBlock2/>
        <NewProduct/>
        <Blogs/>
        <BrandBlock/>
        {/* <Footer/> */}
        </>
    )
}

export default Home;