import React from 'react';
import {Link, useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/loaders/Loader";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";

const NewsItem = ({ id, date, title, paragraph, imgSrc }) => {
    const { lng, year, rallyName } = useParams();

    return (
        <div className="flex mt-10">
            <Link to={`/${lng}/${year}/${rallyName}/news/${id}`} className="w-full flex sm:items-center font-descFont sm:flex-row flex-col group">
                <div className="sm:w-1/3 sm:mr-5 overflow-hidden mb-4 sm:mb-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                    <img src={imgSrc} alt="" className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-200"/>
                </div>
                <div className="sm:w-2/3 mb-6">
                    <div className="font-light text-sm opacity-60">{new Date(date).toLocaleString()}</div>
                    <h3 className="relative font-medium text-[#f0f2fe] cursor-pointer text-xl tracking-wide after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-0 after:h-[2px] after:bg-[#f0f2fe] after:transition-all after:duration-200 group-hover:after:w-full">
                        {title}
                    </h3>
                    <p className="text-[#e6e6e6] font-light">{paragraph}</p>
                </div>
            </Link>
        </div>
    );
};
const NewsContainer = () => {
    const { lng, year, rallyName } = useParams();
    const { t } = useTranslation();
    const url = `/news/${year}/${rallyName}`;
    const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

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
                                id={news.id}
                                date={news.pub_date_time}
                                title={news.title}
                                paragraph={news.paragraph}
                                imgSrc={STORAGE_URL+news.img_src}
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
