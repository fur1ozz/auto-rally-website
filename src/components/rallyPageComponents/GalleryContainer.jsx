import React from 'react';
import TitleWithLine from "../elements/titleWithLine";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";
import {useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/loaders/Loader";

const GalleryContainer = () => {
    const { lng, year, rallyName } = useParams();
    const { t } = useTranslation();
    const url = `/photos/${year}/${rallyName}`;

    const { data: photos, loading, error } = useFetchData(url);

    useLanguage(lng);
    return (
        <section className="w-full min-h-20 bg-white sm:px-14 px-5 sm:py-14 py-10 flex justify-center">
            <div className="lg:w-[1024px] w-full overflow-x-auto">
                <TitleWithLine title= {t('rally-menu-bar.gallery')} />
                <div className="flex mt-10 w-full text-[#4e4e4e] font-light">
                    <div className="flex flex-wrap justify-evenly overflow-auto w-full">
                        {loading && <Loader />}
                        {!loading && error && <div>Error loading data: {error.message}</div>}

                        {!loading && !error && (
                            photos.length > 0 ? (
                                photos.map((photo, index) => (
                                    <div key={index}  className="sm:w-[300px] w-[250px] mb-10 mx-4 hover:scale-[1.02] transition-all duration-150 cursor-pointer">
                                        <img src={photo.image_url} alt="" className="rounded-sm shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]" title={`Photo by - ${photo.created_by}`}/>
                                    </div>
                                ))
                            ) : (
                                <div className="mt-10 text-[#4e4e4e] text-center">
                                    Pašlaik nav publicētu bilžu.
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryContainer;