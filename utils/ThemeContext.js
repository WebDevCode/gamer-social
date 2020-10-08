import React, { useState, useEffect } from "react";

//set default state. this case we are setting dark mode as the default
const defaultTheme = {
    dark: true,
    toggler: () => {},
};

//create theme context
const ThemeContext = React.createContext(defaultTheme);

//Create Theme Provider - a wrapper which also write theme selection to localStorage

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(true);

    //useEffect to read from local Storage
    useEffect(() => {
        //get preference from localStorage
        const themeMode = localStorage.getItem("theme-mode");

        if (!themeMode) {
            localStorage.setItem("theme-mode", dark);
        }

        if (themeMode && JSON.parse(themeMode) !== dark) {
            setDark(JSON.parse(themeMode));
        }
    }, [dark]);

    const toggleTheme = () => {
        localStorage.setItem("theme-mode", JSON.stringify(!dark));
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
export { ThemeProvider };
