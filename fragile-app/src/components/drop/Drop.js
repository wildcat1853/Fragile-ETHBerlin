import * as React from 'react';
import { Container } from '@mui/system';

import DropInfo from '../drop-info/DropInfo';
import FundraiserInfo from '../fundraiser-info/FundraiserInfo';


const Drop = () => {

  return (
    <Container sx={{marginTop:'100px', display: 'flex'}}>
   
    <DropInfo></DropInfo>
    <FundraiserInfo></FundraiserInfo>
    
    
 
   </Container>
    
  )
};

export default Drop;
