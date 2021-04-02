require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give clog tackle food green razor situate come gesture hat army giant'; 
let testAccounts = [
"0x9573e37c3c2f143050076d89bb060afa7855dfd6bcba94a6b15acde8c7302566",
"0x6fb24c67ef25a2934c620381bc677f7a7c8d6be39ca452ca5ce5d3149136d9bd",
"0xb136426c687899aea60fe3bbc84579875cde2a32192f6c932e231fb9bf4e9875",
"0xd7bb3778abfd5be6152b78bf2609a97626a0078b92177b4965b5f3112dc535bb",
"0x9a9595d14f5c16a89a5534338493ce9370cce662f357fc1eeda2284c54d4014e",
"0x093b6e5c7e890a544680c431001615efee2d1d17b161b6c766eff28965da4b12",
"0xb88327a81d68f5ab52c7546b84bf64e82d1d602f2beb77d31a25584f0f51dff8",
"0x4ef91fa9d864f670d876c1124397fd61f39f61fc180531234b4c20c03dd64a4f",
"0xeb1864f3bfdfd05a94207b8d077f09ed858471a77a62afce3c9043e49366c7ab",
"0x88b362567b6ce4066682ebafd622180bec4bda23c8efeecc64e323e31cf8c0e3"
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

