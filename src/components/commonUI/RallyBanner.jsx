import {formatDateForCalendar} from "../../utils/dateUtils";

const RallyBanner = ({ rallyData }) => {
    const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

    const defaultImage = '/images/headers/default-header.png';
    const headerImage = rallyData?.rally_banner ? `${STORAGE_URL}/${rallyData.rally_banner}` : defaultImage;

    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-[1024px]">
                <div className="relative text-white font-chakra">
                    <img
                        src={headerImage}
                        alt={rallyData.rally_name ?? ''}
                        className="w-full shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]"
                    />
                    <div
                        className="absolute text-white px-6 py-2 font-bold sm:text-2xl rounded-[1px] -top-7 left-0 ml-14"
                        style={{ backgroundImage: 'url(/images/long-tire-strip.png)' }}
                    >
                        {rallyData.rally_name ?? ''}
                    </div>
                    <div
                        className="absolute text-white px-8 py-1 font-semibold sm:text-base text-xs rounded-[1px] -bottom-3 left-3"
                        style={{ backgroundImage: 'url(/images/small-tire-strip.png)' }}
                    >
                        {rallyData.season_year ?? ''}
                    </div>
                    <div
                        className="absolute text-white px-8 py-1 font-semibold sm:text-base text-xs rounded-[1px] -bottom-3 left-1/2"
                        style={{ backgroundImage: 'url(/images/long-tire-strip.png)' }}
                    >
                        {rallyData?.date_from && rallyData?.date_to
                            ? `${formatDateForCalendar(rallyData.date_from)} - ${formatDateForCalendar(rallyData.date_to)}`
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RallyBanner;
