import { React, useContext } from 'react';
import { Box } from '@mui/system';
import { MetaMaskContext } from '../metamask/context';
import { NFT_PRICE } from '../../collection/data';

const NFTBadge = ({url = ""}) => {
  const {sendTx} = useContext(MetaMaskContext);

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
        onClick={() => sendTx(NFT_PRICE)}
      />
  //   <Box sx={{width:'220px', height:'220px', backgroundColor:'#E9ECEF', borderRadius:40}}>
  //  </Box>
  )
};

export default NFTBadge;
