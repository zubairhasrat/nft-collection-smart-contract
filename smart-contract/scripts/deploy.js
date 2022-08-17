const { ethers } = require('hardhat');
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {

  const whiteContractAddress = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;

  const CDContract = await ethers.getContractFactory("CryptoDevs");
  const deployedCDContract = await CDContract.deploy(metadataURL, whiteContractAddress);

// print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCDContract.address
  );
}

main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});