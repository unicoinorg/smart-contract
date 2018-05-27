# unicoin-smart-contract

> 🦄 Unicoin ERC20 Token Smart Contract

[![Build Status](https://travis-ci.com/unicoinorg/smart-contract.svg?branch=master)](https://travis-ci.com/unicoinorg/smart-contract)

## Dev

### Compile

```
$ yarn build
```

### Test

Run a local Ethereum testnet:

```
$ yarn ethereum
```

Then start the tests in a new session:

```
$ yarn test
```

The tests will automatically connect to the local testnet.

### Deploy Locally

Run a local Ethereum testnet:

```
$ yarn ethereum
```

Then start a new session and deploy the smart contract to your local testnet:

```
$ deploy:local
```

You can now connect an Ethereum client such as MetaMask to your local testnet at `http://localhost:8545` and interact with your smart contract.

## Deploy

Create a mnemonic seed and an [Infura](infura.io) API key. Add them to a `.env` file in the root of this repository:

```
MNEMONIC="south rookie tag unhappy hurt gate ability include excess range cake sunset"
INFURA_TOKEN="9NdhEXkpSFjE4DSBwX3s"
```

### Deploy to Testnet

Deploy the smart contract to the Ethereum Ropsten test network:

```
$ deploy:testnet
```

> **Tip:** You will need to obtain some free testnet Ether from a faucet before you can deploy.

### Deploy to Mainnet

Deploy the smart contract to the main Ethereum mainnet:

```
$ deploy:testnet
```

> **Warning:** Deployment to mainnet will pay gas costs from the first address derived from your mnemonic.

## License

MIT © Luke Childs
