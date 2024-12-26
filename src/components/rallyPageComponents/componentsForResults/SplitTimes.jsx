import React from 'react';
import ResultsTitleLine from "../../elements/ResultsTitleLine";
import TitleWithLine from "../../elements/titleWithLine";
import Table from "../../elements/tableItems/Table";
import TableHeading from "../../elements/tableItems/TableHeading";
import {TableCrew, TableCrewHeading} from "../../elements/tableItems/TableCrew";
import StageSortBar from "../../elements/sortingBars/StageSortBar";
import {
    TableSplitBox,
    TableSplitName, TableSplitStageTime,
    TableSplitStartTime,
    TableSplitTime
} from "../../elements/tableItems/TableSplitBox";
import {TableNumber} from "../../elements/tableItems/TableNumber";
import TableFlag from "../../elements/tableItems/TableFlag";
import data from "../../../data/splitData.json";

const SplitItem = ({ place, number, nationality, coNationality, driver, coDriver, car, team, startTime, splits, stageTime, stageDif, isOdd }) => {
    return (
        <div
            className={`flex w-full justify-between py-2 border-b border-gray-300 items-center font-light break-words ${isOdd ? 'bg-[#f9f9f9]' : ''}`}
        >
            <div className="w-[5%] flex justify-center font-chakra font-semibold text-xl">{place}</div>
            <TableNumber number={number} />
            <TableFlag nationality={nationality} coNationality={coNationality} />
            <TableCrew driver={driver} coDriver={coDriver} />
            <div className="flex flex-col w-[23%]">
                <div>{team}</div>
                <div>{car}</div>
            </div>
            <TableSplitStartTime startTime={startTime} />
            {splits.map((split, index) => (
                <TableSplitTime key={index} split={split.split} />
            ))}
            <TableSplitStageTime stageTime={stageTime} stageDif={stageDif} />
        </div>
    );
};
const SplitTimes = () => {

    const split1 = { time: '0:58.5', dif: '-0.4' };
    const split2 = { time: '2:06.0', dif: '-2.8' };
    const split3 = { time: '2:56.9', dif: '+1.3' };
    const split4 = { time: '3:57.7', dif: '+3.5' };
    const split5 = { time: '5:19.5', dif: '+1.9' };


    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 sm:pb-10 pb-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Starplaiki" />
                {/*TODO change the stage logic, maybe new sort bar with diferent link name*/}
                <StageSortBar numberOfStage="8" resultLinkName="results-stage" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <Table>
                        <TableHeading>
                            <div className="w-[5%] flex justify-center">V.</div>
                            <div className="w-[5%] flex justify-center">Nr.</div>
                            <div className="w-[4%]"></div>
                            <TableCrewHeading />
                            <div className="flex flex-col w-[23%]">
                                <div>Pieteicējs</div>
                                <div>Automašīna</div>
                            </div>
                            <TableSplitName type="Start" />
                            <TableSplitBox distance="2.1"/>
                            <TableSplitBox distance="4.7"/>
                            <TableSplitBox distance="6.4"/>
                            <TableSplitBox distance="8.4"/>
                            <TableSplitBox distance="10.7"/>
                            <TableSplitName type="Stage" />
                        </TableHeading>
                        {data.map((item, index) => (
                            <SplitItem
                                key={index}
                                place={item.place}
                                number={item.number}
                                nationality={item.nationality}
                                coNationality={item.coNationality}
                                driver={item.driver}
                                coDriver={item.coDriver}
                                car={item.car}
                                team={item.team}
                                startTime={item.startTime}
                                splits={item.splits}
                                stageTime={item.stageTime}
                                stageDif={item.stageDif}
                                isOdd={index % 2 === 1}
                            />
                        ))}
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default SplitTimes;