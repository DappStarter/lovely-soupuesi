require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hockey knife off suggest name rifle saddle puppy install clog surge gasp'; 
let testAccounts = [
"0x236c7a8aa96a6bad61f6b83af129b572f72026481e7ea8eea52c45a2f55a48be",
"0xe0f5ef4067a565a58dfd75c1001b012433621000ec95b760d2f2c8af0727c25f",
"0x7b14ecabd70b94d948f04df3030eae855ea22b82666156dc8c9d46e83f7a88a2",
"0x2815e3afb2a652fe81a836d8bf1f19212894fedbf5cb9fb6e8ff28a1978ceb1a",
"0xd15bb012272875dde5f35651076044934f24ba0e3df5d191e5ed3ce43f85a31e",
"0xdeefac00929ff7974ff7d9558b7e3b222913d8f02b02d85ecaad7b7e6cf787c9",
"0x88e451aa440961434916d9574a1db8b8c5aa92a0ca898217976feb3b3451569e",
"0xaf6af5497382bca99746328cfb97cb062b9223677f2c19b062f62ff54880d318",
"0x990ddacd5234ffd0e02a3a46341a64093ddb2c9902462b5d8a1264ad33080d97",
"0x06cf90461f99d555f78a4815791b69ad2094ce26447865c9d888fcd3b6ffd8d6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

