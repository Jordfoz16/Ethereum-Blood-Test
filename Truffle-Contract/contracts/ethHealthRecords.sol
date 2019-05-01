pragma solidity ^0.5;
pragma experimental ABIEncoderV2;

contract ethHealthRecords{
    
    /*
    Blood Array layout:
        Blood[0] = hemoglobin   // 115 - 165
        Blood[1] = White Blood   // 4 - 11
        Blood[2] = Platelet     // 150 - 450
        Blood[3] = Red Blood     // 38 - 58      (divid by 10)
        Blood[4] = Haematocrit  // 37 - 47      (divide by 100)
        Blood[5] = MCV          // 76 - 98
        Blood[6] = MCH          // 27 - 32
        Blood[7] = MCHC         // 300 - 360
        Blood[8] = Neutrophil   // 2 - 7
        Blood[9] = Lymphocyte   // 1 - 4
        Blood[10] = Monocyte    // 2 - 8        (divide by 10)
        Blood[11] = Eosinophil  // 0 - 4        (divide by 10)
        Blood[12] = Basophil    // 0 - 1        (divide by 10)
    */

    struct PatientInfomation{
        string gender;
        uint8 age;
        uint16 height;
        uint16 weight;
        string bloodType;
        bool isPatient;
        uint timestamp;
    }
    
    struct PatientsBloodInfomation{
        uint8[13] bloodResults;
        uint timestamp;
    }

    struct Comments{
        address doctorAddress;
        address patientAddress;
        string comment;
        uint timestamp;
    }

    mapping (address => bool) isDoctor;
    mapping (address => bool) isAdmin;

    mapping (address => PatientInfomation) patients;
    mapping (address => PatientsBloodInfomation[]) patientsBloodTest;

    mapping (address => Comments[]) doctorsComments;

    //Makes the creator of the contract an admim
    constructor() public {
        isAdmin[msg.sender] = true;
    }

    /*////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Modifier ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////*/

    //Modifier that requires the address to be a patient
    modifier requirePatient(){
        require(
            patients[msg.sender].isPatient,
            "Minimum Privileges: Patient"
        );
        _;
    }

    //Modifier that requires the sender to be a doctor
    modifier requireDoctor(){
        require(
            isDoctor[msg.sender] == true || isAdmin[msg.sender] == true,
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

    modifier editPatientsRecords(address patientAddress){
        if(isDoctor[msg.sender]){
            if(patients[patientAddress].isPatient){
                _;
            }
        }
    }

    /*////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Patients ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////*/

    //Adds a new patient into the contract
    function addPatient(address patientAddress, string memory gender, uint8 age, uint16 height, uint16 weight, string memory bloodType) public requireDoctor(){
        patients[patientAddress] = PatientInfomation(gender, age, height, weight, bloodType,true, now);
    }

    //Adds the patients blood results to the contract
    function addPatientBloodResults(address patientAddress, uint8[13] memory bloodResults) public requireDoctor(){
        patientsBloodTest[patientAddress].push(PatientsBloodInfomation(bloodResults, now));
    }

    //Changes the age of the patient, also added the time the age was added
    //this can be calculated in javascript to get an upto date age. 
    function changeAge(address patientAddress, uint8 newAge) public requireDoctor(){
        patients[patientAddress].age = newAge;
        patients[patientAddress].timestamp = now;
    }

    //Changes the height of the patient
    function changeHeight(address patientAddress, uint16 newHeight) public requireDoctor(){
        patients[patientAddress].height = newHeight;
    }

    //Changes the weight of the patient
    function changeWeight(address patientAddress, uint16 newWeight) public requireDoctor(){
        patients[patientAddress].weight = newWeight;
    }

    function isPatient(address patientAddress) public view returns(bool){
        return patients[patientAddress].isPatient;
    }
    
    //Returns all infomation about the patient
    function getPatientInfomation() public view requirePatient returns(PatientInfomation memory){
        return patients[msg.sender];
    }
    
    //Returns all infomation about the patient
    function getPatientInfomation(address patientAddress) public view returns(PatientInfomation memory){
        return patients[patientAddress];
    }

    //Returns all infomation about the patients blood results
    function getPatientsBloodResults(uint index) public view requirePatient returns(uint8[13] memory){
        return patientsBloodTest[msg.sender][index].bloodResults;
    }

    //Returns all infomation about the patients blood results
    function getPatientsBloodResults(address patientAddress, uint8 index) public view returns(uint8[13] memory){
        return patientsBloodTest[patientAddress][index].bloodResults;
    }
    
    //Gets the length of the array for blood results
    function getPatientsBloodResultsLength() public view returns(uint){
        return patientsBloodTest[msg.sender].length;
    }

    //Gets the length of the array for blood results
    function getPatientsBloodResultsLength(address patientAddress) public view returns(uint){
        return patientsBloodTest[patientAddress].length;
    }

    /*////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Privileges /////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////*/

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

    function getPrivileges() public view returns (string memory){

        if(isAdmin[msg.sender]){
            return "Admin";
        }else if(isDoctor[msg.sender]){
            return "Doctor";
        }else if(patients[msg.sender].isPatient){
            return "Patient";
        }else{
            return "Nothing";
        }
    }

    /*////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Comments ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////*/

    //Adds a new comment to the contract
    function addComment(address patientAddress, string memory comment) public {
        Comments memory newComment = Comments(msg.sender, patientAddress, comment, now);

        doctorsComments[patientAddress].push(newComment);
    }
    
    //Gets all of the comments for a patient
    function getComment(address patientAddress) public view returns(Comments[] memory){
        return doctorsComments[patientAddress];
    }
}
