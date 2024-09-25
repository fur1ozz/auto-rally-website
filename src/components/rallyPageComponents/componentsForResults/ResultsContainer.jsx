import React from 'react';
import TitleWithLine from "../../../utils/titleWithLine";
import ResultsTitleLine from "../../../utils/ResultsTitleLine";
import Flag from "react-flagkit";
import resultsData from '../../../data/resultsData.json';

const convertTimeToSeconds = (time) => {
    const [minutes, seconds] = time.split(':');
    return parseInt(minutes) * 60 + parseFloat(seconds);
};

const calculateTimeDifferences = (results) => {
    const timeDifferences = [];
    const firstDriverTime = convertTimeToSeconds(results[0].overall_time);
    timeDifferences.push({ differenceFromFirst: 0, differenceFromPrevious: null });

    for (let i = 1; i < results.length; i++) {
        const currentTime = convertTimeToSeconds(results[i].overall_time);
        const previousTime = convertTimeToSeconds(results[i - 1].overall_time);

        const differenceFromFirst = currentTime - firstDriverTime;
        const differenceFromPrevious = currentTime - previousTime;

        timeDifferences.push({
            differenceFromFirst,
            differenceFromPrevious,
        });
    }
    return timeDifferences;
};
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(2);
    return `+${minutes > 0 ? `${minutes}.` : ''}${secs}`;
}
const ResultsItem = ({ place, number, nationality, coNationality, driver, coDriver, car, team, driveType, groupClass, penalty, overallTime, timeDifference, }) => {
    return (
        <div className="flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words">
            <div className="w-[5%] flex justify-center font-chakra font-semibold text-xl text-cyan-500">{place}</div>
            <div className="w-[5%] flex justify-center font-chakra font-semibold text-lg">{number}</div>
            <div className="flex flex-col w-[5%] items-end pr-2">
                <Flag country={nationality.toUpperCase()} className="mb-1 rounded-sm" />
                <Flag country={coNationality.toUpperCase()} className="rounded-sm" />
            </div>
            <div className="flex flex-col w-[18%] font-normal">
                <div>{driver}</div>
                <div>{coDriver}</div>
            </div>
            <div className="flex flex-col w-[23%]">
                <div>{team}</div>
                <div>{car}</div>
            </div>
            <div className="flex flex-col w-[10%]">
                <div>{driveType}</div>
                <div>{groupClass}</div>
            </div>
            <div className="w-[12%] font-medium text-red-600">{penalty}</div>
            <div className="w-[12%] font-medium">{overallTime}</div>
            <div className="flex flex-col w-[10%] items-end pr-4 text-[#af2c2c] font-medium">
                <div>
                    {place === 1 ? '-' : formatTime(timeDifference.differenceFromFirst)}
                </div>
                <div className="text-sm">{timeDifference.differenceFromPrevious !== null ? formatTime(timeDifference.differenceFromPrevious) : '-'}</div>
            </div>
        </div>
    );
};
const ResultsContainer = () => {
    const timeDifferences = calculateTimeDifferences(resultsData);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Rezultāti" />
                <div className="flex flex-col flex-wrap my-5">
                    <div className="flex flex-col mr-10">
                        <div className="flex flex-wrap text-sm">
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">1</button>
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">2</button>
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">3</button>
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">4</button>
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">5</button>
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">6</button>
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">7</button>
                            <button className="mr-2 mb-2 px-4 py-1 rounded font-light bg-gray-200">8</button>
                        </div>
                    </div>
                </div>
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <div className="min-w-[1024px] flex flex-col sm:items-center font-chakra">
                        <div className="flex w-full justify-between py-2 border-b border-gray-300 text-black font-semibold items-end">
                            <div className="w-[5%] flex justify-center">V.</div>
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[5%]"></div>
                            <div className="flex flex-col w-[18%]">
                                <div>Pilots</div>
                                <div>Stūrmanis</div>
                            </div>
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
                            <div className="flex flex-col w-[10%] items-end pr-4">
                                <div>No 1.</div>
                                <div>No Iep.</div>
                            </div>
                        </div>
                        {resultsData.map((result, index) => (
                            <ResultsItem
                                key={index}
                                place={index + 1}
                                number={result.crew_number}
                                nationality={result.nationality}
                                coNationality={result.co_driver_nationality}
                                driver={result.driver}
                                coDriver={result.co_driver}
                                team={result.team}
                                car={result.vehicle}
                                driveType={result.drive_type}
                                groupClass={result.class}
                                penalty={result.penalty_time}
                                overallTime={result.overall_time}
                                timeDifference={timeDifferences[index]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsContainer;