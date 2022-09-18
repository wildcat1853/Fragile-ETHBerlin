import * as React from 'react';
import { Container,Box } from '@mui/system';


import NFTBadge from '../nft-badge/NFTBadge';
import NFTModal from '../modal/modal';
import UserInfo from '../user-info/UserInfo';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import mainTheme from '../../themes/main';
import { ThemeProvider } from '@emotion/react';


const Item = styled(Paper)(({ theme }) => ({
  width:'220px', height:'220px', backgroundColor:'#E9ECEF', borderRadius:300, padding:0, boxShadow: 'none'
}));


const UserProfile = () => {

  return (
    <Container sx={{marginTop:'30px', display: 'flex', marginTop:14}}>
       <ThemeProvider theme={mainTheme}>
        <UserInfo/>
      
        <Box sx={{display:'block', ml:6}}>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(18)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item sx={{display:'flex', alignItems: 'center',  justifyContent: 'center'}}>
       
             <LockIcon color="grey" fontSize="large"></LockIcon>
        
      </Item>
    </Grid>
  ))}
</Grid>
              

        </Box>
     
      
    
    

 </ThemeProvider>
   </Container>
    
  )
};

export default UserProfile;
