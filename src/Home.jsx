import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import HomeCategory from "./components/HomeCategory";
import AdBlock1 from "./components/AdBlock1";
import Collection from "./components/Collection";
import AdBlock2 from "./components/AdBlock2";

const Home = () => {
    return (
        <>
        <Header/>
        <Banner/>
        <HomeCategory/>
        <AdBlock1/>
        <Collection/>
        <AdBlock2/>
        </>
    )
}

export default Home;