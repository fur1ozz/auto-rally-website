import React from 'react';

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
        <div className="w-full min-h-20 bg-rally-primary sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <div className="font-containerHeading font-bold text-white text-4xl mr-4">Jaunumi</div>
                    <div className="flex-1 h-0.5 bg-white"></div>
                </div>
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
                    <div className="mt-10 text-white text-center">
                        Pašlaik nav jaunu ziņu.
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsContainer;
