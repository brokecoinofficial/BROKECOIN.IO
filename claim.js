
const airdropAmount = "900000000000000000000"; // 900 tokens with 18 decimals
const owner = "0x3f0c5325f9B6EBC75a2CccCEd39721606C34Fd62";
const tokenAddress = "<PLACEHOLDER_TOKEN_ADDRESS>"; // Vul dit later in

let claimed = {};

async function claimAirdrop() {
  if (typeof window.ethereum === 'undefined') {
    document.getElementById('status').innerText = "MetaMask is not installed.";
    return;
  }

  const web3 = new Web3(window.ethereum);
  await window.ethereum.enable();

  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];

  if (!user) {
    document.getElementById('status').innerText = "Wallet not connected.";
    return;
  }

  if (!claimed[user]) claimed[user] = 0;
  if (claimed[user] >= 2) {
    document.getElementById('status').innerText = "⚠️ You've already claimed the max allowed.";
    return;
  }

  const tokenAbi = [
    { "constant": false, "inputs": [ { "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }
  ];
  const contract = new web3.eth.Contract(tokenAbi, tokenAddress);

  try {
    const tx = await contract.methods.transfer(user, airdropAmount).send({ from: owner });
    claimed[user]++;
    document.getElementById('status').innerText = "✅ 900 $BROKE claimed!";
  } catch (err) {
    console.error(err);
    document.getElementById('status').innerText = "❌ Transaction failed.";
  }
}
