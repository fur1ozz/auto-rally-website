import React from 'react';
import TableHeading from "../../elements/tableItems/TableHeading";
import Flag from "react-flagkit";

const StageWinCountItem = ({ number, nationality, coNationality, driver, coDriver, car, driveType, place1, place2, place3, isOdd }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words cursor-default ${isOdd ? 'bg-[#f9f9f9]' : ''}`}
        >
            <div className="w-[10%] flex justify-center font-chakra font-semibold text-lg text-rally-primary">
                {number}
            </div>
            <div className="flex flex-col w-[60%] font-medium">
                <div className="flex">
                    <div className="flex flex-col justify-center pr-1">
                        <Flag country={nationality.toUpperCase()} className="mr-1 h-4 rounded-[3px]" />
                    </div>
                    <div className="text-nowrap overflow-hidden truncate">
                        {driver}
                    </div>

                    <div className="ml-2 flex flex-col justify-center ">
                        <Flag country={coNationality.toUpperCase()} className="mr-1 h-4 rounded-[3px]" />
                    </div>
                    <div className=" text-nowrap overflow-hidden truncate">
                        {coDriver}
                    </div>
                </div>
                <div className="font-light pl-7">
                    <div>{car} ({driveType})</div>
                </div>
            </div>
            <div className="w-[30%] flex text-lg">
                <div className={`w-1/3 flex justify-center ${place1 ? "font-semibold" : ""} `}>
                    {place1 || 0}
                </div>
                <div className={`w-1/3 flex justify-center ${place2 ? "font-semibold" : ""} `}>
                    {place2 || 0}
                </div>
                <div className={`w-1/3 flex justify-center ${place3 ? "font-semibold" : ""} `}>
                    {place3 || 0}
                </div>
            </div>
        </div>
    );
};

const StageWinCountContainer = ({ data }) => {

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 pt-0 sm:pt-0 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto flex justify-center">
                <div className="flex  text-[#4e4e4e] overflow-x-auto">
                    <div className="min-w-[700px] flex flex-col sm:items-center font-chakra">
                        <div className="mb-4 text-2xl text-rally-primary font-bold uppercase">TOP 3</div>
                        <TableHeading>
                            <div className="w-[10%] flex justify-center">Nr.</div>
                            <div className="w-[60%]">Ekipāža</div>
                            <div className="flex w-[30%]">
                                <div className="w-1/3 flex justify-center">P1</div>
                                <div className="w-1/3 flex justify-center">P2</div>
                                <div className="w-1/3 flex justify-center">P3</div>
                            </div>
                        </TableHeading>
                        {data.map((driver, index) => (
                            <StageWinCountItem
                                key={index}
                                number={driver.crew_number}
                                nationality={driver.driver_nationality}
                                coNationality={driver.co_driver_nationality}
                                driver={driver.driver}
                                coDriver={driver.co_driver}
                                car={driver.vehicle}
                                driveType={driver.drive_type}
                                place1={driver.total_stage_wins}
                                place2={driver.total_second_places}
                                place3={driver.total_third_places}
                                isOdd={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StageWinCountContainer;
