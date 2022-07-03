require('dotenv').config();

const alchemyUrl = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(alchemyUrl);

const contractABI = require('../contract-abi.json');
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const helloWorldContract = new web3.eth.Contract(contractABI, contractAddress);


export const loadCurrentMessage = async () => { 
  
};

export const connectWallet = async () => {
  
};

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};
