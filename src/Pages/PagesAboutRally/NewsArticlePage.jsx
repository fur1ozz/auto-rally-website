import React from 'react';
import RallyPageLayout from "./RallyPageLayout";
import NewsArticleContainer from "../../components/rallyPageComponents/NewsArticleContainer";

const NewsArticlePage = () => {
    return (
        <RallyPageLayout>
            <NewsArticleContainer />
        </RallyPageLayout>
    );
};

export default NewsArticlePage;