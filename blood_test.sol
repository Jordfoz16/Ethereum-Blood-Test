pragma solidity ^0.4.25;

contract blood_test{
    
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
    
    mapping(address => uint[13]) private Blood;
    
    function setBloodResult (uint[13] bloodResults) public {
        Blood[msg.sender] = bloodResults;
    }
    
    function getBloodResult () public view returns (uint[13]){
        return Blood[msg.sender];
    }
    
}
