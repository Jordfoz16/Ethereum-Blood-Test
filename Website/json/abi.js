var abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        },
        {
          "name": "gender",
          "type": "string"
        },
        {
          "name": "age",
          "type": "uint8"
        },
        {
          "name": "height",
          "type": "uint16"
        },
        {
          "name": "weight",
          "type": "uint16"
        },
        {
          "name": "bloodType",
          "type": "string"
        }
      ],
      "name": "addPatient",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8f51c43c"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        },
        {
          "name": "bloodResults",
          "type": "uint8[13]"
        }
      ],
      "name": "addPatientBloodResults",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x49e51581"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        },
        {
          "name": "newAge",
          "type": "uint8"
        }
      ],
      "name": "changeAge",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x35c8fdc3"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        },
        {
          "name": "newHeight",
          "type": "uint16"
        }
      ],
      "name": "changeHeight",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe58420ea"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        },
        {
          "name": "newWeight",
          "type": "uint16"
        }
      ],
      "name": "changeWeight",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xab991cac"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        }
      ],
      "name": "isPatient",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8f9c79ed"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPatientInfomation",
      "outputs": [
        {
          "components": [
            {
              "name": "gender",
              "type": "string"
            },
            {
              "name": "age",
              "type": "uint8"
            },
            {
              "name": "height",
              "type": "uint16"
            },
            {
              "name": "weight",
              "type": "uint16"
            },
            {
              "name": "bloodType",
              "type": "string"
            },
            {
              "name": "isPatient",
              "type": "bool"
            },
            {
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0860e6e3"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        }
      ],
      "name": "getPatientInfomation",
      "outputs": [
        {
          "components": [
            {
              "name": "gender",
              "type": "string"
            },
            {
              "name": "age",
              "type": "uint8"
            },
            {
              "name": "height",
              "type": "uint16"
            },
            {
              "name": "weight",
              "type": "uint16"
            },
            {
              "name": "bloodType",
              "type": "string"
            },
            {
              "name": "isPatient",
              "type": "bool"
            },
            {
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xae9b235b"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getPatientsBloodResults",
      "outputs": [
        {
          "name": "",
          "type": "uint8[13]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x32dfda59"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getPatientsBloodResults",
      "outputs": [
        {
          "name": "",
          "type": "uint8[13]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf361af73"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        }
      ],
      "name": "getPatientsBloodResultsLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x72f8ae9c"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPatientsBloodResultsLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xa9436649"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "adminAddress",
          "type": "address"
        }
      ],
      "name": "transferAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x75829def"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "adminAddress",
          "type": "address"
        }
      ],
      "name": "addAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x70480275"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "adminAddress",
          "type": "address"
        }
      ],
      "name": "removeAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x1785f53c"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "doctorAddress",
          "type": "address"
        }
      ],
      "name": "addDoctor",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4780468f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "doctorAddress",
          "type": "address"
        }
      ],
      "name": "removeDoctor",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x98fc90e9"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPrivileges",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x357b39e1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        },
        {
          "name": "comment",
          "type": "string"
        }
      ],
      "name": "addComment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe2005b98"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "patientAddress",
          "type": "address"
        }
      ],
      "name": "getComment",
      "outputs": [
        {
          "components": [
            {
              "name": "doctorAddress",
              "type": "address"
            },
            {
              "name": "patientAddress",
              "type": "address"
            },
            {
              "name": "comment",
              "type": "string"
            },
            {
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf6bb0cf1"
    }
  ]