import React, {useEffect, useState} from 'react';
import Header from "../../components/UIFoundation/Header";
import RallyBanner from "../../components/commonUI/RallyBanner";
import RallyMenuBar from "../../components/commonUI/RallyMenuBar";
import Footer from "../../components/UIFoundation/Footer";
import {useNavigate, useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

const RallyPageLayout = ({ children }) => {
    const { year, rallyName } = useParams();
    const navigate = useNavigate();

    const url = `/rally/${year}/${rallyName}`;

    const { data: rallyData, loading, error, status } = useFetchData(url);

    const [backgroundImage, setBackgroundImage] = useState('url(/images/parallax-backgrounds/rally-road-1.jpg)');

    useEffect(() => {
        if (status === 404) {
            navigate('/');
        }
    }, [status, navigate]);

    useEffect(() => {
        if (!rallyData) return;

        const customImgPath = `/images/parallax-backgrounds/${rallyData.rally_tag}-${rallyData.season_year}.jpg`;
        const img = new Image();
        img.src = customImgPath;

        img.onload = () => setBackgroundImage(`url(${customImgPath})`);
        img.onerror = () => setBackgroundImage('url(/images/parallax-backgrounds/default-bg.jpg)');
    }, [rallyData]);

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