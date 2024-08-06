import React from 'react';
import Header from "./Header";
import RallyBanner from "./RallyBanner";
import UserInterfaceBar from "./UserInterfaceBar";
import NewsContainer from "./NewsContainer";
import Footer from "./Footer";

const NewsPage = () => {
    return (
        <>
            <Header />
            <RallyBanner />
            <UserInterfaceBar />
            <NewsContainer />
            <Footer />
        </>
    );
};

export default NewsPage;