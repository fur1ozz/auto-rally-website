import React from 'react';
import Header from "../Header";
import RallyBanner from "../RallyBanner";
import UserInterfaceBar from "../UserInterfaceBar";
import Footer from "../Footer";
import SpectatorsContainer from "../SpectatorsContainer";

const SpectatorsPage = () => {
    return (
        <>
            <div
                className="bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/parallax-backgrounds/gravel-road-3.jpg)' }}
            >
                <Header />
                <RallyBanner />
                <UserInterfaceBar />
            </div>
            <SpectatorsContainer />
            <Footer />
        </>
    );
};

export default SpectatorsPage;