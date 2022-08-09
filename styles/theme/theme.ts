import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      light: '#f7f7f7',
      dark: '#ffffffb3',
    },
    secondary: {
      main: '#121212',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff601',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
