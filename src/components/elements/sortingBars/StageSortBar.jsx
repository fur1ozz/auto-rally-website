import React from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';

const StageSortBar = ({ resultLinkName, numberOfStage}) => {
    const navigate = useNavigate();
    const { lng, year, rallyName } = useParams();

    const baseUrl = `/${lng}/${year}/${rallyName}/${resultLinkName}/`;

    const handleStageChange = (stage) => {
        const newUrl = `${baseUrl}${stage}`;
        navigate(newUrl);
    };
    const location = useLocation();
    console.log({location });

    return (
        <div className="flex flex-col flex-wrap my-5">
            <div className="flex flex-col mr-10">
                <div className="flex flex-wrap text-sm">
                    {Array.from({ length: numberOfStage }, (_, index) => (
                        <Link
                            key={index + 1}
                            to={`${baseUrl}${index + 1}`}
                            state={{ id:"sort-that" }}
                            className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200"
                        >
                            {index + 1}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StageSortBar;
