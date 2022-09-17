import { React, Image } from 'react';
import { Box } from '@mui/system';




const NFTBadge = ({url = ""}) => {
  return (
      <img 
        src={url} 
        alt={"NFT that did not load"}
        style={
          {
            // TODO: 
            // 1) make it adaptable to window size
            // 2) use MUI styles
            width: '15em',
            height: '15em',
            margin: '1em'
          }
        }
      />
  //   <Box sx={{width:'220px', height:'220px', backgroundColor:'#E9ECEF', borderRadius:40}}>
  //  </Box>
  )
};

export default NFTBadge;
