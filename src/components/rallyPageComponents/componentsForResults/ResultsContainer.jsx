import React from 'react';
import TitleWithLine from "../../elements/titleWithLine";
import ResultsTitleLine from "../../elements/ResultsTitleLine";
import {TableNumber} from "../../elements/tableItems/TableNumber";
import TableFlag from "../../elements/tableItems/TableFlag";
import {TableCrew, TableCrewHeading} from "../../elements/tableItems/TableCrew";
import TableHeading from "../../elements/tableItems/TableHeading";
import Table from "../../elements/tableItems/Table";
import {useParams} from "react-router-dom";
import StageSortBar from "../../elements/sortingBars/StageSortBar";
import {formatTimeForDifference} from "../../../utils/formatTime";
import {calculateTimeDifferences} from "../../../utils/calculateTimeDiferences";
import useFetchData from "../../../hooks/useFetchData";
import Loader from "../../elements/loaders/Loader";
import {useTranslation} from "react-i18next";
import useLanguage from "../../../hooks/useLanguage";

const ResultsItem = ({ place, number, nationality, coNationality, driver, coDriver, car, team, driveType, groupClass, penalty, overallTime, timeDifference, isOdd }) => {
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
    const { lng, year, rallyName } = useParams();
    const url = `/overall-results/${year}/${rallyName}`;

    const { data: overallData, loading, error } = useFetchData(url);

    const resultsData = overallData?.overall_results || [];

    const timeDifferences = calculateTimeDifferences(resultsData, 'total_time');

    const { t } = useTranslation();
    useLanguage(lng);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title={t('rally-menu-bar.results')} />
                <StageSortBar numberOfStage={overallData?.stage_count} resultLinkName="results-stage" />
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
                        {loading && <Loader />}
                        {!loading && error && <div>Error loading data: {error.message}</div>}

                        {!loading && !error && (
                            resultsData.length > 0 ? (
                                resultsData.map((result, index) => (
                                    <ResultsItem
                                        key={index}
                                        place={index + 1}
                                        number={result.crew_number}
                                        nationality={result.driver.nationality}
                                        coNationality={result.co_driver.nationality}
                                        driver={`${result.driver.name} ${result.driver.surname}`}
                                        coDriver={`${result.co_driver.name} ${result.co_driver.surname}`}
                                        team={result.team.name}
                                        car={result.car}
                                        driveType={result.drive_type}
                                        groupClass={result.drive_class}
                                        penalty={result.total_penalty_time.split('.')[0]}
                                        overallTime={result.total_time}
                                        timeDifference={timeDifferences[index]}
                                        isOdd={index % 2 !== 0}
                                    />
                                ))
                            ) : (
                                <div className="mt-10 text-[#4e4e4e] text-center">
                                    Pašlaik kopvērtējuma rezultātu nav.
                                </div>
                            )
                        )}
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default ResultsContainer;