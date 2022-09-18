import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from '@mui/material/styles';

import logo from "./fragile_earth.png"
import { textTransform } from '@mui/system';
import mainTheme from '../../themes/main';

const pages = ['Leaderboard', 'Profile'];



const headerLinksTheme = createTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
    ].join(','),
    fontSize: '1rem',
  },
  },
);




const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{
        background: 'white',
        color: 'black',
        pt:3,
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} width={'60px'} height={'60px'} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,filter: 'drop-shadow(0px 4px 10px rgba(231, 53, 96, 0.5))' }} ></img>
         
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
         
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
               
               
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                
                  <Typography textAlign="center" >{page}</Typography>
                 
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, mr:1, ml:1, color: '#777E88',fontWeight: 700, display: 'block', textTransform: 'none', fontSize: '19px', fontFamily: 'Helvetica Neue', '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'black',
              },'&:focus': {
                backgroundColor: 'transparent',
                borderRadius:'50px'
            },}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ mr: 2}}>
          <ThemeProvider theme={mainTheme}>
        
               <Button variant="secondary">Create campaign</Button>
             
          </ThemeProvider>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
         
          <ThemeProvider theme={mainTheme}>
          <Button variant='primary'>Connect wallet</Button>
          </ThemeProvider>
          </Box>

          
          
        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
