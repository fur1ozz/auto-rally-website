import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RallyBanner from "./components/commonUI/RallyBanner";
import NewsPage from "./Pages/PagesAboutRally/NewsPage";
import ParticipantPage from "./Pages/PagesAboutRally/ParticipantPage";
import SpectatorsPage from "./Pages/PagesAboutRally/SpectatorsPage";
import ChampionshipPage from "./Pages/PagesAboutRally/ChampionshipPage";
import DocumentPage from "./Pages/PagesAboutRally/DocumentPage";
import GalleryPage from "./Pages/PagesAboutRally/GalleryPage";

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
                    <Route path="/documents" element={<DocumentPage />} />
                    <Route path="/spectators" element={<SpectatorsPage />} />
                    {/*results*/}
                    <Route path="/championship" element={<ChampionshipPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
