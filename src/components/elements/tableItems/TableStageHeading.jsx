import React from 'react';
import TableHeading from "./TableHeading";

export const TableStageHeading = () => {
    return (
        <TableHeading>
            <div className="w-[10%] flex justify-center">V.</div>
            <div className="w-[10%] flex justify-center">Nr.</div>
            <div className="w-[60%]">Ekipāža</div>
            <div className="w-[20%] flex justify-end pr-2">Laiks</div>
        </TableHeading>
    );
};