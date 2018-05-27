const HDWalletProvider = require('truffle-hdwallet-provider');

require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
const token = process.env.INFURA_TOKEN;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${token}`),
      network_id: 3
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/${token}`),
      network_id: 1
    }
  }
};
