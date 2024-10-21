import React, {useState} from 'react';
import TitleWithLine from "../elements/titleWithLine";
import {useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/Loader";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage";

const PDFItem = ({ title, link }) => {
    return(
        <a
            className="flex items-center mt-1 w-fit group"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            <span className="ml-2 group-hover:text-rally-primary">{title}</span>
        </a>
    );
}
const FolderItem = ({ number, title, files }) => {
    const [isOpen, setIsOpen] = useState(false);
    const formattedNumber = String(number).padStart(2, '0');

    return (
        <div className="flex flex-col mb-5">
            <div className={`flex w-full p-2 border-b-2 border-gray-300 text-xl items-center font-normal ${isOpen ? 'border-rally-primary' : ''}`}>
                <button
                    className="flex"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                    </svg>


                    <span className="ml-2">{`${formattedNumber}. ${title}`}</span>
                </button>
            </div>
            <div
                className={`flex-col pl-10 text-lg transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? '' : 'max-h-0'}`}
            >                {files.map((file, index) => (
                    <PDFItem key={index} title={file.name} link={file.link} />
                ))}
            </div>
        </div>
    );
};
const DocumentContainer = () => {
    const { lng, year, rallyName } = useParams();
    const url = `http://localhost/api/documents/${year}/${rallyName}`;

    const { data: documentsData, loading, error } = useFetchData(url);

    const { t } = useTranslation();
    useLanguage(lng);

    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px] w-full overflow-x-auto">
                <TitleWithLine title={t('rally-menu-bar.documents')} />
                <div className="flex flex-col mt-10 w-full text-[#4e4e4e] font-light">
                    {loading && <Loader />}
                    {!loading && error && <div>Error loading data: {error.message}</div>}

                    {!loading && !error && (
                        documentsData.length > 0 ? (
                            documentsData.map((document, index) => (
                                <FolderItem
                                    key={index}
                                    number={document.number}
                                    title={document.title}
                                    files={document.documents}
                                />
                            ))
                        ) : (
                            <div>{t('documents.no-documents')}</div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default DocumentContainer;