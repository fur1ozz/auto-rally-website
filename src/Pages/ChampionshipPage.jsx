import React from 'react';
import Header from "../components/UIFoundation/Header";
import Footer from "../components/UIFoundation/Footer";
import ChampContainer from "../components/otherPageComponents/ChampContainer";

const ChampionshipPage = () => {
    return (
        <>
            <div className="bg-black">
                <Header />
            </div>
            <ChampContainer />
            <Footer />
        </>
    );
};

export default ChampionshipPage;