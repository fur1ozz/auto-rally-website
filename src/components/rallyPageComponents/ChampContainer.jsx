import React, {useState} from 'react';
import championshipData from '../../data/championshipData.json';
import seasonData from '../../data/seasonEventsWithGroups.json';
import groupClassData from '../../data/champGroupClassData.json';
import TitleWithLine from "../../utils/titleWithLine";

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
    const [selectedClass, setSelectedClass] = useState(null);

    const handleClassClick = (className) => {
        setSelectedClass(className);
    };

    const filteredChampionshipData = () => {
        // If no class is selected, return all data
        if (!selectedClass) return championshipData.groups;

        // Otherwise, filter data by the selected class
        const filteredGroups = {};
        Object.entries(championshipData.groups).forEach(([groupName, groupData]) => {
            const filteredClasses = {};
            Object.entries(groupData.classes).forEach(([className, crews]) => {
                if (className === selectedClass) {
                    filteredClasses[className] = crews;  // Only include the selected class
                }
            });
            if (Object.keys(filteredClasses).length > 0) {
                filteredGroups[groupName] = { ...groupData, classes: filteredClasses };
            }
        });

        return filteredGroups;
    };


    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <TitleWithLine title="Čempionāts" />

                <div className="flex flex-col flex-wrap my-5">
                    <div className="flex flex-col mr-10 justify-end">
                        <div className="flex flex-wrap text-sm">
                            <button
                                className={`mr-2 mb-2 px-4 py-1 rounded font-light ${
                                    selectedClass === null ? 'bg-rally-primary font-normal text-[#ededed]' : 'bg-gray-200'
                                }`}
                                onClick={() => setSelectedClass(null)}
                            >
                                Radit visus
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        {groupClassData.map((groupData, groupIndex) => (
                            <div key={groupIndex} className="flex flex-col mr-10">
                                <h4>{groupData.group}</h4>
                                <div className="flex flex-wrap text-sm">
                                    {groupData.classes.map((className, classIndex) => (
                                        <button
                                            key={classIndex}
                                            className={`mr-2 mb-2 px-4 py-1 rounded font-light ${
                                                selectedClass === className ? 'bg-rally-primary font-normal text-[#ededed]' : 'bg-gray-200'
                                            }`}
                                            onClick={() => handleClassClick(className)}
                                        >
                                            {className}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {Object.entries(filteredChampionshipData()).map(([groupName, groupData]) => (
                    Object.entries(groupData.classes).map(([className, crews]) => {

                        const groupEvents = seasonData.season.groups[groupName].events;
                        const numberOfEvents = groupEvents.length;

                        return (
                            <div key={className} className="mt-10">
                                <h4 className="text-2xl font-semibold text-[#4e4e4e]">{className}</h4>

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
                                                style={{ gridTemplateColumns: `repeat(${numberOfEvents}, minmax(0, 1fr))` }}
                                            >
                                                {groupEvents.map((eventName, index) => (
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
                        );
                    })
                ))}
            </div>
        </section>
    );
};

export default ChampContainer;
