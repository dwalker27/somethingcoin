const { Blockchain, Transaction } = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('89796f6e9a44726cbc199619093d837052279c6d45b436b1f1e09e88402c80bf');
const myWalletAddress = myKey.getPublic('hex');

let somethingCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address1', 10);
tx1.signTransaction(myKey);
somethingCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
somethingCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of ' + myWalletAddress + ' is', somethingCoin.getBalanceOfAddress(myWalletAddress));
console.log('\n Balance of address1 is', somethingCoin.getBalanceOfAddress('address1'));

console.log(somethingCoin.getChain()[1]);