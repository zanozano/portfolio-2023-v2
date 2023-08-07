import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#fdde',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Helvetica, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f50057',
                    borderRadius: 0,
                    color: '#fff',
                    padding: '0.9rem 2rem',
                },
            },
        },
    },
});

export default customTheme;
