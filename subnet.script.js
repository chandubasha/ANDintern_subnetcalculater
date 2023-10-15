function calculate() {
    const ipAddress = document.getElementById("ipAddress").value;
    const subnetMask = document.getElementById("subnetMask").value;

    const ipParts = ipAddress.split(".");
    const maskParts = subnetMask.split(".");

    let networkAddress = "";
    let binaryIP = "";

    for (let i = 0; i < 4; i++) {
        const ipPart = parseInt(ipParts[i]);
        const maskPart = parseInt(maskParts[i]);

        binaryIP += ipPart.toString(2).padStart(8, '0') + " ";
        networkAddress += (ipPart & maskPart).toString() + ".";
    }

    binaryIP = binaryIP.trim();
    networkAddress = networkAddress.slice(0, -1);

    document.getElementById("result").innerHTML = `
        <p>Binary IP Address: ${binaryIP}</p>
        <p>Network Address: ${networkAddress}</p>
    `;
}
