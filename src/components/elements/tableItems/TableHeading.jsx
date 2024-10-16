import React from 'react';

const TableHeading = ({ children }) => {
    return (
        <div className="flex w-full justify-between py-2 border-b-2 border-gray-400 text-black font-semibold items-end">
            {children}
        </div>
    );
};

export default TableHeading;
