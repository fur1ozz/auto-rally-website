import React from 'react';
import ResultsTitleLine from "../../../utils/ResultsTitleLine";
import TitleWithLine from "../../../utils/titleWithLine";
import {useParams} from "react-router-dom";
import TableHeading from "../../../utils/tableItems/TableHeading";

const StageResults = () => {
    const { year, rallyName, stageNumber } = useParams();
    //takes the data from parameter in a link

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title={`Ātrumposms - ${stageNumber}`} />
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
                    <div className="min-w-[1024px] flex justify-between">
                        <div className="min-w-[500px] flex flex-col sm:items-center font-chakra">
                            <div className="mb-4">Ātrumposma Rezultati</div>
                            <TableHeading>
                                <div className="w-[5%] flex justify-center">V.</div>
                                <div className="w-[5%] flex justify-center">Nr.</div>
                                <div className="w-[4%]"></div>
                                <div className="w-[50%]">Ekipāža</div>
                                <div className="w-[16%]">Laiks</div>
                            </TableHeading>
                            {}
                        </div>
                        <div className="min-w-[500px] flex flex-col sm:items-center font-chakra">
                            <div className="mb-4">Kopvērtējums</div>
                            <TableHeading>
                                <div className="w-[5%] flex justify-center">V.</div>
                                <div className="w-[5%] flex justify-center">Nr.</div>
                                <div className="w-[4%]"></div>
                                <div className="w-[50%]">Ekipāža</div>
                                <div className="w-[16%]">Laiks</div>
                            </TableHeading>
                            {}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StageResults;