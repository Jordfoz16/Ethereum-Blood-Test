pragma solidity ^0.5;

contract doctors {

    /*
    This contract is a test for using modifier's to prevent everyone
    from editing data inside the contract
    */

    mapping (address => bool) isDoctor;

    constructor() public {
        isDoctor[msg.sender] = true;
    }

    modifier onlyDoctors() {
        require(
            isDoctor[msg.sender] == true,
            "Only Doctors Can Call"
        );
        _;
    }

    function createDoctor(address newDoctor) public onlyDoctors{
        isDoctor[newDoctor] = true;
    }

    function removeDoctor(address newDoctor) public onlyDoctors{
        isDoctor[newDoctor] = false;
    }

    function getDoctor() public view returns (bool) {
        return isDoctor[msg.sender];
    }
}