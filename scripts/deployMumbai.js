const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.deployContract("Submission");

    await contract.waitForDeployment();

    console.log(
        `deployed to ${contract.target}`
    );

    const slotNumber = 0;
    const stateValue = await ethers.provider.getStorage(contract.target, slotNumber);
    console.log(`Value of state variable at slot ${slotNumber}: ${stateValue}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});