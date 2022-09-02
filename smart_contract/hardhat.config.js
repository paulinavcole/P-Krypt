//https://eth-goerli.g.alchemy.com/v2/3E4cLBPFhVx0NPKbwwWRUX2Bu838307R

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/3E4cLBPFhVx0NPKbwwWRUX2Bu838307R',
      accounts: [ '56fefcc6ff18721ff616f232ed77251d9f1b5053437eb3eea53bff803673c31b' ]
    }
  }
}