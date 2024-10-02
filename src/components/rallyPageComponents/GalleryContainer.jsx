import React from 'react';
import TitleWithLine from "../../utils/titleWithLine";

const GalleryContainer = () => {
    return (
        <section className="w-full min-h-20 bg-white sm:px-14 px-5 sm:py-14 py-10 flex justify-center">
            <div className="lg:w-[1024px] w-full overflow-x-auto">
                <TitleWithLine title="Galerija" />
                <div className="flex mt-10 w-full text-[#4e4e4e] font-light">
                    <div className="flex flex-wrap md:justify-between justify-center overflow-auto">
                        <div className="sm:w-[300px] w-[250px] mb-10 mx-4 hover:scale-[1.02] transition-all duration-150 cursor-pointer">
                            <img src="/images/gallery/img.png" alt="" className="rounded-sm shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]"/>
                        </div>
                        <div className="sm:w-[300px] w-[250px] mb-10 mx-4 hover:scale-[1.02] transition-all duration-150 cursor-pointer">
                            <img src="/images/gallery/img_1.png" alt="" className="rounded-sm shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]"/>
                        </div>
                        <div className="sm:w-[300px] w-[250px] mb-10 mx-4 hover:scale-[1.02] transition-all duration-150 cursor-pointer">
                            <img src="/images/gallery/img_2.png" alt="" className="rounded-sm shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]"/>
                        </div>
                        <div className="sm:w-[300px] w-[250px] mb-10 mx-4 hover:scale-[1.02] transition-all duration-150 cursor-pointer">
                            <img src="/images/gallery/img_3.png" alt="" className="rounded-sm shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryContainer;