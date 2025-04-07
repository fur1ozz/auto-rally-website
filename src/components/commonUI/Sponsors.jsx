import React from 'react';
import TitleWithLine from "../elements/titleWithLine";

const SponsorsItem = ({ name, image, type, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center py-6 px-10 mx-auto mb-4 cursor-pointer shadow-[0_3px_8px_0_rgba(0,0,0,0.07)] hover:scale-95 transition-all duration-200 bg-white"
        >
            <div className="text-center text-xs font-semibold mb-2">{type}</div>
            <img className="w-40 h-12 object-contain" src={image} alt={`${name} Logo`} />
        </a>
    );
};

const Sponsors = () => {
    const fakeSponsors = [
        {
            name: "Pirelli",
            image: "https://www.autorally.lv/files/r235/sponsors/pirelli.png?v=2",
            type: "Riepu sponsors",
            url: "https://www.pirelli.com/",
        },
        {
            name: "Neste",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Neste_logo.png",
            type: "Galvenais sponsors",
            url: "https://www.neste.lv/",
        },
        {
            name: "LMT",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-hepaYIZnvw6ljEc8qAW9Rq9ohR9anSNiA&s",
            type: "Atbalstītājs",
            url: "https://www.lmt.lv/",
        },
        {
            name: "Bosch",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/2560px-Bosch-logo.svg.png",
            type: "Sadarbībā ar",
            url: "https://www.bosch.com/",
        },
        {
            name: "TV3 Group",
            image: "https://logosandtypes.com/wp-content/uploads/2021/02/TV3-Play.png",
            type: "Informatīvais partneris",
            url: "https://tv3.lv/",
        },
        {
            name: "Shell Helix",
            image: "https://vectorise.net/logo/wp-content/uploads/2011/01/Shelll-Helix3.jpg",
            type: "Atbalstītājs",
            url: "https://www.shell.com/motorist/oils-lubricants/helix.html",
        },
        {
            name: "Hankook",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Hankook_logo.png",
            type: "Riepu sponsors",
            url: "https://www.hankooktire.com/global/en/home.html",
        },
        {
            name: "Bosch Car Service",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Bosch_Car_Service_Logo_1999.svg/1200px-Bosch_Car_Service_Logo_1999.svg.png",
            type: "Sadarbībā ar",
            url: "https://www.boschcarservice.com/",
        },
        {
            name: "Castrol",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiLtVNk4eQFbA8LKgJ6Jee6XHwY09XCotzA&s",
            type: "Atbalstītājs",
            url: "https://www.castrol.com/",
        },
    ];

    return (
        <section className="w-full bg-white sm:px-14 px-10 pt-10 flex justify-center">
            <div className="lg:w-[1024px] w-full">
                <TitleWithLine title="Mūsu partneri" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 my-10 text-[#4e4e4e] font-chakra">
                    {fakeSponsors.map((sponsor, index) => (
                        <SponsorsItem
                            key={index}
                            name={sponsor.name}
                            image={sponsor.image}
                            type={sponsor.type}
                            url={sponsor.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
