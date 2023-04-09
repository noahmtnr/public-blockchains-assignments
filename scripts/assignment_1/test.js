// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

    const hardhatSigners = await hre.ethers.getSigners();
    const hhSigner = hardhatSigners[0];
    console.log("HH Signer address:", hhSigner.address);
  
    // Getting the contract.
    const contractName = "Assignment1";
    // Change the contract address to your deployed contract address.
    const contractAddress = "0xF8eCE54A64fe86615954828b953C176915532656";

    const myAddress = "0x2496fb70FC9807b4A4749A8C1aB6f712E2A88254";
  
    const ass = await hre.ethers.getContractAt(
        contractName,
        contractAddress,
        hhSigner
    );

    console.log("Found: ");
    console.log("contractName:", contractName);
    console.log("contractAddress:", contractAddress);

    let price = await ass.getPrice();
    console.log("Price: ", price);
    // let tokenId = await ass.mint(myAddress, {
    //     value: price
    // });
    
    // ass.flipSaleStatus();
    // ass.burn(myAddress)
    let hash = await ass.getIPFSHash();
    console.log("Hashh:",hash);
    // console.log("One Burn Executed");
myAddress    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
