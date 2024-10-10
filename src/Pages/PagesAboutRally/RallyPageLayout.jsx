import React from 'react';
import Header from "../../components/UIFoundation/Header";
import RallyBanner from "../../components/commonUI/RallyBanner";
import RallyMenuBar from "../../components/commonUI/RallyMenuBar";
import Footer from "../../components/UIFoundation/Footer";
import rallyData from "../../data/2024rallySeason.json";
import {useParams} from "react-router-dom";

const RallyPageLayout = ({ children }) => {
    const { year, rallyName } = useParams();

    const selectedRally = rallyData.find(
        rally => rally.rally_tag === rallyName && rally.year === parseInt(year)
    );

    const backgroundImage = selectedRally
        ? `url(/images/parallax-backgrounds/${selectedRally.road_surface}-${selectedRally.rally_sequence}.jpg)`
        : 'url(/images/parallax-backgrounds/rally-road-1.jpg)';

    return (
        <>
            <div
                className="bg-fixed bg-cover bg-bottom"
                style={{ backgroundImage }}
            >
                <Header />
                <RallyBanner rallyData={rallyData} />
                <RallyMenuBar />
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default RallyPageLayout;