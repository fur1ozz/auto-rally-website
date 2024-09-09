export const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return (
        <>
            {hours}<span className="animate-flash">:</span>{minutes}
        </>
    );
};
