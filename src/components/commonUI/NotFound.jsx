import React from 'react';

const NotFound = () => {
    return (
        <div className="w-full min-h-20 bg-white flex-col items-center justify-center px-5 py-10 text-center">
            <h1 className="text-6xl font-bold text-rally-primary mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                Go to homepage
            </a>
        </div>
    );
};

export default NotFound;