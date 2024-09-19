import React from 'react';
import TitleWithLine from "../../../utils/titleWithLine";
import ResultsTitleLine from "../../../utils/ResultsTitleLine";

const ResultsContainer = () => {
    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] overflow-x-auto">
                <ResultsTitleLine />
                <TitleWithLine title="Rezultāti" />
                <div className="flex mt-10 w-full text-[#4e4e4e] overflow-x-auto">
                    <div className="min-w-[1024px] flex flex-col sm:items-center font-chakra">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsContainer;