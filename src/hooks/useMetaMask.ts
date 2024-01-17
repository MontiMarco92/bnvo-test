import { useEffect, useState } from 'react';

export const useMetaMask = () => {
	const [isConnected, setIsConnected] = useState(false);
	const [connecting, setConnecting] = useState(false);

	const connectMM = async () => {
		if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
			try {
				setConnecting(true);
				const accounts = await window.ethereum.request({
					method: 'eth_requestAccounts',
				});
				setIsConnected(true);
				setConnecting(false);
			} catch (err) {
				console.error(err);
			}
		} else {
			/* MetaMask is not installed */
			console.log('Please install MetaMask');
		}
	};

	const getConnectedWallet = async () => {
		if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
			try {
				const accounts = (await window.ethereum.request({
					method: 'eth_accounts',
				})) as [string];
				if (accounts?.length > 0) {
					setIsConnected(true);
				} else {
					console.log('Connect to MetaMask using the Connect button');
					setIsConnected(false);
				}
			} catch (err) {
				console.error(err);
			}
		} else {
			/* MetaMask is not installed */
			console.log('Please install MetaMask');
		}
	};

	const addWalletListener = async () => {
		if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
			window.ethereum.on('accountsChanged', (accounts: any) => {
				setConnecting(true);
				if (accounts?.length == 0) setIsConnected(false);
				setConnecting(false);
			});
		} else {
			/* MetaMask is not installed */
			console.log('Please install MetaMask');
		}
	};

	useEffect(() => {
		getConnectedWallet();
		addWalletListener();
	}, []);

	return { isConnected, connecting, connectMM };
};
