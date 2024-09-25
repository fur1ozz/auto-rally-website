import React from 'react';

const Table = ({ children }) => {
    return (
        <div className="min-w-[1024px] flex flex-col font-chakra">
            {children}
        </div>
    );
};

export default Table;
