import "../styles/index.css";
import { ThemeProvider } from "../utils/ThemeContext";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
