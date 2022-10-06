import { gql } from '@apollo/client';

const fetchNFTInfo = (contractAddress = '', after = '') => {
  return gql`
        query NFTInfo {
            tokens(
                networks: {network: ETHEREUM}
                where: {collectionAddresses: "${contractAddress}"}
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
