import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { normalizeUrl } from "../../../utils/urlUtils";

const StageSortBar = ({ resultLinkName, availableStages = [], showFinish = false }) => {
    const { lng, year, rallyName, classId } = useParams();
    const location = useLocation();

    const baseUrl = `/${lng}/${year}/${rallyName}/${resultLinkName}/`;
    const resultsUrl = `/${lng}/${year}/${rallyName}/results`;

    const isActive = (path, stageNumber) => {
        const currentParts = normalizeUrl(location.pathname).split('/');
        const targetParts = normalizeUrl(path).split('/');

        if (normalizeUrl(path) === resultsUrl) {
            const regex = new RegExp(`^${resultsUrl}(\\/\\d+)?$`);
            return regex.test(normalizeUrl(location.pathname));
        }

        // If classId exists, check second-to-last part (stage number)
        if (classId) {
            const stageInUrl = currentParts[currentParts.length - 2];
            return stageInUrl === String(stageNumber);
        }

        // Else fallback to direct match
        return normalizeUrl(location.pathname) === normalizeUrl(path);
    };

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
                    {availableStages.map((stageNum) => {
                        const stageLink = `${baseUrl}${stageNum}`;

                        return (
                            <Link
                                key={stageNum}
                                to={stageLink}
                                className={`mr-2 mb-2 px-4 flex items-center py-1 rounded font-light ${
                                    isActive(stageLink, stageNum)
                                        ? 'bg-rally-primary text-white'
                                        : 'bg-gray-200'
                                }`}
                            >
                                {stageNum}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StageSortBar;
