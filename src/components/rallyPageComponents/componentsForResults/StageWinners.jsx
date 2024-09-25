import React from 'react';
import ResultsTitleLine from "../../../utils/ResultsTitleLine";
import TitleWithLine from "../../../utils/titleWithLine";
import Flag from "react-flagkit";
import stageWinnerOverall from '../../../data/stageWinnerOverall.json';

const WinnerItem = ({ stageNumber, stageName, stageDistance, crewNumber, nationality, coNationality, driver, coDriver, car, team, driveType, stageTime, averageSpeed, }) => {
    return (
        <div className="flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words">
            <div className="flex flex-col w-[18%]">
                <div className="text-sm">{stageNumber}</div>
                <div className="font-medium">{stageName}</div>
            </div>
            <div className="flex flex-col w-[10%] items-end">
                <div>{stageDistance}</div>
            </div>
            <div className="w-[5%] flex justify-center">{crewNumber}</div>
            <div className="flex flex-col w-[5%] items-end pr-2">
                <Flag country={nationality.toUpperCase()} className="mb-1 rounded-sm" />
                <Flag country={coNationality.toUpperCase()} className="rounded-sm" />
            </div>
            <div className="flex flex-col w-[18%]">
                <div>{driver}</div>
                <div>{coDriver}</div>
            </div>
            <div className="flex flex-col w-[26%]">
                <div>{team}</div>
                <div>{car} ({driveType})</div>
            </div>
            <div className="flex flex-col w-[10%] font-medium">{stageTime}</div>
            <div className="flex flex-col w-[8%] items-end">
                <div>{averageSpeed}</div>
            </div>
        </div>
    );
};
const StageWinners = () => {
    const firstPlaceWinners = Object.values(stageWinnerOverall.overall_results).map(stage => stage.top_3[0]);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Posmu Uzvarētāji" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <div className="min-w-[1024px] flex flex-col sm:items-center font-chakra">
                        <div className="flex w-full justify-between py-2 border-b border-gray-300 text-black font-semibold items-end">
                            <div className="flex flex-col w-[18%]">
                                <div className="text-sm">Ātrumposms</div>
                                <div>Nosaukums</div>
                            </div>
                            <div className="flex flex-col w-[10%] items-end">
                                <div>Garums</div>
                                <div>km</div>
                            </div>
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[5%]"></div>
                            <div className="flex flex-col w-[18%]">
                                <div>Pilots</div>
                                <div>Stūrmanis</div>
                            </div>
                            <div className="flex flex-col w-[26%]">
                                <div>Pieteicējs</div>
                                <div>Automašīna</div>
                            </div>
                            <div className="flex flex-col w-[10%]">Laiks</div>
                            <div className="flex flex-col w-[8%] items-end">
                                <div>Ātrums</div>
                                <div>km/h</div>
                            </div>
                        </div>
                        {firstPlaceWinners.map((winner, index) => (
                            <WinnerItem
                                key={index}
                                stageNumber={Object.values(stageWinnerOverall.overall_results)[index].stage}
                                stageName={Object.values(stageWinnerOverall.overall_results)[index].stage_name}
                                stageDistance={Object.values(stageWinnerOverall.overall_results)[index].stage_distance}
                                crewNumber={winner.crew_number}
                                nationality={winner.driver_nationality}
                                coNationality={winner.co_driver_nationality}
                                driver={winner.driver}
                                coDriver={winner.co_driver}
                                car={winner.vehicle}
                                team={winner.team}
                                driveType={winner.drive_type}
                                stageTime={winner.completion_time}
                                averageSpeed={winner.average_speed_kmh}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StageWinners;