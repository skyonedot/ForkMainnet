require("@nomiclabs/hardhat-waffle")

require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks : {
    hardhat : {
      forking : {
        url : process.env.ALCHEMY_URL,
      }
    }
  }
};
