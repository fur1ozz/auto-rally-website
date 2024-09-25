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
import ResultsPage from "./Pages/PagesAboutRally/PagesForRallyResults/ResultsPage";
import PenaltyPage from "./Pages/PagesAboutRally/PagesForRallyResults/PenaltyPage";
import RetirementPage from "./Pages/PagesAboutRally/PagesForRallyResults/RetirementPage";
import StageResults from "./components/rallyPageComponents/componentsForResults/StageResults";
import StageResultPage from "./Pages/PagesAboutRally/PagesForRallyResults/StageResultPage";
import StageWinnersPage from "./Pages/PagesAboutRally/PagesForRallyResults/StageWinnersPage";

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

                    {/*remove this later*/}
                    <Route path="/banner" element={<RallyBanner />} />

                    <Route path="/:year/:rallyName/news" element={<NewsPage />} />
                    <Route path="/:year/:rallyName/participants" element={<ParticipantPage />} />
                    <Route path="/:year/:rallyName/documents" element={<DocumentPage />} />
                    <Route path="/:year/:rallyName/spectators" element={<SpectatorsPage />} />

                    <Route path="/:year/:rallyName/results" element={<ResultsPage />} />
                    <Route path="/:year/:rallyName/results/stage/:stageNumber" element={<StageResultPage />} />
                    {/*<Route path="/results" element={<RetirementPage />} />*/}
                    <Route path="/:year/:rallyName/results/retirements" element={<RetirementPage />} />
                    <Route path="/:year/:rallyName/results/penalties" element={<PenaltyPage />} />
                    <Route path="/:year/:rallyName/results/stage-winners" element={<StageWinnersPage />} />


                    <Route path="/:year/:rallyName/championship" element={<ChampionshipPage />} />
                    <Route path="/:year/:rallyName/gallery" element={<GalleryPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
