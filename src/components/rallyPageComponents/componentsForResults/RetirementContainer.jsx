import React, {useEffect, useState} from 'react';
import TitleWithLine from "../../elements/titleWithLine";
import Flag from "react-flagkit";
import retirementData from "../../../data/retirementData.json";
import ResultsTitleLine from "../../elements/ResultsTitleLine";
import {TableCrew, TableCrewHeading} from "../../elements/tableItems/TableCrew";
import {TableNumber} from "../../elements/tableItems/TableNumber";
import TableFlag from "../../elements/tableItems/TableFlag";
import Table from "../../elements/tableItems/Table";
import TableHeading from "../../elements/tableItems/TableHeading";

const RetirementItem = ({ number, nationality, coNationality, driver, coDriver, car, retireReason, finishedStages, isOdd }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words ${isOdd ? 'bg-[#f9f9f9]' : ''}`}
        >
            <TableNumber number={number} />
            <TableFlag nationality={nationality} coNationality={coNationality} />
            <TableCrew driver={driver} coDriver={coDriver} />
            <div className="w-[30%]">{car}</div>
            <div className="flex flex-col w-[30%] font-medium text-red-600">{retireReason}</div>
            <div className="w-[12%] flex flex-col font-semibold items-center pr-2 text-black">{finishedStages}</div>
        </div>
    );
};
const RetirementContainer = () => {
    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Izstājušies" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <Table>
                        <TableHeading>
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[4%]"></div>
                            <TableCrewHeading />
                            <div className="w-[30%]">Automašīna</div>
                            <div className="flex flex-col w-[29%]">Iemesls</div>
                            <div className="w-[13%] flex justify-center text-center pr-2">Pabegtie posmi</div>
                        </TableHeading>
                        {retirementData.length > 0 ? (
                            retirementData.map((item, index) => (
                                <RetirementItem
                                    key={index}
                                    number={item.crewNumber}
                                    nationality={item.nationality}
                                    coNationality={item.coNationality}
                                    driver={item.driver}
                                    coDriver={item.coDriver}
                                    car={item.vehicle}
                                    retireReason={item.retireReason}
                                    finishedStages={item.finishedStages}
                                    isOdd={index % 2 !== 0}
                                />
                            ))                        ) : (
                            <div className="mt-10 text-[#4e4e4e] text-center">
                                Pašlaik neviens nav izstājies.
                            </div>
                        )}

                        <div className="mt-6 text-[#4e4e4e] font-medium">
                            Kopā izstājušies: <span className="font-semibold text-rally-primary">{retirementData.length}</span>
                        </div>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default RetirementContainer;