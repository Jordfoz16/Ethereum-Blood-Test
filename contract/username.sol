pragma solidity ^0.4.25;

contract username {

    /*

    This contract is a test for mapping usernames to an address
    so that people dont need to remember there whole address

    */

    mapping (string => address) users;

    function createAccount(string username, address newAddress) public {
        users[username] = newAddress;
    }

    function getAddress(string username) public view returns (address) {
        return users[username];
    }
}
