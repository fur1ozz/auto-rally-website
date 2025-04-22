import React, { useState } from 'react';

const Tooltip = ({ children, content, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positions = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-1',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-1',
        left: 'right-full top-1/2 -translate-y-1/2 mr-1',
        right: 'left-full top-1/2 -translate-y-1/2 ml-1',
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div
                    className={`absolute z-50 px-2 py-1 text-xs text-white bg-gray-800 border border-gray-600 rounded whitespace-nowrap pointer-events-none ${positions[position]}`}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
