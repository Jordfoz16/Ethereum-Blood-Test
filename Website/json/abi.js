var abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
          "type": "uint8"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
    }
  ]