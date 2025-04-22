import React, { useState } from 'react';

const CopyText = ({ text, className = '' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1300); // match animation length
        } catch (err) {
            console.error('Copy failed', err);
        }
    };

    return (
        <div className="relative inline-block">
            {copied && (
                <div className="absolute -top-0 left-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded animate-quick-fade z-20 pointer-events-none">
                    Copied!
                </div>
            )}

            <div
                onClick={handleCopy}
                className={`${className} cursor-pointer select-text transition-colors duration-200`}
            >
                {text}
            </div>
        </div>
    );
};

export default CopyText;