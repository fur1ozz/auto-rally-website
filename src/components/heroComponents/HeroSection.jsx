import React from 'react';
import Header from "../UIFoundation/Header";
import HeroMenuBar from "./HeroMenuBar";
import HeroTitle from "./HeroTitle";

const HeroSection = () => {
    return (
        <section
            className="bg-cover bg-center min-h-screen flex flex-col items-center"
            style={{ backgroundImage: 'url(/images/home-bg-1.png)' }}
        >
            <Header />
            <HeroTitle />
            <HeroMenuBar />
        </section>
    );
};

export default HeroSection;
