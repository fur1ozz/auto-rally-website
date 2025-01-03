import React, {useEffect, useState} from 'react';
import ResultsTitleLine from "../../elements/ResultsTitleLine";
import TitleWithLine from "../../elements/titleWithLine";
import Table from "../../elements/tableItems/Table";
import TableHeading from "../../elements/tableItems/TableHeading";
import {TableCrew, TableCrewHeading} from "../../elements/tableItems/TableCrew";
import StageSortBar from "../../elements/sortingBars/StageSortBar";
import {
    TableSplitBox,
    TableSplitName, TableSplitStageTime,
    TableSplitStartTime,
    TableSplitTime
} from "../../elements/tableItems/TableSplitBox";
import {TableNumber} from "../../elements/tableItems/TableNumber";
import TableFlag from "../../elements/tableItems/TableFlag";
import data from "../../../data/splitData.json";
import {useNavigate, useParams} from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import Loader from "../../elements/loaders/Loader";

const SplitItem = ({ place, number, nationality, coNationality, driver, coDriver, car, team, startTime, splits, stageTime, stageDif, isOdd }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words ${isOdd ? 'bg-[#f9f9f9]' : ''}`}
        >
            <div className="w-[5%] flex justify-center font-chakra font-semibold text-xl">{place}</div>
            <TableNumber number={number} />
            <TableFlag nationality={nationality} coNationality={coNationality} />
            <TableCrew driver={driver} coDriver={coDriver} />
            <div className="flex flex-col w-[23%]">
                <div>{team}</div>
                <div>{car}</div>
            </div>
            <TableSplitStartTime startTime={startTime} />
            {splits.map((split, index) => (
                <TableSplitTime key={index} split={split} />
            ))}
            <TableSplitStageTime stageTime={stageTime} stageDif={stageDif} />
        </div>
    );
};
const SplitTimes = () => {
    const { year, rallyName, stageNumber } = useParams();
    const url = `http://localhost/api/stage-splits/${year}/${rallyName}/${stageNumber}`;
    const navigate = useNavigate();

    const { data: splitsData, loading, error } = useFetchData(url);

    useEffect(() => {
        if (error) {
            navigate('/');
        }
    }, [error, navigate]);

    const splitInfo = splitsData?.splits || [];
    const splitDistances = splitInfo.map(split => split.split_distance);

    const crewSplits = splitsData?.crew_times || [];


    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 sm:pb-10 pb-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Starplaiki" />
                {/*TODO change the stage logic, maybe new sort bar with diferent link name*/}
                <StageSortBar numberOfStage="8" resultLinkName="results-splits" />
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
                            <TableSplitName type="Start" />
                            {[...splitInfo.slice(0, 5), ...new Array(5 - splitInfo.length).fill(null)].map((split, index) => (
                                <TableSplitBox key={index} distance={split ? split.split_distance : ''} />
                            ))}
                            <TableSplitName type="Stage" />
                        </TableHeading>
                        {loading && <Loader />}
                        {!loading && error && <div>Error loading data: {error.message}</div>}

                        {!loading && !error && (
                            crewSplits.length > 0 ? (
                                crewSplits.map((crewResult, index) => (
                                    <SplitItem
                                        key={index}
                                        place={index+1}
                                        number={crewResult.crew_number}
                                        nationality={crewResult.driver.nationality}
                                        coNationality={crewResult.co_driver.nationality}
                                        driver={`${crewResult.driver.name} ${crewResult.driver.surname}`}
                                        coDriver={`${crewResult.co_driver.name} ${crewResult.co_driver.surname}`}
                                        car={crewResult.car}
                                        team={crewResult.team.name}
                                        {/*TODO crate start time table and include it in split time controller*/}
                                        // startTime={crewResult.startTime}
                                        startTime="16:10"
                                        splits={crewResult.splits}
                                        stageTime={crewResult.stage_time}
                                        stageDif={crewResult.stage_time_dif}
                                        isOdd={index % 2 === 1}
                                    />
                                ))
                            ) : (
                                <div className="mt-10 text-[#4e4e4e] text-center">
                                    Pašlaik nav starplaiku rezultāti.
                                </div>
                            )
                        )}
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default SplitTimes;