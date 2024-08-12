import React from 'react';
import participantData from '../data/ParticipantData.json';
import Flag from 'react-flagkit';

const ParticipantItem = ({ number, nationality, coNationality, driver, coDriver, team, car, group, className, eligibility }) => {
    // const eligibilityIcon = require(`/icons/competitionIcons/${eligibility}.png`);

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
            <div className="w-[18%]">{team}</div>
            <div className="w-[18%]">{car}</div>
            <div className="flex flex-col w-[11%]">
                <div>{group}</div>
                <div>{className}</div>
            </div>
            <div className="w-[11%] flex flex-wrap">
                <img src={`/icons/competitionIcons/${eligibility}.png`} alt={eligibility} className="h-3 mr-1" />
            </div>
        </div>
    );
};

const ParticipantContainer = () => {
    return (
        <div className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <div className="flex items-center">
                    <div className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mr-4">Dalībnieki</div>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>

                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <div className="min-w-[1024px] flex flex-col sm:items-center font-chakra">
                        <div className="flex w-full justify-between py-2 border-b border-gray-300 text-rally-secondary font-medium items-center">
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[5%]">Nac.</div>
                            <div className="flex flex-col w-[18%]">
                                <div>Pilots</div>
                                <div>Stūrmanis</div>
                            </div>
                            <div className="w-[18%]">Pieteicējs</div>
                            <div className="w-[18%]">Automašīna</div>
                            <div className="flex flex-col w-[11%]">
                                <div>Grupa</div>
                                <div>Klase</div>
                            </div>
                            <div className="w-[11%]">Ieskaite</div>
                        </div>
                        {participantData.length > 0 ? (
                            participantData.map((participant, index) => (
                                <ParticipantItem
                                    key={index}
                                    number={participant.number}
                                    nationality={participant.nationality}
                                    coNationality={participant.nationality}
                                    driver={participant.driver}
                                    coDriver={participant.coDriver}
                                    team={participant.team}
                                    car={participant.car}
                                    group={participant.group}
                                    className={participant.class}
                                    eligibility={participant.eligibility}
                                />
                            ))
                        ) : (
                            <div className="mt-10 text-[#4e4e4e] text-center">
                                Pašlaik nav zināmu dalībnieku.
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ParticipantContainer;