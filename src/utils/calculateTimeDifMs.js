export const calculateTimeDifMs = (results, timeField) => {
    if (!results || results.length === 0 || !results[0][timeField]) return [];

    const timeDifferences = [];
    const firstDriverTime = results[0][timeField];

    timeDifferences.push({ differenceFromFirst: 0, differenceFromPrevious: null });

    for (let i = 1; i < results.length; i++) {
        const currentTime = results[i][timeField];
        const previousTime = results[i - 1][timeField];

        const differenceFromFirst = currentTime - firstDriverTime;
        const differenceFromPrevious = currentTime - previousTime;

        timeDifferences.push({
            differenceFromFirst,
            differenceFromPrevious,
        });
    }
    return timeDifferences;
};