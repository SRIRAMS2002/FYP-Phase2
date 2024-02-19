require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/VTgy855PxtGFkltc539dj4hyEPmHG51g',
      accounts: ['32b3c252807320b1f497d41a2430f2a83e2be0d22f2fda9718848243fff1fe8b'],
    },
  },
};