import { gql } from '@apollo/client';
import { contractAddr } from '../collection/data';

const fetchNFTInfo = (contractAddress = '', after = '') => {
  return gql`
        query NFTInfo {
            tokens(
                networks: {network: ETHEREUM}
                where: {collectionAddresses: "${contractAddr}"}
                pagination: {after: "${after}"}
            ) {
                pageInfo {
                    endCursor
                }
                nodes {
                    token {
                        tokenId
                        collectionName
                        metadata
                    }
                }
            }
        }
        `;
};

export default {
  fetchNFTInfo: fetchNFTInfo
};
