import React from 'react';
import Header from "../components/UIFoundation/Header";
import RallyBanner from "../components/commonUI/RallyBanner";
import RallyMenuBar from "../components/commonUI/RallyMenuBar";
import NewsContainer from "../components/rallyPageComponents/NewsContainer";
import Footer from "../components/UIFoundation/Footer";
import ParticipantContainer from "../components/rallyPageComponents/ParticipantContainer";

const ParticipantPage = () => {
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
            <ParticipantContainer />
            <Footer />
        </>
    );
};

export default ParticipantPage;