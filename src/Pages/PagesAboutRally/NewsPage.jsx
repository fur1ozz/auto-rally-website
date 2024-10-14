import React from 'react';
import NewsContainer from "../../components/rallyPageComponents/NewsContainer";
import RallyPageLayout from "./RallyPageLayout";
import NewsContainer2 from "../../components/rallyPageComponents/NewsContainer2";

const NewsPage = () => {
    return (
        <RallyPageLayout>
            <NewsContainer2 />
        </RallyPageLayout>
    );
};

export default NewsPage;