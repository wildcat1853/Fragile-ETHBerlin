import * as React from 'react';
import { Container, Box } from '@mui/system';

import Avatar from '@mui/material/Avatar';

import avatar from './avatar.jpg';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import mainTheme from '../../themes/main';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Button from '@mui/material/Button';

const UserInfo = () => {
  return (
    <Container>
      <ThemeProvider theme={mainTheme}>
        <Box
          sx={{
            minWidth: '320px',
            minHeight: '400px',
            boxShadow: '0px 4.7655px 23.8275px rgba(119, 126, 136, 0.73);',
            backgroundColor: 'black',
            borderRadius: '46px',
            padding: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Avatar
              alt=""
              src={avatar}
              sx={{ width: 80, height: 80, bgcolor: 'black' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Typography
              variant="h2white"
              component="h2"
              align="center"
              sx={{ paddingTop: 3, fontSize: '20px' }}
            >
              0xa...9bdhd
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  width: '54px',
                  height: '54px',
                  backgroundColor: '#300B13',
                  display: 'flex',
                  borderRadius: '100px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 4
                }}
              >
                <EmojiEventsIcon
                  sx={{ color: '#E73560' }}
                  fontSize="large"
                ></EmojiEventsIcon>
              </Box>
              <Typography
                variant="h2white"
                component="h2"
                align="center"
                sx={{ mt: 4, fontSize: '24px', color: '#E73560', ml: 2 }}
              >
                #42 in Leaderboard
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left'
              }}
            >
              <Typography
                variant="h2white"
                component="h2"
                align="left"
                sx={{ paddingTop: 3, fontSize: '20px', paddingLeft: 3 }}
              >
                0.02
              </Typography>
              <Typography
                variant="h2white"
                component="h2"
                align="left"
                sx={{
                  paddingTop: 3,
                  fontSize: '20px',
                  ml: 2,
                  color: '#777E88'
                }}
              >
                Ether donated
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left'
              }}
            >
              <Typography
                variant="h2white"
                component="h2"
                align="left"
                sx={{ paddingTop: 3, fontSize: '20px', paddingLeft: 3 }}
              >
                1
              </Typography>
              <Typography
                variant="h2white"
                component="h2"
                align="left"
                sx={{
                  paddingTop: 3,
                  fontSize: '20px',
                  ml: 2,
                  color: '#777E88'
                }}
              >
                Campaigns donated
              </Typography>
            </Box>
          </Box>

          <ThemeProvider theme={mainTheme}>
            <Button
              variant="primary"
              sx={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                color: 'black',
                mt: 4
              }}
            >
              Share profile
            </Button>
          </ThemeProvider>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default UserInfo;
