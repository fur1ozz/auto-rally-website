import React from 'react';
import Flag from "react-flagkit";

const TableFlag = ({nationality, coNationality}) => {
    return (
        <div className="flex flex-col w-[4%] items-end pr-2">
            <Flag country={nationality.toUpperCase()} className="mb-1 rounded-sm" />
            <Flag country={coNationality.toUpperCase()} className="rounded-sm" />
        </div>
    );
};

export default TableFlag;