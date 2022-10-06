import { React, useEffect, useState } from 'react';
import { Container, Box } from '@mui/system';

import DropInfo from '../drop-info/DropInfo';
import FundraiserInfo from '../fundraiser-info/FundraiserInfo';
import NFTBadge from '../nft-badge/NFTBadge';
import NFTModal from '../modal/modal';

import { useQuery } from '@apollo/client';
import query from '../../service/graphQuery';
import * as utils from '../../service/utils';
import { collection } from '../../collection/data';

const Drop = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const handleModalClick = (url) => {
    setOpen(true);
    setUrl(url);
  };
  // const { loading, error, data } = useQuery(query.fetchNFTInfo());
  // // TODO: Perform correct error and loading handling
  // if (loading) return <div>Loading...</div>
  // if (error) {
  //   console.error(error);
  //   return <div>Error...</div>
  // }
  // const {nodes, pageInfo} = data.tokens
  // const {endCursor} = pageInfo

  return (
    <Container sx={{ marginTop: '100px' }}>
      <Box sx={{ display: 'flex' }}>
        <DropInfo />
        <FundraiserInfo />
      </Box>
      <Box sx={{ display: 'block', marginTop: 10 }}>
        {Object.keys(collection).map((contract) => {
          // const {tokenId, metadata} = node.token
          // const imageUrl = utils.getIpfs(metadata.image) // Parse to correct ipdf format
          const tokenId = contract;
          const imageUrl = utils.getIpfs(collection[contract]);

          return (
            <NFTBadge
              key={tokenId}
              url={imageUrl}
              handleModalClick={() => handleModalClick(imageUrl)}
            />
          );
        })}
      </Box>
      <NFTModal url={url} open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default Drop;
