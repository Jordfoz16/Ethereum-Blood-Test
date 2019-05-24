var contractAddress = "0x8050964c6A1512a0221c2efDfef46D2E4E27e071";

var smartContract;
var account;
var patientsAccount;

var bloodResultsLength = 0;
var currentBloodResults = 0;

function startDapp() {

    setTimeout(init(), 500);

    getAccessLevel();
}

function init() {
    console.log("using web3 version: " + window.web3.version)
    console.log("setting up contract");

    smartContract = new web3.eth.Contract(abi, contractAddress);
    console.log("done!!");

    account = web3.eth.accounts.currentProvider.selectedAddress;
}

function getAccessLevel() {
    smartContract.methods.getPrivileges().call({ from: account },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
                $('#accessLevel').text("Access Level: " + result);
            }
        });
}

function loadPatientInfomation() {

    smartContract.methods.getPatientInfomation(patientsAccount).call({ from: account },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
                if (result[0] == 'M' || result[0] == 'Male') {
                    $('#patientsGender').val("Male");
                } else if (result[0] == 'F' || result[0] == 'Female') {
                    $('#patientsGender').val("Female");
                } else {
                    $('#patientsGender').val("Other");
                }

                $('#patientsAge').val(result[1]);
                $('#patientsHeight').val(result[2] + " cm");
                $('#patientsWeight').val(result[3] + " Ib");
                $('#patientsBloodType').val(result[4]);
            }
        }
    );
}

function loadPatientBloodResults() {

    smartContract.methods.getPatientsBloodResultsLength(patientsAccount).call({ from: account },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {

                if (result < 0) return;

                bloodResultsLength = result;

                $('li').remove('.removeable');
                for (i = result; i > 0; i--) {
                    if (i == 1) {
                        $('#page-items').after('<li id="page' + i + '" class="page-item removeable active"><a class="page-link">' + i + '</a></li>');
                    } else {
                        $('#page-items').after('<li id="page' + i + '" class="page-item removeable"><a class="page-link">' + i + '</a></li>');
                    }
                }

                smartContract.methods.getPatientsBloodResults(patientsAccount, 0).call({ from: account, gas: 300000 },
                    function (error, result) {
                        if (error) {
                            console.log("No Data");
                        } else {

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
            }
        });
}

function loadPatientBloodResultsIndex(index) {
    smartContract.methods.getPatientsBloodResults(patientsAccount, index).call({ from: account, gas: 300000 },
        function (error, result) {
            if (error) {
                console.log("No Data");
            } else {
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
}

function loadDoctorsComments() {
    smartContract.methods.getComment(patientsAccount).call({ from: account },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {

                $('.removeableComment').remove();

                for (i = 0; i < result.length; i++) {
                    $('#comments').after('<div class="col-12">\
                    <div class="card removeableComment mt-3">\
                        <div class="card-header">' + timeConverter(result[i][3]) + '</div>\
                        <div class="card-body">\
                            <h5 class="card-title">Comment:</h5>\
                            <p class="card-text">' + result[i][2] + '</p>\
                            <small class="mt-2 text-muted">Doctors Address: ' + result[i][0] + '</small>\
                        </div>\
                    </div>\
                </div>');
                }
            }
        }
    );
}

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

$('#patientButton').click(function (e) {
    e.preventDefault();

    //Get the patients address from the textbox and loads values
    patientsAccount = $('#patientsAddress').val();

    loadPatientInfomation();
    loadPatientBloodResults();
    loadDoctorsComments();
});

$('#updateInfomation').click(function (e) {
    e.preventDefault();
    var gender = $('#patientsGender').val();
    var age = $('#patientsAge').val();
    var height = $('#patientsHeight').val();
    var weight = $('#patientsWeight').val();
    var bloodType = $('#patientsBloodType').val();

    height = parseInt(height);
    weight = parseInt(weight);

    smartContract.methods.addPatient(patientsAccount, gender, age, height, weight, bloodType).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                $('#patientsGender').addClass("is-invalid");
                $('#patientsAge').addClass("is-invalid");
                $('#patientsHeight').addClass("is-invalid");
                $('#patientsWeight').addClass("is-invalid");
                $('#patientsBloodType').addClass("is-invalid");
            } else {
                console.log(result);
            }
    });

    console.log("Timestamp: " + Date.now());
});

$('#updateBloodResults').click(function (e) {
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

    smartContract.methods.addPatientBloodResults(patientsAccount, myArray).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                $('#patientsHemoglobin').addClass("is-invalid");
                $('#patientsWhiteBlood').addClass("is-invalid");
                $('#patientsPlatelet').addClass("is-invalid");
                $('#patientsRedBlood').addClass("is-invalid");
                $('#patientsHaematocrit').addClass("is-invalid");
                $('#patientsMCV').addClass("is-invalid");
                $('#patientsMCH').addClass("is-invalid");
                $('#patientsMCHC').addClass("is-invalid");
                $('#patientsNeutrophil').addClass("is-invalid");
                $('#patientsLymphocyte').addClass("is-invalid");
                $('#patientsMonocyte').addClass("is-invalid");
                $('#patientsEosinophil').addClass("is-invalid");
                $('#patientsBasophil').addClass("is-invalid");
            } else {
                console.log(result);
            }
    });

    console.log("Timestamp: " + Date.now());
});

$('#addComment').click(function () {

    var comment = $('#commentInput').val();

    smartContract.methods.addComment(patientsAccount, comment).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
            }
        }
    );

    console.log("Timestamp: " + Date.now());
});

$('#closeComment').click(function () {
    loadDoctorsComments();
});

$('#nextBlood').click(function (e) {
    e.preventDefault();

    if (bloodResultsLength > 0) {
        if (currentBloodResults < bloodResultsLength - 1) {
            currentBloodResults++;
            setActive(currentBloodResults);
            loadPatientBloodResultsIndex(currentBloodResults);
        }
    }
});

$('#prevBlood').click(function (e) {
    e.preventDefault();

    if (bloodResultsLength > 0) {
        if (currentBloodResults > 0) {
            currentBloodResults--;
            setActive(currentBloodResults);
            loadPatientBloodResultsIndex(currentBloodResults);
        }
    }
});

$('#addDoctor').click(function (e) {
    e.preventDefault();

    var newAddress = $('#addDoctorInput').val();

    smartContract.methods.addDoctor(newAddress).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                $('#addDoctorInput').addClass("is-invalid");
            } else {
                $('#addDoctorInput').addClass("is-valid");
            }
        }
    );
});

$('#removeDoctor').click(function (e) {
    e.preventDefault();

    var removeAddress = $('#removeDoctorInput').val();

    smartContract.methods.removeDoctor(removeAddress).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                $('#removeDoctorInput').addClass("is-invalid");
            } else {
                $('#removeDoctorInput').addClass("is-valid");
            }
        }
    );
});


$('#transferAdmin').click(function (e) {
    e.preventDefault();

    var removeAddress = $('#transferAdminInput').val();

    smartContract.methods.transferAdmin(removeAddress).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                $('#transferAdminInput').addClass("is-invalid");
            } else {
                $('#transferAdminInput').addClass("is-valid");
            }
        }
    );
});

$('#addAdmin').click(function (e) {
    e.preventDefault();

    var removeAddress = $('#addAdminInput').val();

    smartContract.methods.addAdmin(removeAddress).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                $('#addAdminInput').addClass("is-invalid");
            } else {
                $('#addAdminInput').addClass("is-valid");
            }
        }
    );
});

$('#removeAdmin').click(function (e) {
    e.preventDefault();

    var removeAddress = $('#removeAdminInput').val();

    smartContract.methods.removeAdmin(removeAddress).send({ from: account, gas: 3000000 },
        function (error, result) {
            if (error) {
                $('#removeAdminInput').addClass("is-invalid");
            } else {
                $('#removeAdminInput').addClass("is-valid");
            }
        }
    );
});

function setActive(pageNumber) {

    var activeTag = "#page" + (pageNumber + 1);

    for (i = 1; i <= bloodResultsLength; i++) {
        var tag = "#page" + i;
        $(tag).removeClass("active");
    }

    $(activeTag).addClass("active");
}

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        console.log("Using MetaMask");
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */ });
        } catch (error) {
            // User denied account access...
        }

        startDapp();
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */ });
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});