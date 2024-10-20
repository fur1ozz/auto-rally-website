export const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return (
        <>
            {hours}<span className="animate-flash">:</span>{minutes}
        </>
    );
};

// results table formatting
export const formatTimeForDifference = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(2);
    return `+${minutes > 0 ? `${minutes}.` : ''}${secs}`;
};
// export const convertTimeToSeconds = (time) => {
//     const [minutes, seconds] = time.split(':');
//     return parseInt(minutes) * 60 + parseFloat(seconds);
// };

export const convertTimeToSeconds = (time) => {
    if (!time || typeof time !== 'string') {
        return 0;
    }

    const [minutes, seconds] = time.split(':');

    const parsedMinutes = parseInt(minutes) || 0;
    const parsedSeconds = parseFloat(seconds) || 0;

    return parsedMinutes * 60 + parsedSeconds;
};