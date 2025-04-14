import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import {normalizeUrl} from "../../../utils/urlUtils";

const StageSortBar = ({ resultLinkName, numberOfStage, showFinish = false}) => {
    const { lng, year, rallyName } = useParams();
    const location = useLocation();

    const baseUrl = `/${lng}/${year}/${rallyName}/${resultLinkName}/`;
    const resultsUrl = `/${lng}/${year}/${rallyName}/results`;

    const isActive = (path) => normalizeUrl(location.pathname) === path;
    return (
        <div className="flex flex-col flex-wrap my-5">
            <div className="flex flex-col mr-10">
                <div className="flex flex-wrap text-sm">
                    {showFinish && (
                        <Link
                            to={resultsUrl}
                            className={`mr-2 mb-2 px-2 flex items-center py-1 rounded font-light ${
                                isActive(resultsUrl)
                                    ? 'bg-rally-primary text-white'
                                    : 'bg-gray-200'
                            }`}
                        >
                            <img
                                src="/icons/finish-svgrepo-com.svg"
                                alt="Finish"
                                className="w-5 h-5"
                            />
                        </Link>
                    )}
                    {Array.from({ length: numberOfStage }, (_, index) => {
                        const stageLink = `${baseUrl}${index + 1}`;
                        return (
                            <Link
                                key={index + 1}
                                to={stageLink}
                                className={`mr-2 mb-2 px-4 flex items-center py-1 rounded font-light ${
                                    isActive(stageLink)
                                        ? 'bg-rally-primary text-white'
                                        : 'bg-gray-200'
                                }`}
                            >
                                {index + 1}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StageSortBar;
