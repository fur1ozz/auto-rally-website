import React from 'react';
import RallyPageLayout from "../RallyPageLayout";
import StageWinners from "../../../components/rallyPageComponents/componentsForResults/StageWinners";
import StageWinCountContainer
    from "../../../components/rallyPageComponents/componentsForResults/StageWinCountContainer";
import stageWinnerOverall from '../../../data/stageWinnerOverall.json';


const StageWinnersPage = () => {
    return (
        <RallyPageLayout>
            <StageWinners data={stageWinnerOverall}/>
            <StageWinCountContainer data={stageWinnerOverall}/>
        </RallyPageLayout>
    );
};

export default StageWinnersPage;