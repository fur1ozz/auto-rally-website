import React, {useEffect, useState} from 'react';
import TitleWithLine from "../elements/titleWithLine";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";
import {useNavigate, useParams} from "react-router-dom";
import ClassSortBar from "../elements/sortingBars/ClassSortBar";
import useFetchData from "../../hooks/useFetchData";
import ChampClassSortBar from "../elements/sortingBars/ChampClassSortBar";

const ChampItem = ({ position, driver, coDriver, events, totalPoints }) => {
    const eventPoints = Object.values(events);
    const numberOfEvents = eventPoints.length;

    return (
        <div className="flex w-full justify-between p-2 border-b border-gray-300 font-light items-center">
            <div className="w-[5%] flex justify-center font-semibold text-xl">{position}</div>
            <div className="flex flex-col w-[18%]">
                <div>{driver}</div>
                <div>{coDriver}</div>
            </div>
            <div
                className={`w-[55%] font-normal grid`}
                style={{ gridTemplateColumns: `repeat(${numberOfEvents}, minmax(0, 1fr))` }}
            >
                {eventPoints.map((points, index) => (
                    <div key={index} className="flex font-medium text-lg justify-center">{points}</div>
                ))}
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

    const { t } = useTranslation();
    useLanguage(lng);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <TitleWithLine title={t('rally-menu-bar.championship')} />
                <ChampClassSortBar groupClassData={rallyClasses}/>

                <div className="mt-10">
                    <h4 className="text-2xl font-semibold text-[#4e4e4e]">LRC1</h4>

                    <div className="flex mb-10 w-full text-[#4e4e4e] overflow-x-auto">
                        <div className="min-w-[1024px] flex flex-col sm:items-center font-chakra">
                            <div className="flex w-full justify-between p-2 border-b border-gray-300 text-rally-primary font-medium items-end">
                                <div className="w-[5%] flex justify-center">Pos.</div>
                                <div className="flex flex-col w-[18%]">
                                    <div>Pilots</div>
                                    <div>Stūrmanis</div>
                                </div>
                                <div
                                    className={`w-[55%] capitalize grid`}
                                    style={{ gridTemplateColumns: `repeat(6, minmax(0, 1fr))` }}
                                >
                                    <div className="flex justify-center">Cesis</div>
                                    <div className="flex justify-center">Sarma </div>
                                    <div className="flex justify-center">Latvia</div>
                                    <div className="flex justify-center">Liepaja</div>
                                    <div className="flex justify-center">Estonia</div>
                                    <div className="flex justify-center">Burka</div>
                                </div>
                                <div className="w-[10%] flex justify-center">Punkti</div>
                            </div>
                            <ChampItem
                                position="1"
                                driver="Janis Berzins"
                                coDriver="Karlis Ozolins"
                                events={{
                                    alūksne: 10,
                                    sarma: 5,
                                    estonia: 6,
                                    cēsis: 7,
                                    paide: 13,
                                    utena: 2,
                                }}
                                totalPoints="100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChampContainer;
