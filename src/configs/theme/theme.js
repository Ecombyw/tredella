// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        textColor: {
            white: "rgba(255, 255, 255, 1)",
            black: "rgba(17, 17, 17, 1)",
            primary: "rgba(240, 44, 44, 1)",
            secondary: "rgba(29, 33, 40, 1)",
            paragraph: "rgba(71, 74, 80, 1)",
            warning: "rgba(238, 64, 84, 1) ",
            disabled: "rgba(71, 74, 80, 0.2)"
        },
        backgroundColor: {
            main: "rgba(236, 240, 244, 1)",
            white: "rgba(255, 255, 255, 1)",
            primary: "rgba(240, 44, 44, 1)",
            secondary: "rgba(29, 33, 40, 1)",
            warning: "rgba(238, 64, 84, 1) ",
            disabled: "rgba(71, 74, 80, 0.2)"
        },
        borderColor: {
            main: "rgba(236, 240, 244, 1)",
            primary: "rgba(240, 44, 44, 1)",
            secondary: "rgba(29, 33, 40, 1)",
            warning: "rgba(238, 64, 84, 1) ",
            disabled: "rgba(71, 74, 80, 0.2)"
        },
    },
    typography: {
        fontFamily: 'Outfit, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: "3rem"
        },
        h2: {
            fontSize: '1.875rem',
            fontWeight: 600,
            lineHeight: "2.25rem"
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: "2rem"
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: "1.75rem"
        },
        h5: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: "1.5rem"
        },
        h6: {
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: "1.25rem"
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: "2.5rem"
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: "1.75rem"
        },

    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ':root': {
                    // '--primary-color': '#1976d2',
                    // '--secondary-color': '#dc004e',
                    // '--background-color': '#f4f6f8',
                },
            },
        },
    },
});

export default theme;
