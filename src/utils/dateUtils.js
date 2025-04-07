export const getRallyStatus = (date_from, date_to) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const fromDate = new Date(date_from);
    const toDate = new Date(date_to);

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

export const formatDateForCalendar = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit'
    }).replace(/\//g, '.');
};
