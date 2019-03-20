pragma solidity ^0.5;
pragma experimental ABIEncoderV2;

contract Patients{

    /*
    Blood Array layout:
        Blood[0] = hemoglobin   // 115 - 165
        Blood[1] = whiteBlood   // 4 - 11
        Blood[2] = platelet     // 150 - 450
        Blood[3] = redBlood     // 38 - 58      (divid by 10)
        Blood[4] = haematocrit  // 37 - 47      (divide by 100)
        Blood[5] = MCV          // 76 - 98
        Blood[6] = MCH          // 27 - 32
        Blood[7] = MCHC         // 300 - 360
        Blood[8] = neutrophil   // 2 - 7
        Blood[9] = lymphocyte   // 1 - 4
        Blood[10] = monocyte    // 2 - 8        (divide by 10)
        Blood[11] = eosinophil  // 0 - 4        (divide by 10)
        Blood[12] = basophil    // 0 - 1        (divide by 10)
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

    mapping (address => PatientInfomation) patients;
    mapping (address => PatientsBloodInfomation[]) patientsBloodTest;

    //Adds a new patient into the contract
    function addPatient(address patientAddress, string memory gender, uint8 age, uint16 height, uint16 weight, string memory bloodType) public{
        patients[patientAddress] = PatientInfomation(gender, age, height, weight, bloodType,true, now);
    }

    //Adds the patients blood results to the contract
    function addPatientBloodResults(address patientAddress, uint8[13] memory bloodResults) public{
        patientsBloodTest[patientAddress].push(PatientsBloodInfomation(bloodResults, now));
    }

    //Changes the age of the patient, also added the time the age was added
    //this can be calculated in javascript to get an upto date age. 
    function changeAge(address patientAddress, uint8 newAge) public{
        patients[patientAddress].age = newAge;
        patients[patientAddress].timestamp = now;
    }

    //Changes the height of the patient
    function changeHeight(address patientAddress, uint16 newHeight) public{
        patients[patientAddress].height = newHeight;
    }

    //Changes the weight of the patient
    function changeWeight(address patientAddress, uint16 newWeight) public{
        patients[patientAddress].weight = newWeight;
    }

    function isPatient(address patientAddress) public view returns(bool){
        return patients[patientAddress].isPatient;
    }

    //Returns all infomation about the patient
    function getPatientInfomation(address patientAddress) public view returns(PatientInfomation memory){
        return patients[patientAddress];
    }

    //Returns all infomation about the patients blood results
    function getPatientsBloodResults(address patientAddress, uint index) public view returns(uint8[13] memory){
        return patientsBloodTest[patientAddress][index].bloodResults;
    }
    
    function getPatientsBloodResultsLength(address patientAddress) public view returns(uint){
        return patientsBloodTest[patientAddress].length;
    }
}
