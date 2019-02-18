var myArray = [];

var fromAddress = "0x33c9D9FB4B7576f9E3bc60Cf727f968106d72268";

$('#contract-form').submit(function(){
    event.preventDefault();

    myArray.push(new BigNumber($('#hemoglobin').val()));
    myArray.push(new BigNumber($('#whiteBlood').val()));
    myArray.push(new BigNumber($('#platelet').val()));
    myArray.push(new BigNumber($('#redBlood').val()));
    myArray.push(new BigNumber($('#haematocrit').val()));
    myArray.push(new BigNumber($('#MCV').val()));
    myArray.push(new BigNumber($('#MCH').val()));
    myArray.push(new BigNumber($('#MCHC').val()));
    myArray.push(new BigNumber($('#neutrophil').val()));
    myArray.push(new BigNumber($('#lymphocyte').val()));
    myArray.push(new BigNumber($('#monocyte').val()));
    myArray.push(new BigNumber($('#eosinophil').val()));
    myArray.push(new BigNumber($('#basophil').val()));


    bloodContract.methods.setBloodResult(myArray).send({from: fromAddress, gas:3000000},
        function(error, result){
            if(error){
                console.log(error);
            }else{
                console.log(result);
            }
        });

    myArray = [];
});

$('#results').click(function(){
    bloodContract.methods.getBloodResult().call({from: fromAddress},
        function(error, result){
            if(error){
                console.log(error);
            }else{
                console.log(result);
                $('#blockchainResult').text('Results: ' + result);
            }
        });
});