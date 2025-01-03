import React from 'react';
import Header from "../components/UIFoundation/Header";
import Footer from "../components/UIFoundation/Footer";
import AllSeasonsContainer from "../components/Seasons/AllSeasonsContainer";

const AllSeasonsPage = () => {
    return (
        <>
            <div className="bg-black">
                <Header />
            </div>
            <AllSeasonsContainer />
            <Footer />
        </>
    );
};

export default AllSeasonsPage;