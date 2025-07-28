
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("claimBtn");
  // Simuleer dat Telegram & Twitter gevolgd zijn
  setTimeout(() => {
    btn.disabled = false;
  }, 3000);
});
