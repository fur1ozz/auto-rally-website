import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(null);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode");

        if (storedDarkMode !== null) {
            setIsDarkMode(JSON.parse(storedDarkMode));
        } else {
            setIsDarkMode(
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            );
        }
    }, []);

    useEffect(() => {
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle("dark", isDarkMode === "dark");
            localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    };

    return [isDarkMode, toggleDarkMode];
};
