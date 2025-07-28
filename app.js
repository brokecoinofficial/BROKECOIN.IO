
let followedTwitter = false;
let joinedTelegram = false;
document.getElementById('followTwitter').onclick = () => {
  window.open('https://twitter.com/BROKECOINBAG', '_blank');
  followedTwitter = true;
  checkUnlock();
};
document.getElementById('joinTelegram').onclick = () => {
  window.open('https://t.me/+ay8dpejsl1tiZjA8', '_blank');
  joinedTelegram = true;
  checkUnlock();
};
function checkUnlock() {
  if (followedTwitter && joinedTelegram) {
    document.getElementById('connectWallet').disabled = false;
  }
}
document.getElementById('connectWallet').onclick = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const wallet = accounts[0];
      alert("Wallet connected: " + wallet);
      document.getElementById('claim').disabled = false;
    } catch (err) {
      alert("Connection failed.");
    }
  } else {
    alert("MetaMask not found.");
  }
};
document.getElementById('claim').onclick = () => {
  alert("🎉 900 $BROKE tokens will be sent to your wallet after verification!");
};
