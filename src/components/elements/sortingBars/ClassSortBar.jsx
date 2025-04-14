import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";

const ClassSortBar = ({ resultLinkName, groupClassData }) => {
    const { lng, year, rallyName } = useParams();
    const location = useLocation();

    const baseUrl = `/${lng}/${year}/${rallyName}/${resultLinkName}/`;

    const currentClassId = location.pathname.split('/').filter(Boolean).pop();

    const selectedClass = null;

    return (
        <div>
            <div className="flex items-center">
                <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mr-4 capitalize">Rally Classes</h2>
                <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            </div>
            <div className="flex flex-wrap my-5">
                <div className="flex flex-col mr-10 justify-end">
                    <div className="flex flex-wrap text-sm">
                        <Link
                            to={baseUrl}
                            className={`mr-2 mb-2 px-4 py-1 rounded font-light ${
                                selectedClass === null ? 'bg-rally-primary font-normal text-white' : 'bg-gray-200'
                            }`}
                        >
                            Radit visus
                        </Link>
                    </div>
                </div>
                {groupClassData.map((group) => (
                    <div key={group.group_id} className="flex flex-col mr-10 mb-4">
                        <h4 className="font-semibold mb-2">{group.group_name}</h4>
                        <div className="flex flex-wrap text-sm">
                            {group.classes.map((classItem) => {
                                const classPath = `${baseUrl}${classItem.id}`;
                                const isActive = currentClassId === String(classItem.id);

                                return (
                                    <Link
                                        key={classItem.id}
                                        to={classPath}
                                        className={`mr-2 mb-2 px-4 flex items-center py-1 rounded font-light ${
                                            isActive
                                                ? 'bg-rally-primary text-white'
                                                : 'bg-gray-200'
                                        }`}
                                    >
                                        {classItem.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassSortBar;
