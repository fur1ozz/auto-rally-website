export const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return (
        <>
            {hours}<span className="animate-flash">:</span>{minutes}
        </>
    );
};

export const formatMillisecondsAdaptive = (milliseconds, msPrecision = 2) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const ms = Math.floor((milliseconds % 1000) / Math.pow(10, 3 - msPrecision));

    if (totalSeconds < 60) {
        return `${seconds}.${ms.toString().padStart(msPrecision, '0')}`;
    } else if (totalSeconds < 3600) {
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${ms.toString().padStart(msPrecision, '0')}`;
    } else {
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${ms.toString().padStart(msPrecision, '0')}`;
    }
};