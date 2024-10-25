import React from 'react';
import TitleWithLine from "../../elements/titleWithLine";
import ResultsTitleLine from "../../elements/ResultsTitleLine";
import {TableNumber} from "../../elements/tableItems/TableNumber";
import TableFlag from "../../elements/tableItems/TableFlag";
import {TableCrew, TableCrewHeading} from "../../elements/tableItems/TableCrew";
import TableHeading from "../../elements/tableItems/TableHeading";
import Table from "../../elements/tableItems/Table";
import {useParams} from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import Loader from "../../elements/loaders/Loader";

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
                    <div key={index} className="mb-1">{penalty.penalty_type}</div>
                ))}
            </div>
            <div className="w-[12%] flex flex-col font-medium text-red-600 items-end pr-2">
                {penalties.map((penalty, index) => (
                    <div key={index} className="mb-1">{penalty.penalty_amount}</div>
                ))}
            </div>

        </div>
    );
};

const PenaltyContainer = () => {
    const { year, rallyName } = useParams();
    const url = `http://localhost/api/rally-penalties/${year}/${rallyName}`;

    const { data: penaltyData, loading, error } = useFetchData(url);

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
                        {loading && <Loader />}
                        {!loading && error && <div>Error loading data: {error.message}</div>}

                        {!loading && !error && (
                            penaltyData.length > 0 ? (
                                penaltyData.map((penalty, index) => (
                                    <PenaltyItem
                                        key={index}
                                        number={penalty.crew_number}
                                        nationality={penalty.driver.nationality}
                                        coNationality={penalty.co_driver.nationality}
                                        driver={`${penalty.driver.name} ${penalty.driver.surname}`}
                                        coDriver={`${penalty.co_driver.name} ${penalty.co_driver.surname}`}
                                        team={penalty.team.team_name}
                                        car={penalty.car}
                                        driveType={penalty.drive_type}
                                        penalties={penalty.penalties}
                                        isOdd={index % 2 !== 0}
                                    />
                                ))
                            ) : (
                                <div className="mt-10 text-[#4e4e4e] text-center">
                                    Pašlaik nav zināmu sodu.
                                </div>
                            )
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