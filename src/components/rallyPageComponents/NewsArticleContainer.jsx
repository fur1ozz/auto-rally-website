import React from 'react';
import {Link, useParams} from "react-router-dom";
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
                            <h1 className=" font-bold text-black text-3xl mr-4 w-full mb-5">{articleData.title}</h1>
                            <div className="w-full flex sm:items-center sm:flex-row flex-col">
                                <div className="sm:w-1/3 sm:mr-5 overflow-hidden mb-4 sm:mb-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                                    <img src={ STORAGE_URL + articleData.img_src} alt="" className="w-full h-48 object-cover"/>
                                </div>
                                <div className="sm:w-2/3 mb-6">
                                    <div className="font-light text-sm opacity-60 ">{new Date(articleData.pub_date_time).toLocaleString()}</div>
                                    <p>{articleData.paragraph}</p>
                                </div>
                            </div>

                            <div className="border-b-2 w-full border-[#e5e7eb] my-7"></div>

                            <div className="w-full flex justify-center">
                                <div
                                    className="prose max-w-full"
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