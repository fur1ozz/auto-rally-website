import React from 'react';
import Header from "../components/UIFoundation/Header";
import RallyBanner from "../components/commonUI/RallyBanner";
import RallyMenuBar from "../components/commonUI/RallyMenuBar";
import Footer from "../components/UIFoundation/Footer";
import SpectatorsContainer from "../components/rallyPageComponents/SpectatorsContainer";

const SpectatorsPage = () => {
    return (
        <>
            <div
                className="bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/parallax-backgrounds/gravel-road.jpg)' }}
            >
                <Header />
                <RallyBanner />
                <RallyMenuBar />
            </div>
            <SpectatorsContainer />
            <Footer />
        </>
    );
};

export default SpectatorsPage;