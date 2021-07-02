var SampleToken = artifacts.require("SampleToken");

const decimals = 18;

const totalSupply = 1000000;

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "Gregarious", "GRG", decimals, totalSupply);
};