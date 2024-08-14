import React from 'react';
import Header from "../Header";
import RallyBanner from "../RallyBanner";
import UserInterfaceBar from "../UserInterfaceBar";
import NewsContainer from "../NewsContainer";
import Footer from "../Footer";
import ParticipantContainer from "../ParticipantContainer";

const ParticipantPage = () => {
    return (
        <>
            <div
                className="bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/parallax-backgrounds/winter-road.jpg)' }}
            >
                <Header />
                <RallyBanner />
                <UserInterfaceBar />
            </div>
            <ParticipantContainer />
            <Footer />
        </>
    );
};

export default ParticipantPage;