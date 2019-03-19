pragma solidity ^0.5;

contract Privileges {

    mapping (address => bool) isPatient;
    mapping (address => bool) isDoctor;
    mapping (address => bool) isAdmin;

    //Makes the creator of the contract an admim
    constructor() public {
        isAdmin[msg.sender] = true;
    }

    //Modifier that requires the sender to be a patient
    modifier requirePatient(){
        require(
            isPatient[msg.sender] == true,
            "Minimum Privileges: Patient"
        );
        _;
    }

    //Modifier that requires the sender to be a doctor
    modifier requireDoctor(){
        require(
            isDoctor[msg.sender] == true;
            "Minimum Privileges: Doctors"
        );
        _;
    }

    //Modifier that requires the sender to be an admin
    modifier requireAdmin(){
        require(
            isAdmin[msg.sender] == true,
            "Minimum Privileges: Admin"
        );
        _;
    }

    modifier editPatientsRecords(uint patientsAddress){
        if(isDoctor[msg.sender]){
            if(isPatient[patientsAddress]){
                _;
            }
        }
    }

    //Transfers the admin privileges to another address
    function transferAdmin(address adminAddress) public requireAdmin{
        isAdmin[adminAddress] = true;
        isAdmin[msg.sender] = false;
    }

    function addAdmin(address adminAddress) public requireAdmin{
        isAdmin[adminAddress] = true;
    }

    function removeAdmin(address adminAddress) public requireAdmin{
        isAdmin[adminAddress] = false;
    }

    //Adds a new doctor to the contract
    function addDoctor(address doctorAddress) public requireAdmin{
        isDoctor[doctorAddress] = true;
    }

    //Remove a doctor from the contract
    function removeDoctor(address doctorAddress) public requireAdmin{
        isDoctor[doctorAddress] = false;
    }

    //Add a new patient to the contract
    function addPatient(address patientAddress) public requireDoctor{
        isPatient[patientAddress] = true;
    }


    function getPrivileges() public view returns (string memory){
        
        if(isPatient[msg.sender]){
            return "You are a patient";
        }
        
        if (isDoctor[msg.sender]){
            return "You are a doctor";
        }
        
        if (isAdmin[msg.sender]){
            return "You are a admin";
        }else{
            return "You are nothing";
        }
    }
}