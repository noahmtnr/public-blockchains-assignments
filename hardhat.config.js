require("@nomicfoundation/hardhat-toolbox");

const path = require('path')
const res = require('dotenv')
  .config({ path: path.resolve(__dirname,  '.env') });

// You may also use Alchemy.
const INFURA_KEY = process.env.INFURA_KEY;
const INFURA_URL = process.env.INFURA_GOERLI_API_URL;

const GOERLI_URL = `${INFURA_URL}${INFURA_KEY}`;

const METAMASK_1_PRIVATE_KEY = process.env.METAMASK_1_PRIVATE_KEY;
const METAMASK_2_PRIVATE_KEY = process.env.METAMASK_2_PRIVATE_KEY;

const LOCAL_HARDHAT_NET_URL = process.env.HARDHAT_URL;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "unima1",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [ METAMASK_1_PRIVATE_KEY ],
    },
    unima1: {
      url: process.env.NOT_UNIMA_URL_1,
      accounts: [ METAMASK_1_PRIVATE_KEY ],
    },
    unima2: {
      url: process.env.NOT_UNIMA_URL_2,
      accounts: [ METAMASK_2_PRIVATE_KEY ],
    },
    local: {
      url: LOCAL_HARDHAT_NET_URL,
      accounts:[ METAMASK_2_PRIVATE_KEY ],
    }
  },
  etherscan: {
    apiKey: "K9XI32I8PEIBI2PIRWDCD2U87NIXVEDX85",
  },
};
