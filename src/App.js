import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewsPage from "./Pages/PagesAboutRally/NewsPage";
import ParticipantPage from "./Pages/PagesAboutRally/ParticipantPage";
import SpectatorsPage from "./Pages/PagesAboutRally/SpectatorsPage";
import ChampionshipPage from "./Pages/PagesAboutRally/ChampionshipPage";
import DocumentPage from "./Pages/PagesAboutRally/DocumentPage";
import GalleryPage from "./Pages/PagesAboutRally/GalleryPage";
import ResultsPage from "./Pages/PagesAboutRally/PagesForRallyResults/ResultsPage";
import PenaltyPage from "./Pages/PagesAboutRally/PagesForRallyResults/PenaltyPage";
import RetirementPage from "./Pages/PagesAboutRally/PagesForRallyResults/RetirementPage";
import StageResultPage from "./Pages/PagesAboutRally/PagesForRallyResults/StageResultPage";
import StageWinnersPage from "./Pages/PagesAboutRally/PagesForRallyResults/StageWinnersPage";
import LangParamValidator from "./utils/langParamValidator";
import SplitTimePage from "./Pages/PagesAboutRally/PagesForRallyResults/SplitTimePage";
import AllSeasonsPage from "./Pages/AllSeasonsPage";
import SeasonPage from "./Pages/SeasonPage";
import NewsArticlePage from "./Pages/PagesAboutRally/NewsArticlePage";

function App() {
    return (
        <Router>
            <div className="min-h-screen dark:bg-[#1d2125] font-poppins">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/lv/home" />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/lv/home" />}
                    />
                    <Route path="/:lng" element={<LangParamValidator />}>
                        <Route path="home" element={<HomePage />} />

                        <Route path="seasons" element={<AllSeasonsPage />} />
                        <Route path=":year" element={<SeasonPage />} />

                        <Route path=":year/:rallyName/news" element={<NewsPage />} />
                        <Route path=":year/:rallyName/news/:articleId" element={<NewsArticlePage />} />
                        <Route path=":year/:rallyName/participants" element={<ParticipantPage />} />
                        <Route path=":year/:rallyName/documents" element={<DocumentPage />} />
                        <Route path=":year/:rallyName/spectators" element={<SpectatorsPage />} />

                        <Route path=":year/:rallyName/results" element={<ResultsPage />} />
                        <Route path=":year/:rallyName/results/:classId" element={<ResultsPage />} />
                        <Route path=":year/:rallyName/results-stage/:stageNumber" element={<StageResultPage />} />
                        <Route path=":year/:rallyName/results-stage/:stageNumber/:classId" element={<StageResultPage />} />
                        <Route path=":year/:rallyName/results-splits/:stageNumber" element={<SplitTimePage />} />
                        <Route path=":year/:rallyName/results-splits/:stageNumber/:classId" element={<SplitTimePage />} />
                        <Route path=":year/:rallyName/results/retirements" element={<RetirementPage />} />
                        <Route path=":year/:rallyName/results/penalties" element={<PenaltyPage />} />
                        <Route path=":year/:rallyName/results/stage-winners" element={<StageWinnersPage />} />

                        <Route path=":year/:rallyName/championship" element={<ChampionshipPage />} />
                        <Route path=":year/:rallyName/gallery" element={<GalleryPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
