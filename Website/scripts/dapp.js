var contractAddress = "0x36CC9b848452d9Cf9621d8128876EBB84Ca66319";

// if ( typeof web3 != 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
//   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// }

// var version = web3.version;
// console.log("using web3 version: " + version);

// var bloodContract = new web3.eth.Contract(abi, contractAddress);

var smartContract;
var account;
var patientsAccount;

function startDapp() {
    
    setTimeout(init(), 500);

    getAccessLevel();
}

function init(){
    console.log("using web3 version: " + window.web3.version)
    console.log("setting up contract");

    smartContract = new web3.eth.Contract(abi, contractAddress);
    console.log("done!!");
    
    account = web3.eth.accounts.currentProvider.selectedAddress;
}

function getAccessLevel(){
    smartContract.methods.getPrivileges().call({from: account},
        function (error, result){
            if(error){
                console.log(error);
            }else{
                $('#accessLevel').text("Access Level: " + result);
            }
        });
}

$('#patientButton').click(function(e){
    e.preventDefault();

    //Get the patients address from the textbox and loads values
    patientsAccount = $('#patientsAddress').val();

    smartContract.methods.getPatientInfomation(patientsAccount).call({from: account},
        function (error, result){
            if(error){
                console.log(error);
            }else{
                if(result[0] == 'M' || result[0] == 'Male'){
                    $('#patientsGender').val("Male");
                }else if (result[0] == 'F' || result[0] == 'Female'){
                    $('#patientsGender').val("Female");
                }else{
                    $('#patientsGender').val("Other");
                }
                
                $('#patientsAge').val(result[1]);
                $('#patientsHeight').val(result[2] + " cm");
                $('#patientsWeight').val(result[3] + " Ib");
                $('#patientsBloodType').val(result[4]);
            }
        }
    );

    // smartContract.methods.getComment(patientsAccount).call({from: account},
    //     function (error, result){
    //         if(error){
    //             console.log(error);
    //         }else{
    //             if(result[0] == 'M'){
    //                 $('#patientsGender').val("Male");
    //             }else if (result[0] == 'F'){
    //                 ('#patientsGender').val("Female");
    //             }else{
    //                 ('#patientsGender').val("Other");
    //             }
                
    //             $('#patientsAge').val(result[1]);
    //             $('#patientsHeight').val(result[2] + " cm");
    //             $('#patientsWeight').val(result[3] + " Ib");
    //             $('#patientsBloodType').val(result[4]);
    //         }
    //     }
    // );

    var bloodResultsArrayLength;

    smartContract.methods.getPatientsBloodResultsLength(patientsAccount).call({from: account},
        function (error, result){
            if(error){
                console.log(error);
            }else{
                bloodResultsArrayLength = 1;
                console.log(bloodResultsArrayLength);
            }
        });
    
    
    smartContract.methods.getPatientsBloodResults(patientsAccount, parseInt(bloodResultsArrayLength)).call({from: account},
        function (error, result){
            if(error){
                console.log("No Data");
            }else{
                
                $('#patientsHemoglobin').val(result[0]);
                $('#patientsWhiteBlood').val(result[1]);
                $('#patientsPlatelet').val(result[2]);
                $('#patientsRedBlood').val(result[3]);
                $('#patientsHaematocrit').val(result[4]);
                $('#patientsMCV').val(result[5]);
                $('#patientsMCH').val(result[6]);
                $('#patientsMCHC').val(result[7]);
                $('#patientsNeutrophil').val(result[8]);
                $('#patientsLymphocyte').val(result[9]);
                $('#patientsMonocyte').val(result[10]);
                $('#patientsEosinophil').val(result[11]);
                $('#patientsBasophil').val(result[12]);

            }
        }
    );
});

$('#updateInfomation').click(function(e){
    e.preventDefault();
    var gender = $('#patientsGender').val();
    var age = $('#patientsAge').val();
    var height = $('#patientsHeight').val();
    var weight = $('#patientsWeight').val();
    var bloodType = $('#patientsBloodType').val();

    height = parseInt(height);
    weight = parseInt(weight);

    smartContract.methods.addPatient(patientsAccount, gender, age, height, weight, bloodType).send({from: account, gas: 3000000},
        function (error, result){
            if(error){
                console.log(error);
            }else{
                console.log(result);
            }
        });
});

$('#updateBloodResults').click(function(e){
    e.preventDefault();

    var myArray = [];

    myArray.push(($('#patientsHemoglobin').val()));
    myArray.push(($('#patientsWhiteBlood').val()));
    myArray.push(($('#patientsPlatelet').val()));
    myArray.push(($('#patientsRedBlood').val()));
    myArray.push(($('#patientsHaematocrit').val()));
    myArray.push(($('#patientsMCV').val()));
    myArray.push(($('#patientsMCH').val()));
    myArray.push(($('#patientsMCHC').val()));
    myArray.push(($('#patientsNeutrophil').val()));
    myArray.push(($('#patientsLymphocyte').val()));
    myArray.push(($('#patientsMonocyte').val()));
    myArray.push(($('#patientsEosinophil').val()));
    myArray.push(($('#patientsBasophil').val()));

    console.log(myArray);

    smartContract.methods.addPatientBloodResults(patientsAccount, myArray).send({from: account, gas: 3000000}, 
        function(error, result){
        if(error){
            console.log(error);
        }else{
            console.log(result);
        }
    });

});

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        console.log("Using MetaMask");
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }

        startDapp();
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});