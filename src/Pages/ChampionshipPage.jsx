import React from 'react';
import Header from "../components/UIFoundation/Header";
import RallyBanner from "../components/commonUI/RallyBanner";
import RallyMenuBar from "../components/commonUI/RallyMenuBar";
import ParticipantContainer from "../components/rallyPageComponents/ParticipantContainer";
import Footer from "../components/UIFoundation/Footer";
import ChampContainer from "../components/rallyPageComponents/ChampContainer";

const ChampionshipPage = () => {
    return (
        <>
            <div
                className="bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/parallax-backgrounds/winter-road.jpg)' }}
            >
                <Header />
                <RallyBanner />
                <RallyMenuBar />
            </div>
            <ChampContainer />
            <Footer />
        </>
    );
};

export default ChampionshipPage;