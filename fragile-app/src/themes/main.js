import { createTheme } from '@mui/material';

const mainTheme = createTheme({
    palette: {
        primary:{
          main:'#FFD966',
        },
        red: {
          // This is green.A700 as hex.
          main: '#E73560',
        },
      },
    typography: {
      fontFamily: [
        '"Helvetica Neue"',
      ].join(','),
      h1: {
        color: 'black',
        fontSize: '64px',
        fontWeight: 700,
      },
      body1: {
        color: 'black',
        fontSize: '26px',
        fontWeight: 500,
        color: '#41474F',
      },
      h2white: {
        color: 'white',
        fontSize: '36px',
        fontWeight: 600,
      },
      h2red: {
        color: '#E73560',
        fontSize: '18px',
        fontWeight: 500,
      },
      body2_white:{
        color:'white',
        fontSize: '18px',
        fontWeight:500,
      },
      body2_light_grey:{
        color:'#B6B6B6',
        fontSize: '18px',
        fontWeight:500,
      },
      title_grey:{
        color:'#777E88',
        fontSize: '14px',
        fontWeight:700,
      },
      button: {
        color: 'red'
      }
    }
  });

  export default mainTheme
  