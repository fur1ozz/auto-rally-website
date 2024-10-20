import {convertTimeToSeconds} from "./formatTime";

export const calculateTimeDifferences = (results, timeField) => {
    if (!results || results.length === 0 || !results[0][timeField]) return [];

    const timeDifferences = [];
    const firstDriverTime = convertTimeToSeconds(results[0][timeField]);

    timeDifferences.push({ differenceFromFirst: 0, differenceFromPrevious: null });

    for (let i = 1; i < results.length; i++) {
        const currentTime = convertTimeToSeconds(results[i][timeField]);
        const previousTime = convertTimeToSeconds(results[i - 1][timeField]);

        const differenceFromFirst = currentTime - firstDriverTime;
        const differenceFromPrevious = currentTime - previousTime;

        timeDifferences.push({
            differenceFromFirst,
            differenceFromPrevious,
        });
    }
    return timeDifferences;
};