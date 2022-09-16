import * as React from 'react';
import { Container,Box } from '@mui/system';

import DropInfo from '../drop-info/DropInfo';
import FundraiserInfo from '../fundraiser-info/FundraiserInfo';
import NFTBadge from '../nft-badge/NFTBadge';


const Drop = () => {

  return (
    <Container sx={{marginTop:'100px'}}>
      <Box sx={{display: 'flex'}}>

      <DropInfo></DropInfo>
        <FundraiserInfo></FundraiserInfo>

      </Box>
      
        <Box sx={{display:'block', marginTop:10,}}>
                <NFTBadge></NFTBadge>

        </Box>
      
    
    
 
   </Container>
    
  )
};

export default Drop;
