import React, { useState } from 'react';
import ResultsTitleLine from "../../../utils/ResultsTitleLine";
import TitleWithLine from "../../../utils/titleWithLine";
import { useParams } from "react-router-dom";
import StageSortBar from "../../../utils/sortingBars/StageSortBar";
import Flag from "react-flagkit";
import { formatTimeForDifference } from "../../../utils/formatTime";
import { calculateTimeDifferences } from "../../../utils/calculateTimeDiferences";
import resultsData from "../../../data/stage1Results.json";
import { TableStageHeading } from "../../../utils/tableItems/TableStageHeading";

const StageOverallTimeItem = ({ place, number, nationality, coNationality, driver, coDriver, car, driveType, time, timeDifference, isOdd, isHighlighted, onMouseEnter, onMouseLeave }) => {
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
                <div className="text-sm text-[#af2c2c] font-normal">
                    {place === 1 ? '-' : formatTimeForDifference(timeDifference.differenceFromFirst)}
                </div>
            </div>
        </div>
    );
};

const StageResults = () => {
    const { year, rallyName, stageNumber } = useParams();

    const [hoveredCrew, setHoveredCrew] = useState(null);

    const sortedResultsData = [...resultsData].sort((a, b) => {
        const timeA = a.overall_until_with_penalty.split(':').map(Number);
        const timeB = b.overall_until_with_penalty.split(':').map(Number);

        const totalSecondsA = timeA[0] * 60 + timeA[1] + (timeA[2] ? timeA[2] / 100 : 0);
        const totalSecondsB = timeB[0] * 60 + timeB[1] + (timeB[2] ? timeB[2] / 100 : 0);

        return totalSecondsA - totalSecondsB;
    });

    const timeDifferencesOverall = calculateTimeDifferences(sortedResultsData, 'overall_until_with_penalty');
    const timeDifferencesStage = calculateTimeDifferences(resultsData, 'stage_time');

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title={`Ātrumposms - ${stageNumber}`} />
                <StageSortBar numberOfStage={8} resultLinkName="results-stage" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <div className="min-w-[1024px] flex justify-between">
                        <div className="min-w-[500px] flex flex-col sm:items-center font-chakra">
                            <div className="mb-4">Ātrumposma Rezultati</div>
                            <TableStageHeading />
                            {resultsData.map((result, index) => (
                                <StageOverallTimeItem
                                    key={index}
                                    place={index + 1}
                                    number={result.crew_number}
                                    nationality={result.nationality}
                                    coNationality={result.co_driver_nationality}
                                    driver={result.driver}
                                    coDriver={result.co_driver}
                                    car={result.vehicle}
                                    driveType={result.drive_type}
                                    time={result.stage_time}
                                    timeDifference={timeDifferencesStage[index]}
                                    isOdd={index % 2 !== 0}
                                    isHighlighted={hoveredCrew === result.crew_number}
                                    onMouseEnter={() => setHoveredCrew(result.crew_number)}
                                    onMouseLeave={() => setHoveredCrew(null)}
                                />
                            ))}
                        </div>
                        <div className="min-w-[500px] flex flex-col sm:items-center font-chakra">
                            <div className="mb-4">Kopvērtējums</div>
                            <TableStageHeading />
                            {sortedResultsData.map((result, index) => (
                                <StageOverallTimeItem
                                    key={index}
                                    place={index + 1}
                                    number={result.crew_number}
                                    nationality={result.nationality}
                                    coNationality={result.co_driver_nationality}
                                    driver={result.driver}
                                    coDriver={result.co_driver}
                                    car={result.vehicle}
                                    driveType={result.drive_type}
                                    time={result.overall_until_with_penalty}
                                    timeDifference={timeDifferencesOverall[index]}
                                    isOdd={index % 2 !== 0}
                                    isHighlighted={hoveredCrew === result.crew_number}
                                    onMouseEnter={() => setHoveredCrew(result.crew_number)}
                                    onMouseLeave={() => setHoveredCrew(null)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StageResults;
