import React, { useState } from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { normalizeUrl } from "../../../utils/urlUtils";

const ClassSortBar = ({ resultLinkName, groupClassData }) => {
    const { lng, year, rallyName, classId } = useParams();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(null);

    const baseUrl = `/${lng}/${year}/${rallyName}/${resultLinkName}`;
    const normalizedBaseUrl = normalizeUrl(baseUrl);
    const normalizedPathname = normalizeUrl(location.pathname);

    return (
        <div className="w-full">
            <div className="flex items-center mb-3">
                <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-2xl sm:text-3xl mr-4 capitalize">
                    Groups and Classes
                </h2>
                <div className="flex-1 h-0.5 bg-[#4e4e4e]" />
            </div>

            <div className="flex gap-2 overflow-x-auto mb-4 border-b">
                <Link
                    to={baseUrl}
                    className={`whitespace-nowrap px-3 py-2 text-sm border-b-2 transition-colors ${
                        normalizedPathname === normalizedBaseUrl
                            ? 'border-rally-primary text-rally-primary font-medium'
                            : 'border-transparent text-gray-500 hover:text-black'
                    }`}
                >
                    Rādit visus
                </Link>

                {groupClassData.map((group) => (
                    <button
                        key={group.group_id}
                        className={`whitespace-nowrap px-3 py-2 text-sm border-b-2 transition-colors ${
                            activeTab === group.group_id
                                ? 'border-rally-primary text-rally-primary font-medium'
                                : 'border-transparent text-gray-500 hover:text-black'
                        }`}
                        onClick={() => setActiveTab(group.group_id)}
                    >
                        {group.group_name}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeTab && (
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-wrap gap-2 text-sm"
                    >
                        {groupClassData
                            .find(group => group.group_id === activeTab)
                            ?.classes.map((classItem) => {
                                const classPath = `${baseUrl}/${classItem.id}`;
                                const isActive =
                                    classId && classId === String(classItem.id);

                                return (
                                    <Link
                                        key={classItem.id}
                                        to={classPath}
                                        className={`px-3 py-1 rounded font-light transition-colors ${
                                            isActive
                                                ? 'bg-rally-primary text-white'
                                                : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    >
                                        {classItem.name}
                                    </Link>
                                );
                            })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ClassSortBar;
