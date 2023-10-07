require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    swisstronik: {
      url: process.env.SWISSTRONIK_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
