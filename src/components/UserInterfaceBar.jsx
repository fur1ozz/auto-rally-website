import React from 'react';

const MenuItem = ({ name }) => {
    return (
        <li className="cursor-pointer font-semibold hover:bg-gray-300 rounded px-3 py-1 transition">
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
        <div className="w-full h-20 bg-[#f0f2fe] justify-center flex">
            <ul className="w-[1024px] flex justify-around items-center">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} name={item} />
                ))}
            </ul>
        </div>
    );
};

export default UserInterfaceBar;