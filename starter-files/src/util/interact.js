require('dotenv').config();

const alchemyUrl = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(alchemyUrl);

const contractABI = require('../contract-abi.json');
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const helloWorldContract = new web3.eth.Contract(contractABI, contractAddress);


export const loadCurrentMessage = async () => {
	const message = await helloWorldContract.methods.message().call();
	return message;
};

export const connectWallet = async () => {
	if (window.ethereum) {
		try {
			const addressList = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			return {
				status: "👆🏽 Write a message in the text-field above.",
				address: addressList[0],
			};
		} catch (err) {
			return {
				address: "",
        status: "😥 " + err.message,
			};
		}
	} else {
		return {
			address: "",
			status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
		};
	}
};

export const getCurrentWalletConnected = async () => {
	if (window.ethereum) {
		try {
			const addressList = await window.ethereum.request({
				method: "eth_accounts"
			});

			if (addressList.length > 0) {
				return {
					status: "👆🏽 Write a message in the text-field above.",
					address: addressList[0],
				};
			} else {
				return {
					status: "🦊 Connect to Metamask using the top right button.",
					address: "",
				};
			}
		} catch (err) {
			return {
				address: "",
        status: "😥 " + err.message,
			};
		}
	} else {
		return {
			address: "",
			status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
		};
	}

};

export const updateMessage = async (address, message) => {

};
