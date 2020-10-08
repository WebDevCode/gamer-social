import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const Layout = ({ children }) => {
    const { dark } = useContext(ThemeContext);

    return (
        <div
            className={`${
                dark ? "themeDark" : "themeLight"
            } bg-body min-w-full min-h-full`}
        >
            {children}
        </div>
    );
};

export default Layout;
