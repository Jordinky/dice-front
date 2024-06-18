import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#dedede',
        },
        secondary: {
          main: '#404040',
        },
        info: {
          main: '#831f0f',
        },
        text: {
          secondary: '#9c27b0',
          primary: '#404040',
        },
      },
  });
  
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#9c27b0',
        },
        info: {
          main: '#831f0f',
        },
        text: {
          secondary: '#9c27b0',
          primary: '#dedede',
        },
      },
});