import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";

const ResultsTitleLine = () => {
    const [currentPath, setCurrentPath] = useState("");
    const { lng, year, rallyName, stageNumber } = useParams();
    const { t } = useTranslation();
    useLanguage(lng);

    useEffect(() => {
        const path = window.location.pathname;
        const lastPart = path.substring(path.lastIndexOf("/") + 1);
        setCurrentPath(lastPart);
    }, []);

    const checkActive = (link) => {
        const lastPartOfLink = link.substring(link.lastIndexOf("/") + 1);
        return currentPath === lastPartOfLink ? "text-4xl text-rally-primary border-b-2 border-rally-primary" : "text-xl";
    };

    const checkSplitActive = () => {
        const pathParts = window.location.pathname.split("/").filter(Boolean);

        if (pathParts.includes("results-splits")) {
            return "text-4xl text-rally-primary border-b-2 border-rally-primary";
        }

        return "text-xl";
    };

    const checkResultsActive = () => {
        const pathParts = window.location.pathname.split("/").filter(Boolean);

        const isResultsPage = pathParts[pathParts.length - 1] === "results";
        const isResultsStagePage = pathParts.includes("results-stage");

        if (isResultsPage || isResultsStagePage) {
            return "text-4xl text-rally-primary border-b-2 border-rally-primary";
        }

        return "text-xl";
    };

    return (
        <div className="flex items-center mb-10 min-[900px]:border-b-[1px] border-gray-200 justify-evenly max-[900px]:flex-col max-[900px]:items-start">
            <Link
                to={`/${lng}/${year}/${rallyName}/results`}
                className={`font-containerHeading font-bold text-[#4e4e4e] min-[900px]:mx-4 max-[900px]:my-2 capitalize px-2 ${checkResultsActive()}`}
            >
                {t('results.results')}
            </Link>
            <Link
                to={`/${lng}/${year}/${rallyName}/results-splits/1`}
                className={`font-containerHeading font-bold text-[#4e4e4e] min-[900px]:mx-4 max-[900px]:my-1 capitalize px-2 ${checkSplitActive()}`}
            >
                {t('results.split-times')}
            </Link>
            <Link
                to={`/${lng}/${year}/${rallyName}/results/penalties`}
                className={`font-containerHeading font-bold text-[#4e4e4e] min-[900px]:mx-4 max-[900px]:my-1 capitalize px-2 ${checkActive(
                    "/penalties"
                )}`}
            >
                {t('results.penalties')}
            </Link>
            <Link
                to={`/${lng}/${year}/${rallyName}/results/retirements`}
                className={`font-containerHeading font-bold text-[#4e4e4e] min-[900px]:mx-4 max-[900px]:my-1 capitalize px-2 ${checkActive(
                    "/retirements"
                )}`}
            >
                {t('results.retirements')}
            </Link>
            <Link
                to={`/${lng}/${year}/${rallyName}/results/stage-winners`}
                className={`font-containerHeading font-bold text-[#4e4e4e] min-[900px]:mx-4 max-[900px]:my-1 capitalize px-2 ${checkActive(
                    "/stage-winners"
                )}`}
            >
                {t('results.stage-winners')}
            </Link>
        </div>
    );
};

export default ResultsTitleLine;