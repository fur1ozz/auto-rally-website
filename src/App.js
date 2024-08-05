import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import RallyBanner from "./components/RallyBanner";
import NewsPage from "./components/NewsPage";

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

                    <Route path="/banner" element={<RallyBanner />} />
                    <Route path="/news" element={<NewsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
