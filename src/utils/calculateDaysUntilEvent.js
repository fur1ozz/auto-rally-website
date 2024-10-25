export const calculateDaysUntilEvent = (dateFrom) => {
    const currentDate = new Date();
    const eventDate = new Date(currentDate.getFullYear(), parseInt(dateFrom.split('.')[1]) - 1, parseInt(dateFrom.split('.')[0]));

    if (eventDate < currentDate) {
        eventDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const differenceInTime = eventDate - currentDate;
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
};
