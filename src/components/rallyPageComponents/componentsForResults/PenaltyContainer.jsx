import React from 'react';
import TitleWithLine from "../../../utils/titleWithLine";
import penaltyData from '../../../data/penaltyData.json';
import ResultsTitleLine from "../../../utils/ResultsTitleLine";
import {TableNumber} from "../../../utils/tableItems/TableNumber";
import TableFlag from "../../../utils/tableItems/TableFlag";
import {TableCrew, TableCrewHeading} from "../../../utils/tableItems/TableCrew";
import TableHeading from "../../../utils/tableItems/TableHeading";
import Table from "../../../utils/tableItems/Table";

const PenaltyItem = ({ number, nationality, coNationality, driver, coDriver, team, car, driveType, penalties, isOdd }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words ${isOdd ? 'bg-[#f9f9f9]' : ''}`}
        >
            <TableNumber number={number} />
            <TableFlag nationality={nationality} coNationality={coNationality} />
            <TableCrew driver={driver} coDriver={coDriver} />
            <div className="flex flex-col w-[30%]">
                <div>{team}</div>
                <div>{car} ({driveType})</div>
            </div>
            <div className="flex flex-col w-[30%] font-medium text-rally-accent">
                {penalties.map((penalty, index) => (
                    <div key={index} className="mb-1">{penalty.reason}</div>
                ))}
            </div>
            <div className="w-[12%] flex flex-col font-medium text-red-600 items-end pr-2">
                {penalties.map((penalty, index) => (
                    <div key={index} className="mb-1">{penalty.penaltyTime}</div>
                ))}
            </div>
        </div>
    );
};

const PenaltyContainer = () => {
    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Sodi" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <Table>
                        <TableHeading>
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[4%]"></div>
                            <TableCrewHeading />
                            <div className="w-[30%] flex flex-col">
                                <div>Pieteicējs</div>
                                <div>Automašīna</div>
                            </div>
                            <div className="flex flex-col w-[30%]">Iemesls</div>
                            <div className="w-[12%] flex justify-end pr-2">Soda laiks</div>
                        </TableHeading>
                        {penaltyData.length > 0 ? (
                            penaltyData.map((penalty, index) => (
                                <PenaltyItem
                                    key={index}
                                    number={penalty.crewNumber}
                                    nationality={penalty.nationality}
                                    coNationality={penalty.coNationality}
                                    driver={penalty.driver}
                                    coDriver={penalty.coDriver}
                                    team={penalty.team}
                                    car={penalty.vehicle}
                                    driveType={penalty.drive_type}
                                    penalties={penalty.penalties}
                                    isOdd={index % 2 !== 0}
                                />
                            ))
                        ) : (
                            <div className="mt-10 text-[#4e4e4e] text-center">
                                Pašlaik nav zināmu sodu.
                            </div>
                        )}

                        <div className="mt-6 text-[#4e4e4e] font-medium">
                            Kopējais sodāmo dalībnieku skaits: <span className="font-semibold text-red-600">{penaltyData.length}</span>
                        </div>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default PenaltyContainer;