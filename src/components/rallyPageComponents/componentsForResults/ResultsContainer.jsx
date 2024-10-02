import React from 'react';
import TitleWithLine from "../../../utils/titleWithLine";
import ResultsTitleLine from "../../../utils/ResultsTitleLine";
import resultsData from '../../../data/resultsData.json';
import {TableNumber} from "../../../utils/tableItems/TableNumber";
import TableFlag from "../../../utils/tableItems/TableFlag";
import {TableCrew, TableCrewHeading} from "../../../utils/tableItems/TableCrew";
import TableHeading from "../../../utils/tableItems/TableHeading";
import Table from "../../../utils/tableItems/Table";
import {useNavigate, useParams} from "react-router-dom";
import StageSortBar from "../../../utils/sortingBars/StageSortBar";
import {formatTimeForDifference} from "../../../utils/formatTime";
import {calculateTimeDifferences} from "../../../utils/calculateTimeDiferences";

const ResultsItem = ({ place, number, nationality, coNationality, driver, coDriver, car, team, driveType, groupClass, penalty, overallTime, timeDifference, }) => {
    return (
        <div className="flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words">
            <div className="w-[5%] flex justify-center font-chakra font-semibold text-xl">{place}</div>
            <TableNumber number={number} />
            <TableFlag nationality={nationality} coNationality={coNationality} />
            <TableCrew driver={driver} coDriver={coDriver} />
            <div className="flex flex-col w-[23%]">
                <div>{team}</div>
                <div>{car}</div>
            </div>
            <div className="flex flex-col w-[10%]">
                <div>{driveType}</div>
                <div>{groupClass}</div>
            </div>
            <div className="w-[12%] font-medium text-red-600">{penalty}</div>
            <div className="w-[12%] font-medium text-black">{overallTime}</div>
            <div className="flex flex-col w-[10%] items-end pr-2 text-[#af2c2c] font-medium">
                <div>
                    {place === 1 ? '-' : formatTimeForDifference(timeDifference.differenceFromFirst)}
                </div>
                <div className="text-sm">{timeDifference.differenceFromPrevious !== null ? formatTimeForDifference(timeDifference.differenceFromPrevious) : '-'}</div>
            </div>
        </div>
    );
};
const ResultsContainer = () => {
    const timeDifferences = calculateTimeDifferences(resultsData, 'overall_time');
    const navigate = useNavigate();
    const { year, rallyName, stageNumber } = useParams();

    const baseUrl = `/${year}/${rallyName}/results/`;

    // cant remember what this does
    const handleStageChange = (stage) => {
        const newUrl = `${baseUrl}${stage}`;
        navigate(newUrl);
    };


    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Rezultāti" />
                <StageSortBar numberOfStage={8} resultLinkName="results" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <Table>
                        <TableHeading>
                            <div className="w-[5%] flex justify-center">V.</div>
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[4%]"></div>
                            <TableCrewHeading />
                            <div className="flex flex-col w-[23%]">
                                <div>Pieteicējs</div>
                                <div>Automašīna</div>
                            </div>
                            <div className="flex flex-col w-[10%]">
                                <div>Grupa</div>
                                <div>Klase</div>
                            </div>
                            <div className="w-[12%]">Soda laiks</div>
                            <div className="w-[12%]">Laiks</div>
                            <div className="flex flex-col w-[10%] items-end pr-2">
                                <div>No 1.</div>
                                <div className="text-sm font-medium">No Iep.</div>
                            </div>
                        </TableHeading>
                        {resultsData.map((result, index) => (
                            <ResultsItem
                                key={index}
                                place={index + 1}
                                number={result.crew_number}
                                nationality={result.nationality}
                                coNationality={result.co_driver_nationality}
                                driver={result.driver}
                                coDriver={result.co_driver}
                                team={result.team}
                                car={result.vehicle}
                                driveType={result.drive_type}
                                groupClass={result.class}
                                penalty={result.penalty_time}
                                overallTime={result.overall_time}
                                timeDifference={timeDifferences[index]}
                            />
                        ))}
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default ResultsContainer;