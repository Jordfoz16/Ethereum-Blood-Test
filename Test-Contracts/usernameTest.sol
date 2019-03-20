pragma solidity ^0.5;

contract usernameTest {

    /*

    This contract is a test for mapping usernames to an address
    so that people dont need to remember there whole address

    */

    mapping (string => address) users;

    function createAccount(string memory username, address newAddress) public {
        users[username] = newAddress;
    }

    function getAddress(string memory username) public view returns (address) {
        return users[username];
    }
}