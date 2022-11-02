// const ethers = require('ethers')
async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Antihuman = await ethers.getContractFactory("PublicKeyChallenge");
    const antihuman = await Antihuman.deploy();
    console.log("Tx Hash", antihuman.deployTransaction.hash);
    console.log("Antihuman address:", antihuman.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  