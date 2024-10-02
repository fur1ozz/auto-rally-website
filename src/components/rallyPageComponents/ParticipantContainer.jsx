import React from 'react';
import participantData from '../../data/participantData.json';
import Flag from 'react-flagkit';
import TitleWithLine from "../../utils/titleWithLine";
import Table from "../../utils/tableItems/Table";
import TableHeading from "../../utils/tableItems/TableHeading";
import {TableCrew, TableCrewHeading} from "../../utils/tableItems/TableCrew";
import {TableNumber, TableNumberLarger} from "../../utils/tableItems/TableNumber";
import TableFlag from "../../utils/tableItems/TableFlag";

const ParticipantItem = ({ number, nationality, coNationality, driver, coDriver, team, car, group, className, eligibility }) => {

    return (
        <div className="flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words">
            <TableNumberLarger number={number} />
            <TableFlag nationality={nationality} coNationality={coNationality} />
            <TableCrew driver={driver} coDriver={coDriver} />
            <div className="w-[24%] pr-2">{team}</div>
            <div className="w-[24%]">{car}</div>
            <div className="flex flex-col w-[12%]">
                <div>{group}</div>
                <div>{className}</div>
            </div>
            <div className="w-[12%] flex flex-wrap">
                <img src={`/icons/competitionIcons/${eligibility}.png`} alt={eligibility} className="h-3 mr-1" />
            </div>
        </div>
    );
};

const ParticipantContainer = () => {
    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <TitleWithLine title="Dalībnieki" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <Table>
                        <TableHeading>
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[4%]"></div>
                            <TableCrewHeading />
                            <div className="w-[24%]">Pieteicējs</div>
                            <div className="w-[24%]">Automašīna</div>
                            <div className="flex flex-col w-[12%]">
                                <div>Grupa</div>
                                <div>Klase</div>
                            </div>
                            <div className="w-[12%]">Ieskaite</div>
                        </TableHeading>
                        {participantData.length > 0 ? (
                            participantData.map((participant, index) => (
                                <ParticipantItem
                                    key={index}
                                    number={participant.number}
                                    nationality={participant.nationality}
                                    coNationality={participant.nationality}
                                    driver={participant.driver}
                                    coDriver={participant.coDriver}
                                    team={participant.team}
                                    car={participant.car}
                                    group={participant.group}
                                    className={participant.class}
                                    eligibility={participant.eligibility}
                                />
                            ))
                        ) : (
                            <div className="mt-10 text-[#4e4e4e] text-center">
                                Pašlaik nav zināmu dalībnieku.
                            </div>
                        )}

                        <div className="mt-6 text-[#4e4e4e] text-center font-bold">
                            Kopējais dalībnieku skaits: {participantData.length}
                        </div>

                    </Table>
                </div>

            </div>
        </section>
    );
};

export default ParticipantContainer;