import React from 'react';
import TitleWithLine from "../../../utils/titleWithLine";
import Flag from "react-flagkit";
import penaltyData from '../../../data/penaltyData.json';
import ResultsTitleLine from "../../../utils/ResultsTitleLine";

const PenaltyItem = ({ number, nationality, coNationality, driver, coDriver, car, penalties }) => {
    return (
        <div className="flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words">
            <div className="w-[5%] flex justify-center font-chakra font-semibold text-xl">{number}</div>
            <div className="flex flex-col w-[5%]">
                <Flag country={nationality.toUpperCase()} className="mb-1 rounded-sm" />
                <Flag country={coNationality.toUpperCase()} className="rounded-sm" />
            </div>
            <div className="flex flex-col w-[18%] font-normal">
                <div>{driver}</div>
                <div>{coDriver}</div>
            </div>
            <div className="w-[22%]">{car}</div>
            <div className="flex flex-col w-[25%] font-medium text-rally-accent">
                {penalties.map((penalty, index) => (
                    <div key={index} className="mb-1">{penalty.reason}</div>
                ))}
            </div>
            <div className="w-[11%] flex flex-col font-medium text-red-600">
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
                    <div className="min-w-[1024px] flex flex-col font-chakra">
                        <div className="flex w-full justify-between py-2 border-b border-gray-300 text-black font-semibold items-end">
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[5%]">Nac.</div>
                            <div className="flex flex-col w-[18%]">
                                <div>Pilots</div>
                                <div>Stūrmanis</div>
                            </div>
                            <div className="w-[22%]">Automašīna</div>
                            <div className="flex flex-col w-[25%]">Iemesls</div>
                            <div className="w-[11%]">Soda laiks</div>
                        </div>
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
                                    penalties={penalty.penalties}
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PenaltyContainer;