import React from 'react';
import Header from "../../components/UIFoundation/Header";
import RallyBanner from "../../components/commonUI/RallyBanner";
import RallyMenuBar from "../../components/commonUI/RallyMenuBar";
import Footer from "../../components/UIFoundation/Footer";

const RallyPageLayout = ({ children }) => {
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
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default RallyPageLayout;