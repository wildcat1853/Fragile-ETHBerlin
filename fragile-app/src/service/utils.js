const getIpfs = (link) => {
    const parsed = link.split("://")
    if (parsed.length != 2) {
        throw "Incorrect ipfs link for Bored Ape NFT"
    }
    return `https://ipfs.io/ipfs/${parsed[1]}`
}

const parseApes = (data) => {
    const endCursor = data.tokens.pageInfo.endCursor
    let ipfsList = []
    
    data.tokens.nodes.forEach(token => {
        ipfsList.push(
            getIpfs(token.token.metadata.image)
        )
    });
    return {endCursor, ipfsList}
}

export default {
    parseApes: parseApes,
    getIpfs: getIpfs
}