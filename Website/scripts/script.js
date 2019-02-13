var myArray = "1, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13";

var fromAddress = "0x33c9D9FB4B7576f9E3bc60Cf727f968106d72268";

var testArray = [new BigNumber("1"), new BigNumber("2"), new BigNumber("3"), new BigNumber("4"), new BigNumber("5"), new BigNumber("6"), new BigNumber("7"), new BigNumber("8"), new BigNumber("9"), new BigNumber("10"), new BigNumber("11"), new BigNumber("12"), new BigNumber("13")];

//var testArray = [new BigNumber("1"), new BigNumber("200")];

$('#contract-form').submit(function(){
    event.preventDefault();
    bloodContract.methods.setBloodResult(testArray).send({from: fromAddress, gas:3000000},
        function(error, result){
            if(error){
                console.log(error);
            }else{
                console.log(result);
            }
        });
});

$('#results').click(function(){
    bloodContract.methods.getBloodResult().call({from: fromAddress},
        function(error, result){
            if(error){
                console.log(error);
            }else{
                console.log(result);
            }
        });
});