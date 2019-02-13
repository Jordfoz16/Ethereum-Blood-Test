var contractAddress = "0x300dde96bf83a780aC227EAC29697b77055b0A4B";

if ( typeof web3 != 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

var version = web3.version;
console.log("using web3 version: " + version);

var bloodContract = new web3.eth.Contract(abi, contractAddress);