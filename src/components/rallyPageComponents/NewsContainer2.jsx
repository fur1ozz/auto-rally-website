import React from 'react';
import {useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/loaders/Loader";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";

const NewsItem = ({ date, title, paragraph, imgSrc }) => {
    return (
        <div className="flex mt-10">
            <div className="w-full flex sm:items-center font-descFont sm:flex-row flex-col">
                <div className="sm:w-1/3 sm:mr-5 overflow-hidden mb-4 sm:mb-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                    <img src={imgSrc} alt="" className="w-full h-48 object-cover hover:scale-110 transition-all duration-200"/>
                </div>
                <div className="sm:w-2/3 mb-6">
                    <div className="font-light text-sm opacity-60">{date}</div>
                    <a href="#" className="font-medium text-[#f0f2fe] cursor-pointer text-xl tracking-wide">{title}</a>
                    <p className="font-light opacity-60">{paragraph}</p>
                </div>
            </div>
        </div>
    );
};
const NewsContainer = () => {
    const { lng, year, rallyName } = useParams();
    const { t } = useTranslation();
    const url = `http://localhost/api/news/${year}/${rallyName}`;

    const { data: newsData, loading, error } = useFetchData(url);

    useLanguage(lng);
    return (
        <section className="w-full min-h-20 bg-rally-primary sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <div className="font-containerHeading font-bold text-white text-4xl mr-4">{t('rally-menu-bar.news')}</div>
                    <div className="flex-1 h-0.5 bg-white"></div>
                </div>
                {loading && <Loader />}
                {!loading && error && <div>Error loading data: {error.message}</div>}

                {!loading && !error && (
                    newsData.length > 0 ? (
                        newsData.map((news, index) => (
                            <NewsItem
                                key={index}
                                date={news.pub_date_time}
                                title={news.title}
                                paragraph={news.paragraph}
                                imgSrc={`/images/newsImages/img${index+1}.png`}
                            />
                        ))
                    ) : (
                        <div className="mt-10 text-white text-center">
                            Pašlaik nav jaunu ziņu.
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default NewsContainer;
