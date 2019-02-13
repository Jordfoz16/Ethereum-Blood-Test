var BloodTest = artifacts.require("./blood_test.sol");

module.exports = function(deployer) {
  deployer.deploy(BloodTest);
};
