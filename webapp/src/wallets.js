import { MetaMaskSDK } from '@metamask/sdk';

export function MetaMask(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const MMSDK = new MetaMaskSDK();
        const ethereum = MMSDK.getProvider();
        return ethereum;
    }else{
        alert("Please install MetaMask to use this dapp");
    }
}

export function XDC(){}
export function Ace(){}