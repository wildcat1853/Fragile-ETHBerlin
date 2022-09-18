import { useEffect } from 'react';
import { Container,Box } from '@mui/system';

import DropInfo from '../drop-info/DropInfo';
import FundraiserInfo from '../fundraiser-info/FundraiserInfo';
import NFTBadge from '../nft-badge/NFTBadge';

import { useQuery } from '@apollo/client';
import query from '../../service/graphQuery';
import * as  utils from '../../service/utils';

const Drop = () => {

  const { loading, error, data } = useQuery(query.fetchNFTInfo());
  // TODO: Perform correct error and loading handling
  if (loading) return <div>Loading...</div>
  if (error) {
    console.error(error);
    return <div>Error...</div>
  }
  const {nodes, pageInfo} = data.tokens
  const {endCursor} = pageInfo

  return (
    <Container sx={{marginTop:'100px'}}>
      <Box sx={{display: 'flex'}}>
        <DropInfo></DropInfo>
        <FundraiserInfo></FundraiserInfo>
      </Box>
      <Box sx={{display:'block', marginTop:10,}}>
        {
          nodes.map(node => {
            const {tokenId, metadata} = node.token
            const imageUrl = utils.getIpfs(metadata.image) // Parse to correct ipdf format
            
            return <NFTBadge 
              key={tokenId}
              url={imageUrl}
            />
          })
        }
      </Box>
      
    
    
 
   </Container>
    
  )
};

export default Drop;
