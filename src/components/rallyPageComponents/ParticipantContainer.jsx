import React from 'react';
import TitleWithLine from "../elements/titleWithLine";
import Table from "../elements/tableItems/Table";
import TableHeading from "../elements/tableItems/TableHeading";
import {TableCrew, TableCrewHeading} from "../elements/tableItems/TableCrew";
import {TableNumberLarger} from "../elements/tableItems/TableNumber";
import TableFlag from "../elements/tableItems/TableFlag";
import {useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/Loader";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";

const ParticipantItem = ({ number, nationality, coNationality, driver, coDriver, team, car, group, className, eligibility, isOdd }) => {

    return (
        <div className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words ${isOdd ? 'bg-[#f9f9f9]' : ''}`}>
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
                {eligibility.map((item, idx) => (
                    <img key={idx} src={`/icons/competitionIcons/${item}.png`} alt={item} className="h-3 mr-1" />
                ))}
            </div>
        </div>
    );
};


const ParticipantContainer = () => {
    const { lng, year, rallyName } = useParams();
    const { t } = useTranslation();
    const url = `http://localhost/api/participants/${year}/${rallyName}`;

    const { data: participants, loading, error } = useFetchData(url);
    useLanguage(lng);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <TitleWithLine title={t('rally-menu-bar.participants')}/>
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
                        {loading && <Loader />}
                        {!loading && error && <div>Error loading data: {error.message}</div>}

                        {!loading && !error && (
                            participants.length > 0 ? (
                                participants.map((participant, index) => (
                                    <ParticipantItem
                                        key={index}
                                        number={participant.crew.crew_number}
                                        nationality={participant.driver.nationality}
                                        coNationality={participant.co_driver.nationality}
                                        driver={`${participant.driver.name} ${participant.driver.surname}`}
                                        coDriver={`${participant.co_driver.name} ${participant.co_driver.surname}`}
                                        team={participant.team.team_name}
                                        car={participant.crew.car}
                                        group={participant.crew.drive_type}
                                        className={participant.crew.drive_class}
                                        eligibility={participant.crew.groups.map(group => group.group_name.toLowerCase())}
                                        isOdd={index % 2 !== 0}
                                    />
                                ))
                            ) : (
                                <div className="mt-10 text-[#4e4e4e] text-center">
                                    Pašlaik nav zināmu dalībnieku.
                                </div>
                            )
                        )}

                        {!loading &&
                            <div className="mt-6 text-[#4e4e4e] text-center font-bold">
                                Kopējais dalībnieku skaits: {participants.length}
                            </div>
                        }
                    </Table>
                </div>

            </div>
        </section>
    );
};

export default ParticipantContainer;