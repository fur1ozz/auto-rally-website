export const addPlaceholdersToRallies = (rallies) => {
    const ralliesWithPlaceholders = [...rallies];
    const remainder = ralliesWithPlaceholders.length % 3;

    if (remainder !== 0) {
        for (let i = 0; i < 3 - remainder; i++) {
            ralliesWithPlaceholders.push({ invisible: true });
        }
    }

    return ralliesWithPlaceholders;
};