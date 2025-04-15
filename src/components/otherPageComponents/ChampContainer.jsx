import React, {useEffect, useState} from 'react';
import TitleWithLine from "../elements/titleWithLine";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";
import {useNavigate, useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import ChampClassSortBar from "../elements/sortingBars/ChampClassSortBar";
import Loader from "../elements/loaders/Loader";

const ChampItem = ({ position, driver, coDrivers, events, totalPoints, rallies }) => {
    return (
        <div className="flex w-full justify-between p-2 border-b border-gray-300 font-light items-center">
            <div className="w-[5%] flex justify-center font-semibold text-xl">{position}</div>
            <div className="flex flex-col w-[18%]">
                <div className="font-bold">{driver}</div>
                {coDrivers.map((name, idx) => (
                    <div key={idx} className="text-sm">{name}</div>
                ))}
            </div>
            <div
                className={`w-[55%] font-normal grid`}
                style={{ gridTemplateColumns: `repeat(${rallies.length}, minmax(0, 1fr))` }}
            >
                {rallies.map((rally) => {
                    const points = events[rally.id];
                    return (
                        <div
                            key={rally.id}
                            className="flex font-medium text-lg justify-center"
                        >
                            {points ?? ''}
                        </div>
                    );
                })}
            </div>
            <div className="w-[10%] flex justify-center font-medium text-lg">{totalPoints}</div>
        </div>
    );
};

const ChampContainer = () => {
    const { lng, year, classId } = useParams();

    let url = `/championship/${year}/${classId}`;

    const navigate = useNavigate();

    const { data: champData, loading, error } = useFetchData(url);

    // useEffect(() => {
    //     if (error) {
    //         navigate('/');
    //     }
    // }, [error, navigate]);

    const rallyClasses = champData?.championship_classes || [];
    const rallies = champData?.rallies || [];
    const rallyCount = rallies.length;
    const classData = champData?.championship || [];

    const { t } = useTranslation();
    useLanguage(lng);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <TitleWithLine title={t('rally-menu-bar.championship')} />
                <ChampClassSortBar groupClassData={rallyClasses}/>

                <div className="mt-10">
                    {loading && <Loader />}
                    {!loading && error && <div>Error loading data: {error.message}</div>}
                    {!loading && !error && (
                        <>
                            <h4 className="text-2xl font-semibold text-[#4e4e4e]">{classData.class}</h4>

                            <div className="flex mb-10 w-full text-[#4e4e4e] overflow-x-auto">
                                <div className="min-w-[1024px] flex flex-col sm:items-center font-chakra">
                                    <div className="flex w-full justify-between p-2 border-b border-gray-300 text-rally-primary font-medium items-end">
                                        <div className="w-[5%] flex justify-center">Pos.</div>
                                        <div className="flex flex-col w-[18%]">
                                            <div>Pilots</div>
                                            <div>Stūrmanis</div>
                                        </div>
                                        <div
                                            className="w-[55%] capitalize grid"
                                            style={{ gridTemplateColumns: `repeat(${rallyCount}, minmax(0, 1fr))` }}
                                        >
                                            {rallies.map((rally) => (
                                                <div key={rally.id} className="flex justify-center">
                                                    {rally.name.split(" ").pop()}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-[10%] flex justify-center">Punkti</div>
                                    </div>
                                    {classData.crews.map((crew, index) => {
                                        const eventPoints = crew.results.reduce((acc, result) => {
                                            acc[result.rally_id] = result.total_points ?? '';
                                            return acc;
                                        }, {});

                                        const coDrivers = [
                                            ...new Set(crew.results.map(result => result.co_driver).filter(Boolean))
                                        ];

                                        return (
                                            <ChampItem
                                                key={crew.driver_id}
                                                position={index + 1}
                                                driver={crew.driver}
                                                coDrivers={coDrivers}
                                                events={eventPoints}
                                                totalPoints={crew.total_points}
                                                rallies={rallies}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ChampContainer;
