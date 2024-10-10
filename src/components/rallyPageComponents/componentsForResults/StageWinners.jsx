import React from 'react';
import ResultsTitleLine from "../../../utils/ResultsTitleLine";
import TitleWithLine from "../../../utils/titleWithLine";
import {TableNumber} from "../../../utils/tableItems/TableNumber";
import TableFlag from "../../../utils/tableItems/TableFlag";
import {TableCrew, TableCrewHeading} from "../../../utils/tableItems/TableCrew";
import Table from "../../../utils/tableItems/Table";
import TableHeading from "../../../utils/tableItems/TableHeading";

const WinnerItem = ({ stageNumber, stageName, stageDistance, crewNumber, nationality, coNationality, driver, coDriver, car, team, driveType, stageTime, averageSpeed, isOdd }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words ${isOdd ? 'bg-[#f9f9f9]' : ''}`}
        >
            <div className="flex flex-col w-[20%] pl-2">
                <div className="text-sm">{stageNumber}</div>
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
const StageWinners = ({data}) => {
    const firstPlaceWinners = Object.values(data.overall_results).map(stage => stage.top_3[0]);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 sm:pb-0 pb-0 flex justify-center">
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
                        {firstPlaceWinners.map((winner, index) => (
                            <WinnerItem
                                key={index}
                                stageNumber={Object.values(data.overall_results)[index].stage}
                                stageName={Object.values(data.overall_results)[index].stage_name}
                                stageDistance={Object.values(data.overall_results)[index].stage_distance}
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
                        ))}
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default StageWinners;