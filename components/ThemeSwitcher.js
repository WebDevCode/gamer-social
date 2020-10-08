import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button
            className="iconWrapper themeToggle"
            onClick={() => {
                toggleTheme();
            }}
        >
            <div className="moonOrSun themeToggle" />
            <div className="moonMask themeToggle" />
        </button>
    );
};

export default ThemeSwitcher;
