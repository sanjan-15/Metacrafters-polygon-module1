const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress = "https://eth-sepolia.public.blastapi.io";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x89a5dEB360B63204E505B79Db6f505347F57C1b0";

  const GWarming = await ethers.getContractFactory("Volcano", signer);
  const contract = await GWarming.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted 5 NFTs");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });