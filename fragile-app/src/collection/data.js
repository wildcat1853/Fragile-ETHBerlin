import { ethToWei } from '../service/utils';


const BORDE_APE_CONTRACT = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
const NFT_PRICE = ethToWei(0.00001);

const contractAddr = BORDE_APE_CONTRACT


const collection = {
    "0x3fe6deec532535d74fa78d649497b57187f8ebab": "ipfs://bafkreibyl72pxjqzihxijqtl3jnfkha7adnj57pjch3t4xwaspso2zr73u",
    "0x891aa842807f2cee03e4ce0610a840378e880cdf": "ipfs://bafkreibyl72pxjqzihxijqtl3jnfkha7adnj57pjch3t4xwaspso2zr73u"
}


export {
    contractAddr,
    NFT_PRICE,
    collection
}