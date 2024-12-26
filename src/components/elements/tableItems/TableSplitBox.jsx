import React from "react";

export const TableSplitBox = ({ distance }) => {
    return (
        <div className="flex flex-col items-center w-[6%]">
            <div>{distance ? distance : ''}</div>
            <div>{distance ? 'km' : ''}</div>
        </div>
    );
};
export const TableSplitName = ({ type }) => {
    return (
        <div className="flex flex-col items-center w-[7%]">
            <div>{type}</div>
            <div>time</div>
        </div>
    );
}
export const TableSplitStartTime = ({ startTime }) => {
    return (
        <div className="flex justify-center w-[7%] font-medium">{startTime}</div>
    );
}
export const TableSplitStageTime = ({ stageTime, stageDif }) => {
    return (
        <div className="flex flex-col items-center w-[7%]">
            <div className="flex flex-col items-end">
                <div className="font-medium">{stageTime}</div>
                <div className={`text-sm font-normal ${stageDif > 0 ? 'text-[#af2c2c]' : stageDif < 0 ? 'text-[#2caf2c]' : ''}`}>
                    {stageDif ? stageDif : '-'}
                </div>
            </div>
        </div>
    );
}
export const TableSplitTime = ({ split }) => {
    return (
        <div className="flex flex-col items-center w-[6%]">
            <div className="flex flex-col items-end">
                {split ? (
                    <>
                        <div className="font-normal">{split.time ? split.time : '-'}</div>
                        <div className={`text-sm font-normal ${split.dif > 0 ? '' : split.dif < 0 ? 'text-[#2caf2c]' : ''}`}>
                            {split.dif ? split.dif : '-'}
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

