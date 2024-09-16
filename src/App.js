import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RallyBanner from "./components/commonUI/RallyBanner";
import NewsPage from "./Pages/NewsPage";
import ParticipantPage from "./Pages/ParticipantPage";
import SpectatorsPage from "./Pages/SpectatorsPage";
import ChampionshipPage from "./Pages/ChampionshipPage";

function App() {
    return (
        <Router>
            <div className="min-h-screen dark:bg-[#1d2125] font-poppins">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/home" />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/home" />}
                    />
                    <Route exact path="/home" element={<HomePage />} />

                    <Route path="/banner" element={<RallyBanner />} />

                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/participants" element={<ParticipantPage />} />
                    <Route path="/spectators" element={<SpectatorsPage />} />
                    <Route path="/championship" element={<ChampionshipPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
