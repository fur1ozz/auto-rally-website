import React from 'react';
import Header from "./Header";
import RallyBanner from "./RallyBanner";
import UserInterfaceBar from "./UserInterfaceBar";
import NewsContainer from "./NewsContainer";

const NewsPage = () => {
    return (
        <>
            {/*<Header />*/}
            <RallyBanner />
            <UserInterfaceBar />
            <NewsContainer />
        </>
    );
};

export default NewsPage;