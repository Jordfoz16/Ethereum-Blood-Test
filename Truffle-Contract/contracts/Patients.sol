pragma solidity ^0.5;

contract Patients {

    string gender;
    uint8 age;
    uint16 height;
    uint16 weight;
    string bloodType;

    uint ageEntered;

    //Changes the age of the patient, also added the time the age was added
    //this can be calculated in javascript to get an upto date age. 
    function changeAge(uint8 newAge) public{
        age = newAge;
        ageEntered = now;
    }

    //Changes the height of the patient
    function changeHeight(uint16 newHeight) public{
        height = newHeight;
    }

    //Changes the weight of the patient
    function changeWeight(uint16 newWeight) public{
        weight = newWeight;
    }
}