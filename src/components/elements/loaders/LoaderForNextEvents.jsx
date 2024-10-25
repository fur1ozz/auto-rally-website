import React from 'react';
import '../../../App.css';

const LoaderForNextEvents = () => {
    return (
        <div className="h-96 flex justify-center items-center">
            <div className="w-full flex justify-center my-10">
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default LoaderForNextEvents;