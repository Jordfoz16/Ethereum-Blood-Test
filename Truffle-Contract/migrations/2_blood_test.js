var BloodTest = artifacts.require("./ethHealthRecords.sol");

module.exports = function(deployer) {
  deployer.deploy(BloodTest);
};
