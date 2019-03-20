pragma solidity ^0.5;
pragma experimental ABIEncoderV2;

contract CommentsContract{

    struct Comments{
        address doctorAddress;
        address patientAddress;
        string comment;
        uint timestamp;
    }

    mapping (address => Comments[]) doctorsComments;

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