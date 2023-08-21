require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:  {
    compilers: [
      {version: "0.5.16"},
      {version: "0.7.6"},
      {version: "0.6.6"},
      {version: "0.6.12"},
      {version: "0.8.9"},
      {version: "0.8.13"}
    ]
  },
  networks:{
    testnet:{
      url:"https://base-goerli.gateway.tenderly.co",
      chainId: 84531,
      accounts:[
        "0x8dc2dd75e8f872b02492ad6f5da68daf5efd3f4492efacce5e0b184261bafd3f"
      ] 
    },
  },
  etherscan: {
    apiKey: {
     "base-goerli": "PLACEHOLDER_STRING"
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
         apiURL: "https://api-goerli.basescan.org/api",
         browserURL: "https://goerli.basescan.org"
        }
      }
    ]
  },
  
};
