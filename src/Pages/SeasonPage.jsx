import React from 'react';
import Header from "../components/UIFoundation/Header";
import Footer from "../components/UIFoundation/Footer";
import SeasonContainer from "../components/Seasons/SeasonContainer";

const SeasonPage = () => {
    return (
        <>
            <div className="bg-black">
                <Header />
            </div>
            <SeasonContainer />
            <Footer />
        </>
    );
};

export default SeasonPage;