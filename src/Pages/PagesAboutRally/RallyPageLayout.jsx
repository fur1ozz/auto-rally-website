import React, {useEffect} from 'react';
import Header from "../../components/UIFoundation/Header";
import RallyBanner from "../../components/commonUI/RallyBanner";
import RallyMenuBar from "../../components/commonUI/RallyMenuBar";
import Footer from "../../components/UIFoundation/Footer";
import rallyDatass from "../../data/AllrallySeasons.json";
import {useNavigate, useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

const RallyPageLayout = ({ children }) => {
    const { year, rallyName } = useParams();
    const navigate = useNavigate();

    const url = `/rally/${year}/${rallyName}`;

    const { data: rallyData, loading, error, status } = useFetchData(url);

    useEffect(() => {
        if (status === 404) {
            navigate('/');
        }
    }, [status, navigate]);

    const selectedRally = rallyDatass.find(
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