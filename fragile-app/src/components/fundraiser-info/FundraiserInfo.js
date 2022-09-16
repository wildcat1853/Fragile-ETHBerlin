import * as React from 'react';

import { Box, ThemeProvider } from '@mui/system';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import mainTheme from '../../themes/main';



import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';


const FundraiserInfo = () => {

  return (
    <ThemeProvider theme={mainTheme}>
    <Box sx={{minWidth:'400px',minHeight:'500px', boxShadow: '0px 4.7655px 23.8275px rgba(119, 126, 136, 0.73);', backgroundColor:'black', borderRadius:'36px', }}>
        <Box sx={{display:'flex'}}>
                  <Box sx={{ flexGrow: 1, width:'100%', }}>
                          <Typography variant="h2white" component="h2" align="left" sx={{paddingLeft:4, paddingTop:3}}>
                    Kolo UA
                    
                  </Typography>
                  
                  
                  </Box>
                  <Box sx={{ paddingTop:4,paddingRight:4, display:'flex', }}>
                      <CheckCircleTwoToneIcon color="red"></CheckCircleTwoToneIcon>
                      
                      <Typography variant="h2red" component="h2" align="right" >
                        Verified
                      </Typography>
                  </Box>

          </Box>
          <Divider color="#4A4D50" sx={{width:'100%', marginTop:5, marginLeft: '0%' }}></Divider>

          <Box sx={{ display:'inline-block',minHeight:'130px', paddingTop:4,paddingRight:4, paddingLeft:4, }}>

          <Typography variant="body2_light_grey" component="h2" align="left" >
          Ukrainian tech-focused non-profit. Raised $4,000,000 from a community of 2,000 people 100% goes to purchase of optics, air and communications for UA resistance 
           </Typography>
          
           </Box>
          
            <Divider color="#4A4D50" sx={{width:'100%', marginTop:3, marginLeft: '0%' }}></Divider>
            <Box sx={{display:'flex'}}>
                  <Box sx={{width:'100%', marginTop:3, marginLeft: 3,}}>
                          <Typography variant="title_grey" component="h2" align="left" >
                          Ethereum address
                        </Typography>
                        <Typography variant="body2_white" component="h2" align="left" >
                        0xa93b...9bdhd
                        </Typography>

                  </Box>
                  <Box sx={{width:'100%', marginTop:3, marginLeft: 3,}}>
                          <Typography variant="title_grey" component="h2" align="left" >
                          Website
                        </Typography>
                        <Typography variant="body2_white" component="h2" align="left" >
                        www.koloua.com
                        </Typography>

                  </Box>
            </Box>


            <Box sx={{display:'flex', marginTop:2}}>
                  <Box sx={{width:'100%', marginTop:3, marginLeft: 3,}}>
                          <Typography variant="title_grey" component="h2" align="left" >
                         Social media
                        </Typography>
                        <Typography variant="body2_white" component="h2" align="left" >
                        twitter.com/kolouk..
                        </Typography>

                  </Box>
                  <Box sx={{width:'100%', marginTop:3, marginLeft: 3,}}>
                          <Typography variant="title_grey" component="h2" align="left" >
                          Cause
                        </Typography>
                        <Typography variant="body2_white" component="h2" align="left" >
                        War in Ukraine
                        </Typography>

                  </Box>
            </Box>

      
      </Box>
  </ThemeProvider>
  
  
 
  )
};

export default FundraiserInfo;
