import * as React from 'react';
import { Container,Box } from '@mui/system';

import DropInfo from '../drop-info/DropInfo';
import FundraiserInfo from '../fundraiser-info/FundraiserInfo';
import NFTBadge from '../nft-badge/NFTBadge';
import NFTModal from '../modal/modal';


const Drop = () => {
  const [open, setOpen] = React.useState(false)
  const handleModalClick = (prop) => {
    setOpen(true)
  }
  return (
    <Container sx={{marginTop:'100px'}}>
      <Box sx={{display: 'flex'}}>

      <DropInfo></DropInfo>
        <FundraiserInfo></FundraiserInfo>

      </Box>
      
        <Box sx={{display:'block', marginTop:10,}}>
                <NFTBadge
                  handleModalClick={handleModalClick} 
                />

        </Box>
      <NFTModal  open = {open} handleClose={() => setOpen(false)}
      />
    
    
 
   </Container>
    
  )
};

export default Drop;
