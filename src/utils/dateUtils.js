export const getRallyStatus = (date_from, date_to) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateFromParts = date_from.split('.');
    const dateToParts = date_to.split('.');

    const fromDate = new Date(today.getFullYear(), dateFromParts[1] - 1, dateFromParts[0]);
    const toDate = new Date(today.getFullYear(), dateToParts[1] - 1, dateToParts[0]);

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(0, 0, 0, 0);

    if (toDate < today) {
        return "Completed";
    } else if (fromDate <= today && toDate >= today) {
        return "Happening";
    } else {
        const timeUntilStart = Math.ceil((fromDate - today) / (1000 * 60 * 60 * 24));
        return `Starting in ${timeUntilStart} day(s)`;
    }
};
