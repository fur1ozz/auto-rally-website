import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div className="min-h-screen dark:bg-[#1d2125] font-topper">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/home" />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/home" />}
                    />
                    <Route exact path="/home" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
