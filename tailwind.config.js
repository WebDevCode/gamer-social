module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: {
                default: "var(--black)",
                dark: "var(--black-dark)",
                darker: "var(--black-darker)",
                darkMid: "var(--black-dark-mid)",
            },
            white: {
                default: "var(--white)",
                dark: "var(--white-dark)",
            },
            gray: {
                default: "var(--gray)",
                dark: "var(--gray-dark)",
                light: "var(--gray-light)",
                lighter: "var(--gray-lighter)",
            },
            cyan: {
                default: "var(--cyan)",
                dark: "var(--cyan-dark)",
                light: "var(--cyan-light)",
                hover: "var(--cyan-hover)",
            },
            violet: {
                default: "var(--violet)",
                dark: "var(--violet-dark)",
                darker: "var(--violet-darker)",
                hover: "var(--violet-hover)",
            },
            green: "var(--green)",
            red: {
                default: "var(--red)",
                darkMid: "var(--red-dark-mid)",
                hover: "var(--red-hover)",
            },
            blue: {
                default: "var(--blue)",
                light: "var(--blue-light)",
            },
            yellow: {
                default: "var(--yellow)",
                light: "var(--yellow-light)",
            },
            social: {
                facebook: "var(--color-facebook)",
                twitter: "var(--color-twitter)",
                twitterHover: "var(--color-twitter-hover)",
                twitterShadow: "var(--color-twitter-shadow)",
                twitch: "var(--color-twitch)",
                twitchHover: "var(--color-twitch-hover)",
                twitchShadow: "var(--color-twitch-shadow)",
                youtube: "var(--color-youtube)",
                instagram: "var(--color-instagram)",
                patreon: "var(--color-patreon)",
                discord: "var(--color-discord)",
            },
            //theme start
            primary: "var(--color-primary)",
            primaryDark: "var(--color-primary-dark)",
            primaryShadow: "var(--color-primary-shadow)",
            primaryHover: "var(--color-primary-hover)",
            secondary: "var(--color-secondary)",
            secondaryDark: "var(--color-secondary-dark)",
            secondaryShadow: "var(--color-secondary-shadow)",
            secondaryHover: "var(--color-secondary-hover)",
            tertiary: "var(--color-tertiary)",
            tertiaryShadow: "var(--color-tertiary-shadow)",
            tertiaryHover: "var(--color-tertiary-hover)",
            //Text Colors
            textColor: "var(--color-text)",
            textColorDark: "var(--color-text-dark)",
            textColorAlt: "var(--color-text-alt)",
            textColorAltLight: "var(--color-text-alt-light)",
            textSelection: "var(--color-text-selection)",
            textLink: "var(--color-text-link)",
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            body: "var(--color-body)",
            boxBg: "var(--color-box-bg)",
            boxBgAlt: "var(--color-box-bg-alt)",
            boxBgLight: "var(--color-box-bg-light)",
        }),
        extend: {
            screens: {
                xs: "576px",
            },
        },
    },
    variants: {},
    plugins: [],
};
