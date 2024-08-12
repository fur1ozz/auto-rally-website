import React from 'react';
import {Link} from "react-router-dom";

const UserInterfaceBar = () => {
    const menuItems = [
        { name: 'Jaunumi', path: '/news' },
        { name: 'Dalībnieki', path: '/participants' },
        { name: 'Dokumenti', path: '/documents' },
        { name: 'Skatītājiem', path: '/spectators' },
        { name: 'Čempionāts', path: '/championship' },
        { name: 'Rezultāti', path: '/results' },
        { name: 'Galerija', path: '/gallery' },
    ];

    return (
        <div className="w-full min-h-20 bg-black/60 justify-center flex p-5 text-white">
            <div className="w-[1024px] justify-around items-center grid lg:grid-cols-7 sm:grid-cols-4 grid-cols-2">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="cursor-pointer font-semibold hover:bg-gray-300 rounded-sm px-3 py-2 transition justify-center flex"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserInterfaceBar;
