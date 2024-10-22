import React from 'react';
import ResultsTitleLine from "../../elements/ResultsTitleLine";
import TitleWithLine from "../../elements/titleWithLine";
import {TableNumber} from "../../elements/tableItems/TableNumber";
import TableFlag from "../../elements/tableItems/TableFlag";
import {TableCrew, TableCrewHeading} from "../../elements/tableItems/TableCrew";
import Table from "../../elements/tableItems/Table";
import TableHeading from "../../elements/tableItems/TableHeading";
import StageWinCountContainer from "./StageWinCountContainer";
import {useParams} from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import Loader from "../../elements/Loader";

const WinnerItem = ({ stageNumber, stageName, stageDistance, crewNumber, nationality, coNationality, driver, coDriver, car, team, driveType, stageTime, averageSpeed, isOdd }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words ${isOdd ? 'bg-[#f9f9f9]' : ''}`}
        >
            <div className="flex flex-col w-[20%] pl-2">
                <div className="text-sm">SS{stageNumber}</div>
                <div className="font-medium">{stageName}</div>
            </div>
            <div className="flex flex-col w-[8%] items-end">
                <div>{stageDistance} km</div>
            </div>
            <TableNumber number={crewNumber} />
            <TableFlag nationality={nationality} coNationality={coNationality} />
            <TableCrew driver={driver} coDriver={coDriver} />
            <div className="flex flex-col w-[26%]">
                <div>{team}</div>
                <div>{car} ({driveType})</div>
            </div>
            <div className="flex flex-col w-[10%] font-medium text-black">{stageTime}</div>
            <div className="flex flex-col w-[8%] items-end font-normal pr-2">
                <div>{averageSpeed}</div>
            </div>
        </div>
    );
};
const StageWinners = () => {
    const { year, rallyName } = useParams();
    const url = `http://localhost/api/rally-winner-results/${year}/${rallyName}`;

    const { data: winnerData, loading, error } = useFetchData(url);

    const stageWinners = winnerData?.winner_results?.stages || [];
    const top3Result = winnerData?.winner_results?.top_3_result || [];

    return (
        <>
            <section className="w-full min-h-20 bg-white sm:p-14 p-10 sm:pb-10 pb-10 flex justify-center">
                <div className="lg:w-[1024px] overflow-x-auto">
                    <ResultsTitleLine />
                    <TitleWithLine title="Posmu Uzvarētāji" />
                    <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                        <Table>
                            <TableHeading>
                                <div className="flex flex-col w-[20%] pl-2">
                                    <div className="text-sm font-medium">Ātrumposms</div>
                                    <div>Nosaukums</div>
                                </div>
                                <div className="flex flex-col w-[8%] items-end">
                                    <div>Garums</div>
                                </div>
                                <div className="w-[5%] flex justify-center">Nr.</div>
                                <div className="w-[4%]"></div>
                                <TableCrewHeading />
                                <div className="flex flex-col w-[26%]">
                                    <div>Pieteicējs</div>
                                    <div>Automašīna</div>
                                </div>
                                <div className="flex flex-col w-[10%]">Laiks</div>
                                <div className="flex flex-col w-[8%] items-end pr-2">
                                    <div>Ātrums</div>
                                    <div>km/h</div>
                                </div>
                            </TableHeading>
                            {loading && <Loader />}
                            {!loading && error && <div>Error loading data: {error.message}</div>}

                            {!loading && !error && (
                                stageWinners.length > 0 ? (
                                    stageWinners.map((stage, index) => {
                                        const winner = stage.stage_winner;
                                        return (
                                            <WinnerItem
                                                key={index}
                                                stageNumber={stage.stage_number}
                                                stageName={stage.stage_name}
                                                stageDistance={stage.stage_distance}
                                                crewNumber={winner.crew_number}
                                                nationality={winner.driver_nationality}
                                                coNationality={winner.co_driver_nationality}
                                                driver={winner.driver}
                                                coDriver={winner.co_driver}
                                                car={winner.vehicle}
                                                team={winner.team}
                                                driveType={winner.drive_type}
                                                stageTime={winner.completion_time}
                                                averageSpeed={winner.average_speed_kmh}
                                                isOdd={index % 2 !== 0}
                                            />
                                        );
                                    })
                                ) : (
                                    <div className="mt-10 text-[#4e4e4e] text-center">
                                        Pašlaik posmu uzvarētāju datu nav pieejamu.
                                    </div>
                                )
                            )}
                        </Table>
                    </div>
                </div>
            </section>
            {!loading && !error && (
                stageWinners.length > 0 && (
                    <StageWinCountContainer data={top3Result} />
                )
            )}
        </>
    );
};

export default StageWinners;