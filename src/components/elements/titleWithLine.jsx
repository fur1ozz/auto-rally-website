import React from 'react';

const TitleWithLine = ({ title }) => {
    return (
        <div className="flex items-center">
            <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mr-4 capitalize">{title}</h2>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
        </div>
    );
};

export default TitleWithLine;
