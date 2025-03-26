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
export const TableSplitStageTime = ({ stageTime, stageDif, stageDifMs }) => {
    return (
        <div className="flex flex-col items-center w-[7%]">
            <div className="flex flex-col items-end">
                <div className="font-medium">{stageTime}</div>
                <div className={`text-sm font-normal ${stageDifMs > 0 ? 'text-[#af2c2c]' : stageDifMs < 0 ? 'text-[#2caf2c]' : ''}`}>
                    {stageDif ? stageDif : '\u00A0'}
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
                        <div className="font-normal text-[16px]">{split.split_time ? split.split_time : '-'}</div>
                        <div className={`text-sm font-normal ${split.split_dif_ms > 0 ? '' : split.split_dif_ms < 0 ? 'text-[#2caf2c]' : ''}`}>
                            {split.split_dif ? split.split_dif : '\u00A0'}
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

