import React from 'react';
import championshipData from '../../data/championshipData.json';

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
            <div className={`w-[55%] font-normal grid grid-cols-${numberOfEvents}`}>
                {eventPoints.map((points, index) => (
                    <div key={index} className="flex font-medium text-lg justify-center">{points}</div>
                ))}
            </div>
            <div className="w-[10%] flex justify-center font-medium text-lg">{totalPoints}</div>
        </div>
    );
};

const ChampContainer = () => {
    const firstGroup = Object.keys(championshipData.groups)[0];
    const firstClass = Object.keys(championshipData.groups[firstGroup].classes)[0];
    const firstCrew = championshipData.groups[firstGroup].classes[firstClass][0];
    const numberOfEvents = Object.keys(firstCrew.events).length;

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <div className="flex items-center mb-10">
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mr-4">Čempionāts</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>

                {Object.entries(championshipData.groups).map(([groupName, groupData]) => (
                    // We remove the groupName rendering and focus on classes
                    Object.entries(groupData.classes).map(([className, crews]) => (
                        <div key={className} className="mt-20">
                            <h4 className="text-2xl font-semibold text-[#4e4e4e]">{className}</h4>

                            <div className="flex mb-10 w-full text-[#4e4e4e] overflow-x-auto">
                                <div className="min-w-[1024px] flex flex-col sm:items-center font-chakra">
                                    <div className="flex w-full justify-between p-2 border-b border-gray-300 text-rally-primary font-medium items-end">
                                        <div className="w-[5%] flex justify-center">Pos.</div>
                                        <div className="flex flex-col w-[18%]">
                                            <div>Pilots</div>
                                            <div>Stūrmanis</div>
                                        </div>
                                        <div className={`w-[55%] capitalize grid grid-cols-${numberOfEvents}`}>
                                            {Object.keys(firstCrew.events).map((eventName, index) => (
                                                <div key={index} className="flex justify-center">{eventName}</div>
                                            ))}
                                        </div>
                                        <div className="w-[10%] flex justify-center">Punkti</div>
                                    </div>

                                    {crews.map((crew) => (
                                        <ChampItem
                                            key={crew.driver}
                                            position={crew.position}
                                            driver={crew.driver}
                                            coDriver={crew.co_driver}
                                            events={crew.events}
                                            totalPoints={crew.total_points}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </section>
    );
};

export default ChampContainer;
