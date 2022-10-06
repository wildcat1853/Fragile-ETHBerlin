import { Box, ThemeProvider } from '@mui/system';
import { Typography } from '@mui/material';

import mainTheme from '../../themes/main';
import { styled } from '@mui/material/styles';

import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 20,
  borderRadius: 100,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#EEF2F5'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: '#E73560'
  }
}));

const DropInfo = () => {
  return (
    <Box sx={{ marginRight: '90px' }}>
      <ThemeProvider theme={mainTheme}>
        <Typography variant="h1" component="h2" align="left">
          Drones for Ukraine
        </Typography>
        ;
        <Typography variant="body1" component="h2" align="left">
          Technology can accelerate the efforts tostop the war in Ukraine and
          prevent worsening of the humanitarian crisis. Help Ukrainians fight
          the cause of the crisis, not just its consequences.
        </Typography>
        {/* <LinearProgress value={0} color='red' size={40} thickness={4} sx={{marginTop:5}}/> */}
        <BorderLinearProgress
          variant="determinate"
          value={50}
          sx={{ marginTop: 7 }}
        />
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%', marginTop: 3 }}>
            <Typography
              component="h2"
              align="left"
              sx={{ fontSize: '32px', color: 'black', fontWeight: 700 }}
            >
              10.2 ETH
            </Typography>
            <Typography component="h2" align="left" sx={{ fontSize: '16px' }}>
              Money fundraised
            </Typography>
          </Box>
          <Box sx={{ width: '100%', marginTop: 3 }}>
            <Typography
              component="h2"
              align="right"
              sx={{ fontSize: '32px', color: 'black', fontWeight: 700 }}
            >
              20 ETH
            </Typography>
            <Typography component="h2" align="right" sx={{ fontSize: '16px' }}>
              Fundraising goal
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default DropInfo;
