import { useContext } from "react";
import Head from "next/head";
import ThemeContext from "../utils/ThemeContext";

const Layout = ({ children }) => {
    const { dark } = useContext(ThemeContext);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div
                className={`${
                    dark ? "themeDark" : "themeLight"
                } flex flex-col flex-1 bg-body w-full h-full`}
            >
                {children}
            </div>
        </>
    );
};

export default Layout;
