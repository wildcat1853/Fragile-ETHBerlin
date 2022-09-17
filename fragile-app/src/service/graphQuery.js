import {gql} from '@apollo/client'

const BORDE_APE_CONTRACT = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"

const fetchNFTInfo = (contractAddress="", after="") => {
    if (contractAddress == "") {
        contractAddress = BORDE_APE_CONTRACT
    }
    
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
        `
}

export default {
    fetchNFTInfo: fetchNFTInfo
}