const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/Volcano.sol/Volcano.json');
require('dotenv').config();

// Transferring the asssets to FxChain 
async function main() {
 
  const networkAddress = 'https://eth-sepolia.public.blastapi.io';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const VolcanoNFT = await ethers.getContractFactory("Volcano");
  const nft = await VolcanoNFT.attach('0x89a5dEB360B63204E505B79Db6f505347F57C1b0');

  // Get FXRoot contract instance
  const fxRootAddress = '';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Approval confirmed');

  const tokenIds = [0, 1, 2, 3, 4]; 

  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      nft.address,
      wallet.address, 
      tokenIds[i],
      '0x6566'
    );

    await depositTx.wait();
  }

  console.log("Approved and deposited");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
