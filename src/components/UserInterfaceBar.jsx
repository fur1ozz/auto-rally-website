import React from 'react';

const MenuItem = ({ name }) => {
    return (
        <li className="cursor-pointer font-semibold hover:bg-gray-300 rounded-sm px-3 py-2 transition justify-center flex">
            {name}
        </li>
    );
};
const UserInterfaceBar = () => {
    const menuItems = [
        'Jaunumi',
        'Dalībnieki',
        'Dokumenti',
        'Skatītājiem',
        'Čempionāts',
        'Rezultāti',
        'Galerija',
    ];
    return (
        <div className="w-full min-h-20 bg-black/60 justify-center flex p-5 text-white">
            <ul className="w-[1024px] justify-around items-center grid lg:grid-cols-7 sm:grid-cols-4 grid-cols-2">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} name={item} />
                ))}
            </ul>
        </div>
    );
};

export default UserInterfaceBar;