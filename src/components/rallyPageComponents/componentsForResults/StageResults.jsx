import React, {useEffect, useState} from 'react';
import ResultsTitleLine from "../../elements/ResultsTitleLine";
import TitleWithLine from "../../elements/titleWithLine";
import {useNavigate, useParams} from "react-router-dom";
import StageSortBar from "../../elements/sortingBars/StageSortBar";
import Flag from "react-flagkit";
import { formatTimeForDifference } from "../../../utils/formatTime";
import { calculateTimeDifferences } from "../../../utils/calculateTimeDiferences";
import { TableStageHeading } from "../../elements/tableItems/TableStageHeading";
import useFetchData from "../../../hooks/useFetchData";
import Loader from "../../elements/Loader";

const StageOverallTimeItem = ({ place, number, nationality, coNationality, driver, coDriver, car, driveType, time, timeDifference, isOdd, isHighlighted, onMouseEnter, onMouseLeave, penalty_time }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words cursor-pointer
                ${isHighlighted ? 'bg-[#e2e2e2]' : (isOdd ? 'bg-[#f9f9f9]' : '')}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="w-[10%] flex justify-center font-chakra font-semibold text-xl">{place}</div>
            <div className="w-[10%] flex justify-center font-chakra font-semibold text-lg text-rally-primary">
                {number}
            </div>
            <div className="flex flex-col w-[60%] font-medium">
                <div className="flex">
                    <div className="flex flex-col justify-center pr-1">
                        <Flag country={nationality.toUpperCase()} className="mr-1 h-4 rounded-[3px]" />
                    </div>
                    <div className="text-nowrap overflow-hidden truncate">
                        {driver}
                    </div>

                    <div className="ml-2 flex flex-col justify-center ">
                        <Flag country={coNationality.toUpperCase()} className="mr-1 h-4 rounded-[3px]" />
                    </div>
                    <div className=" text-nowrap overflow-hidden truncate">
                        {coDriver}
                    </div>
                </div>
                <div className="font-light pl-7">
                    <div>{car} ({driveType})</div>
                </div>
            </div>
            <div className="w-[20%] flex flex-col items-end pr-2">
                <div className="font-medium ">
                    {time}
                </div>
                <div className="flex items-center">
                    <div className="text-xs text-white font-normal bg-rose-600 rounded h-fit px-1 mr-1">
                        {penalty_time || ""}
                    </div>
                    <div className="text-sm text-[#af2c2c] font-normal">
                        {place === 1 ? '-' : formatTimeForDifference(timeDifference?.differenceFromFirst || 0)}
                    </div>
                </div>
            </div>
        </div>
    );
};

const StageResults = () => {
    const { year, rallyName, stageNumber } = useParams();
    const url = `http://localhost/api/stage-results/${year}/${rallyName}/${stageNumber}`;
    const navigate = useNavigate();

    const { data: resultsData, loading, error } = useFetchData(url);

    const [hoveredCrew, setHoveredCrew] = useState(null);

    useEffect(() => {
        if (error) {
            navigate('/');
        }
    }, [error, navigate]);


    const results = resultsData?.results || [];

    const sortedResultsData = [...results].sort((a, b) => {
        const timeA = a?.overall_time_with_penalties_until_stage?.split(':').map(Number) || [];
        const timeB = b?.overall_time_with_penalties_until_stage?.split(':').map(Number) || [];

        const totalSecondsA = (timeA[0] || 0) * 3600 + (timeA[1] || 0) * 60 + (timeA[2] || 0);
        const totalSecondsB = (timeB[0] || 0) * 3600 + (timeB[1] || 0) * 60 + (timeB[2] || 0);

        return totalSecondsA - totalSecondsB;
    });

    const timeDifferencesOverall = calculateTimeDifferences(sortedResultsData, 'overall_time_with_penalties_until_stage');
    const timeDifferencesStage = calculateTimeDifferences(results, 'time_taken');

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title={`Stage - ${resultsData?.stage_number || stageNumber}`} />
                <StageSortBar numberOfStage={resultsData.stage_count} resultLinkName="results-stage" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <div className="min-w-[1024px] flex justify-between">
                        {/* Stage Results */}
                        <div className="min-w-[500px] flex flex-col sm:items-center font-chakra">
                            <div className="mb-4 text-xl font-bold text-rally-primary">Ātrumposma Rezultāti</div>
                            <TableStageHeading />
                            {loading && <Loader />}
                            {!loading && error && <div>Error loading data: {error.message}</div>}

                            {!loading && !error && (
                                results.length > 0 ? (
                                    results.map((result, index) => (
                                        <StageOverallTimeItem
                                            key={index}
                                            place={index + 1}
                                            number={result.crew_number}
                                            nationality={result.driver.nationality}
                                            coNationality={result.co_driver.nationality}
                                            driver={`${result.driver.name} ${result.driver.surname}`}
                                            coDriver={`${result.co_driver.name} ${result.co_driver.surname}`}
                                            car={result.car}
                                            driveType={result.drive_type}
                                            time={result.time_taken}
                                            timeDifference={timeDifferencesStage[index]}
                                            isOdd={index % 2 !== 0}
                                            isHighlighted={hoveredCrew === result.crew_number}
                                            onMouseEnter={() => setHoveredCrew(result.crew_number)}
                                            onMouseLeave={() => setHoveredCrew(null)}
                                            penalty_time={
                                                (result.penalties || []).length > 0
                                                    ? result.penalties.map(penalty => penalty.penalty_time.split('.')[0]).join(', ')
                                                    : null
                                            }
                                        />
                                    ))
                                ) : (
                                    <div className="mt-10 text-[#4e4e4e] text-center">
                                        Pašlaik nav pieejamu rezultātu.
                                    </div>
                                )
                            )}
                        </div>
                        {/* Overall Results */}
                        <div className="min-w-[500px] flex flex-col sm:items-center font-chakra">
                            <div className="mb-4 text-xl font-bold text-rally-primary">Kopvērtējums</div>
                            <TableStageHeading />
                            {loading && <Loader />}
                            {!loading && error && <div>Error loading data: {error.message}</div>}

                            {!loading && !error && (
                                sortedResultsData.length > 0 ? (
                                    sortedResultsData.map((result, index) => (
                                        <StageOverallTimeItem
                                            key={index}
                                            place={index + 1}
                                            number={result.crew_number}
                                            nationality={result.driver.nationality}
                                            coNationality={result.co_driver.nationality}
                                            driver={`${result.driver.name} ${result.driver.surname}`}
                                            coDriver={`${result.co_driver.name} ${result.co_driver.surname}`}
                                            car={result.car}
                                            driveType={result.drive_type}
                                            time={result.overall_time_with_penalties_until_stage}
                                            timeDifference={timeDifferencesOverall[index]}
                                            isOdd={index % 2 !== 0}
                                            isHighlighted={hoveredCrew === result.crew_number}
                                            onMouseEnter={() => setHoveredCrew(result.crew_number)}
                                            onMouseLeave={() => setHoveredCrew(null)}
                                            penalty_time={null}
                                        />
                                    ))
                                ) : (
                                    <div className="mt-10 text-[#4e4e4e] text-center">
                                        Pašlaik nav pieejamu rezultātu.
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StageResults;
