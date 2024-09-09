import React from 'react';
import Header from "../components/UIFoundation/Header";
import RallyBanner from "../components/commonUI/RallyBanner";
import RallyMenuBar from "../components/commonUI/RallyMenuBar";
import NewsContainer from "../components/rallyPageComponents/NewsContainer";
import Footer from "../components/UIFoundation/Footer";

const NewsPage = () => {
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
            <NewsContainer />
            <Footer />
        </>
    );
};

export default NewsPage;