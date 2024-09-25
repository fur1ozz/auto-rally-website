import React from 'react';

export const TableNumber = ({ number }) => {
    return (
        <div className="w-[5%] flex justify-center font-chakra font-semibold text-lg text-rally-primary">
            {number}
        </div>
    );
};
export const TableNumberLarger = ({ number }) => {
    return (
        <div className="w-[5%] flex justify-center font-chakra font-semibold text-xl text-rally-primary">
            {number}
        </div>
    );
};

