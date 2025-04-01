import React from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useFetchData from "../../hooks/useFetchData";
import useLanguage from "../../hooks/useLanguage";
import Loader from "../elements/loaders/Loader";

const NewsArticleContainer = () => {
    const { lng, year, rallyName, articleId} = useParams();
    const { t } = useTranslation();
    const url = `/news-article/${year}/${rallyName}/${articleId}`;
    const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

    const { data: articleData, loading, error } = useFetchData(url);

    useLanguage(lng);
    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="flex items-center flex-col">
                    {loading && <Loader />}
                    {!loading && error && <div>Error loading data: {error.message}</div>}
                    {!loading && !error && articleData && (
                        <>
                            <h1 className="font-containerHeading font-bold text-black text-4xl mr-4 text-center w-full">{articleData.title}</h1>

                            {/* Publication Date */}
                            <p className=" text-center mb-6 font-light text-sm opacity-60">
                                {new Date(articleData.pub_date_time).toLocaleDateString()}
                            </p>
                            {/* Article Body (Rendering HTML safely) */}
                            <div
                                className="prose prose-lg prose-invert max-w-none "
                                dangerouslySetInnerHTML={{ __html: articleData.body }}
                            />
                            <div className="w-full flex justify-center">
                                <div
                                    className="prose prose-lg max-w-full"
                                    dangerouslySetInnerHTML={{ __html: articleData.body }}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsArticleContainer;