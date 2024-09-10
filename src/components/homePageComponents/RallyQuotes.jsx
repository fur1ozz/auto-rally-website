import React from 'react';

const QuoteItem = ({  }) => {

    return (
            <div className="w-[300px] rounded-sm mt-10 mx-2 p-4 flex flex-col justify-between font-chakra shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]">
                <div className="text-5xl font-bold">"</div>
                <div className="w-full text-xl px-4 mb-4">Sis patiesam bija gruts rallijs.</div>
                <div className="w-full flex justify-end">T.Veveris</div>
            </div>
    );
};
const RallyQuotes = () => {
    return (
        <section className="w-full bg-white sm:px-14 px-10 pt-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mx-4">Rally Cēsis Quotes</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                <div className="flex w-full text-[#4e4e4e] justify-around flex-wrap ">
                    <QuoteItem />
                    <div className="w-[300px] rounded-sm mt-10 mx-2 p-4 flex flex-col font-chakra shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]">
                        <div className="text-5xl font-bold">"</div>
                        <div className="w-full text-xl px-4 mb-4">Neticu ka mes tikam sim cauri sveikaa.</div>
                        <div className="w-full flex justify-end">R.Artimovics</div>
                    </div>
                    <div className="w-[300px] rounded-sm mt-10 mx-2 p-4 flex flex-col font-chakra shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]">
                        <div className="text-5xl font-bold">"</div>
                        <div className="w-full text-xl px-4 mb-4">Tie dzeki nezelo ne celu, ne masinu</div>
                        <div className="w-full flex justify-end">K.Markitans</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RallyQuotes;