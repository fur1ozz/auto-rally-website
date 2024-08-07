import React from 'react';
import Header from "./Header";
import RallyBanner from "./RallyBanner";
import UserInterfaceBar from "./UserInterfaceBar";
import NewsContainer from "./NewsContainer";
import Footer from "./Footer";

const NewsPage = () => {
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
            <NewsContainer />
            <Footer />
        </>
    );
};

export default NewsPage;