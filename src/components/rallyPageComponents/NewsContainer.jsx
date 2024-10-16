import React from 'react';
import TitleWithLine from "../elements/titleWithLine";

const NewsItem = ({ date, title, paragraph, imgSrc }) => {
    return (
        <div className="flex mt-10">
            <div className="w-full flex sm:items-center font-descFont sm:flex-row flex-col group cursor-pointer">
                <div className="sm:w-1/3 sm:mr-5 overflow-hidden mb-4 sm:mb-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                    <img src={imgSrc} alt="" className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-200 rounded-sm"/>
                </div>
                <div className="sm:w-2/3 mb-6">
                    <div className="font-light text-sm opacity-60">{date}</div>
                    <a href="#" className="font-medium text-gray-700 text-xl tracking-wide group-hover:text-rally-primary transition-all duration-100">{title}</a>
                    <p className="font-light text-black">{paragraph}</p>
                </div>
            </div>
        </div>
    );
};
const NewsContainer = () => {
    const newsData = [
        {
            date: '05-08-2024 15:05',
            title: 'Informācija rallija ekipāžām',
            paragraph: 'Šodien, 23. jūlijā, ir pēdējā diena, lai pieteiktos rallijam Cēsis 2024 par zemāku dalības maksu, līdz 26. jūlijam tā tiks paaugstināta.',
            imgSrc: '/images/newsImages/img1.png',
        },
        {
            date: '04-08-2024 14:00',
            title: 'Rallija sacensības tuvojas',
            paragraph: 'Rallija sacensības tuvojas, un dalībniekiem ir jābūt gataviem izaicinājumam. Līdzjutēji tiek aicināti piedalīties.',
            imgSrc: '/images/newsImages/img2.png',
        },
        {
            date: '03-08-2024 13:30',
            title: 'Svarīga informācija dalībniekiem',
            paragraph: 'Dalībniekiem jāņem vērā jaunākie noteikumi un izmaiņas, kas ir publicētas oficiālajā mājaslapā.',
            imgSrc: '/images/newsImages/img3.png',
        },
    ];
    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <TitleWithLine title="Jaunumi" />
                {newsData.length > 0 ? (
                    newsData.map((news, index) => (
                        <NewsItem
                            key={index}
                            date={news.date}
                            title={news.title}
                            paragraph={news.paragraph}
                            imgSrc={news.imgSrc}
                        />
                    ))
                ) : (
                    <div className="mt-10 text-gray-700 text-center">
                        Pašlaik nav jaunu ziņu.
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsContainer;
