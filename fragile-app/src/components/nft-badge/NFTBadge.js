import * as React from 'react';
import { Box } from '@mui/system';

import { Modal,Button,Typography } from '@mui/material';





const NFTBadge = ({handleModalClick}) => {
 

  return (
    <Box sx={{width:'220px', height:'220px', backgroundColor:'#E9ECEF', borderRadius:40}} onClick={() => handleModalClick()}>
    

    {/* <Modal
  open={open}
  onClose={() => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{width:'450px',height:'550px', backgroundColor:'white', borderRadius:'40px', borderColor:'white', position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,}}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal> */}


    
 
   </Box>
    
  )
};

export default NFTBadge;
