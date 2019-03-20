var fromAddress = "0x33c9D9FB4B7576f9E3bc60Cf727f968106d72268";

var elements = {
    "name": ["Hemoglobin", "White Blood", "Platelet", "Red Blood", "Haematocrit", "MCV", "MCH", "MCHC", "Neutrophil", "Lymphocyte", "Monocyte", "Eosinophil", "Basophil"],
    "id": ["hemoglobin", "whiteBlood", "platelet", "redBlood", "haematocrit", "MCV", "MCH", "MCHC", "neutrophil", "lymphocyte", "monocyte", "eosinophil", "basophil"]
}

loadWebsite();

function loadWebsite() {
    for (var i = 0; i < elements.id.length; i++) {
        $('#contract-form').before('<div class="col-sm-12"> \
                                        <div class="form-group row"> \
                                            <label for="' + elements.id[i] + '" class="col-sm-4 col-form-label">' + elements.name[i] + '</label> \
                                            <input type="text" class="form-control col-sm-8" name="' + elements.id[i] + '" id="' + elements.id[i] + '"> \
                                        </div>\
                                    </div>');
    }
}

$('#addressButton').click(function(){
    fromAddress = $('#userAddress').val();
    console.log(fromAddress);
    
});

$('#saveChanges').click(function () {
    var myArray = [];
    event.preventDefault();

    for (var i = 0; i < elements.id.length; i++) {
        var tag = '#' + elements.id[i];
        myArray.push(new BigNumber($(tag).val()));
    }    

    bloodContract.methods.setBloodResult(myArray).send({ from: fromAddress, gas: 3000000 },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        });
});

$('#results').click(function () {
    bloodContract.methods.getBloodResult().call({ from: fromAddress },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
                $('#blockchainResult').text('Results: ' + result);
            }
        });
});