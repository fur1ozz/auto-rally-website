import React from 'react';
import Header from "../components/UIFoundation/Header";
import RallyBanner from "../components/commonUI/RallyBanner";
import RallyMenuBar from "../components/commonUI/RallyMenuBar";
import UpcomingEvent from "../components/pageSpecific/UpcomingEvent";
import Footer from "../components/UIFoundation/Footer";
import HeroSection from "../components/heroComponents/HeroSection";
import HomeCalendar from "../components/pageSpecific/HomeCalendar";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <UpcomingEvent />
            <HomeCalendar />
            <Footer />
        </>
    );
};

export default HomePage;