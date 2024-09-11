import React from 'react';
import Header from "../components/UIFoundation/Header";
import Footer from "../components/UIFoundation/Footer";
import HomeCalendar from "../components/homePageComponents/HomeCalendar";
import RallyQuotes from "../components/homePageComponents/RallyQuotes";
import PreviousWinner from "../components/homePageComponents/PreviousWinner";
import UpcomingEvent from "../components/homePageComponents/UpcomingEvent";

const HomePage = () => {
    return (
        <>
            <div className="bg-black">
                <Header />
            </div>
            <UpcomingEvent />
            <PreviousWinner />
            <RallyQuotes />
            <HomeCalendar />
            <Footer />
        </>
    );
};

export default HomePage;