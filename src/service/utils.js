const getIpfs = (link) => {
    const parsed = link.split("://")
    if (parsed.length !== 2) {
        throw "Incorrect ipfs link for Bored Ape NFT"
    }
    return `https://ipfs.io/ipfs/${parsed[1]}`
}

const ethToWei = (eth) => (eth * 1e18).toString();

export {
    getIpfs, ethToWei,
}