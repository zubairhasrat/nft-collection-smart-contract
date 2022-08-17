require("dotenv").config({ path: ".env" });

// Address of the Whitelist Contract that you deployed
const WHITELIST_CONTRACT_ADDRESS = process.env.WHITELIST_CONTRACT_ADDRESS;
// URL to extract Metadata for a Crypto Dev NFT
const METADATA_URL = "https://nft-collection-app-xi.vercel.app/api/";

module.exports = { WHITELIST_CONTRACT_ADDRESS, METADATA_URL };