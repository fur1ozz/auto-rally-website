import React, {useEffect, useState} from 'react';
import TitleWithLine from "../../../utils/titleWithLine";
import Flag from "react-flagkit";
import retirementData from "../../../data/retirementData.json";
import ResultsTitleLine from "../../../utils/ResultsTitleLine";

const RetirementItem = ({ number, nationality, coNationality, driver, coDriver, car, retireReason, finishedStages }) => {
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
            <div className="w-[25%]">{car}</div>
            <div className="flex flex-col w-[22%] font-medium text-red-600">{retireReason}</div>
            <div className="w-[11%] flex flex-col font-medium ">{finishedStages}</div>
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
                    <div className="min-w-[1024px] flex flex-col font-chakra">
                        <div className="flex w-full justify-between py-2 border-b border-gray-300 text-black font-semibold items-end">
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[5%]">Nac.</div>
                            <div className="flex flex-col w-[18%]">
                                <div>Pilots</div>
                                <div>Stūrmanis</div>
                            </div>
                            <div className="w-[25%]">Automašīna</div>
                            <div className="flex flex-col w-[22%]">Iemesls</div>
                            <div className="w-[11%]">Pabegtie posmi</div>
                        </div>
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
                                />
                            ))                        ) : (
                            <div className="mt-10 text-[#4e4e4e] text-center">
                                Pašlaik neviens nav izstājies.
                            </div>
                        )}

                        <div className="mt-6 text-[#4e4e4e] font-medium">
                            Kopā izstājušies: <span className="font-semibold text-rally-primary">{retirementData.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetirementContainer;