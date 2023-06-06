# Smart contract deployment and mining dapp of derbyverse nft project..

This project has been demonstrates a basic derbyverse project. It comes with a ERC721 contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Requirements / dependencies

An all-in-one solution for derbyverse smart contact with  dapp mint . Build, test and deploy your smart contract, together with a totally integrated DAPP within a simple yet powerful workspace.


## Main features
- whitelist support with customizable list size (using a Merkle Tree for verification)
- automated contract verification through Etherscan
- simple CLI commands that guide you through all the sale steps (whitelist, pre-sale, public sale)
- built as a Hardhat project with TypeScript support for a better development experience
- includes a fully-featured minting DAPP (React + TypeScript + SCSS + Webpack)
- full support for contract interaction through Etherscan, for all the users that do not trust custom DAPPs (including the `whitelistMint(...)` function)
- customizable minting DAPP (from basic branding to complete customization)
- 

![image](https://github.com/hassanalobady/Derbyverse-NFT/assets/19050553/05bc43ad-1180-451c-8369-88982e2e1339)

## Requirements

### Software
- [Visual Studio Code](https://code.visualstudio.com/) (with the [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension)
- [NodeJs](https://nodejs.org/) (with the [Yarn package manager](https://yarnpkg.com/getting-started/install))

### Services
- Etherscan free API key _(optional: used for the automated contract verificiation, as well as retrieving the current values for gas cost estimation)_
- Infura free basic plan or higher _(optional: used by the CLI commands in order to perform operations on real blockchains, you can skip this if you deploy and manage your contract manually)_
- Coin Market Cap free API key _(optional: used for retrieving the current ETH price for gas cost estimation in USD)_
