import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const ChampClassSortBar = ({ groupClassData }) => {
    const { lng, year, classId } = useParams();
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        if (groupClassData.length === 0) return;

        if (classId) {
            const groupWithClass = groupClassData.find(group =>
                group.classes.some(classItem => String(classItem.id) === classId)
            );

            if (groupWithClass) {
                setActiveTab(groupWithClass.group_id);
                return;
            }
        }

        setActiveTab(groupClassData[0].group_id);
    }, [groupClassData, classId]);

    return (
        <div className="w-full mt-5">
            <div className="flex gap-2 overflow-x-auto mb-4 border-b">
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
                                const classPath = `/${lng}/championship/${year}/${classItem.id}`;
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

export default ChampClassSortBar;