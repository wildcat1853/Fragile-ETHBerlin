import { React, useContext } from 'react';
import { MetaMaskContext } from '../metamask/context';
    
const NFTBadge = ({url = "", handleModalClick}) => {
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
        onClick={handleModalClick}
      />
  )
};

export default NFTBadge;
