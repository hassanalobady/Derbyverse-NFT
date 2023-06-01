import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DerbyVerse',
  tokenName: 'Derby Verse',
  tokenSymbol: 'DV',
  hiddenMetadataUri: 'ipfs://Qmc15ejZcjthih4RN5nMZahGTHHjt4KWXz6WdggxATUieT/hidden.json',
  maxSupply: 5,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xB10758e3B6e6065Cf889e1b0cF5B6e93b164303F',
  openSeaSlug: 'Derby Verse',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
