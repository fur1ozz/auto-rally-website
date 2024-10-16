import React from 'react';

export const TableCrew = ({driver, coDriver}) => {
    return (
        <div className="flex flex-col w-[19%] font-normal">
            <div>{driver}</div>
            <div>{coDriver}</div>
        </div>
    );
};

export const TableCrewHeading = () => {
    return (
        <div className="flex flex-col w-[19%]">
            <div>Pilots</div>
            <div>Stūrmanis</div>
        </div>
    );
};


