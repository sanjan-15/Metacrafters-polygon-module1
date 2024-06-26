# Volcano.sol - Active Volcano NFT Contract

This is the README.md file for the "Volcano.sol" smart contract, which implements the creation and management of Active Volcano Non-Fungible Tokens (NFTs) on the Ethereum blockchain.

## Contract Information

- Contract Name: Volcano
- Contract Type: ERC721A (Extends ERC721 standard)
- Solidity Version: 0.8.9
- License: MIT

## Overview

The "Volcano.sol" contract allows the owner to mint a limited number of Active Volcano NFTs. These NFTs are ERC721A tokens, meaning they extend the ERC721 standard with additional functionalities. Each NFT represents a unique Active Volcano and is associated with a prompt description.

## Features

1. **Minting**: The owner of the contract can mint Active Volcano, limiting the total supply to 5 tokens.

2. **Base URL**: The contract has a base URL that serves as the prefix for the NFT metadata URLs. The full metadata URL is constructed by appending the token ID to the base URL.

3. **Prompt Description**: The contract provides a function to retrieve the prompt description, which is "Active Volcano in middle of the ocean" in this case.

## Contract Deployment

Ensure you have the required dependencies, such as "erc721a/contracts/ERC721A.sol," and deploy the contract on the Ethereum network with Solidity version 0.8.9.

## Contract Functions

### mint(uint256 quantity)

Allows the owner to mint a specified quantity of Active Volcano NFTs.

- **Modifier**: onlyOwner (The function can only be executed by the contract owner.)
- **Parameters**:
  - `quantity`: The number of NFTs to be minted.
- **Requirements**:
  - The total supply of NFTs after minting must not exceed the maximum quantity (5).

### _baseURI() internal view override returns (string memory)

Overrides the baseURI function from ERC721A to return the base URL for the NFTs.

- **Returns**: The base URL for the NFTs.

### promptDescription() external view returns (string memory)

Returns the prompt description associated with the GIGANTIC BLACK HOLE NFTs.

- **Returns**: The prompt description string.


### Deploying the ERC721 Contract

 Run the following command to deploy the ERC721 contract to the Goerli(now deprecated) Ethereum Testnet:

npx hardhat run scripts/deploy.js --network goerli(or sepolia) 

## NOTE:
After deploying the address will generate. So, copy that address into `contarctAddress.js`(stored in metadata folder) and also in `batchMint.js`(stored in scripts folder)

 
The script will deploy the contract 
### Batch Mint NFTs

npx hardhat run scripts/batchMint.js --network goerli(or sepolia)

The script will mint the specified number of NFTs and assign them to your address.

### Approve and Deposit NFTs to Polygon Mumbai(or Amoy)

Run the following commands to approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai(or Amoy) network using the FxPortal Bridge:

npx hardhat run scripts/approveDeposit.js --network goerli(or sepolia)
