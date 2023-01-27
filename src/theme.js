import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fdb813',
        },
        secondary: {
            main: '#4db6ac',
        },
        background: {
            default: '#5e5e5e',
            paper: '#4a4949',
        },
        error: {
            main: '#f44336',
        },
    },
});

export default theme;

