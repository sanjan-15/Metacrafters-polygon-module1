const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Volcano.sol/Volcano.json");

const tokenAddress = "";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x09296d955fda0F5aBdfb7950a7DbfC9BD9fEeDC8"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
