function calculate() {
  const backOdds = parseFloat(document.getElementById("backOdds").value);
  const backStake = parseFloat(document.getElementById("backStake").value);
  const layOdds = parseFloat(document.getElementById("layOdds").value);
  const commission = parseFloat(document.getElementById("commission").value) / 100;

  if (!backOdds || !backStake || !layOdds || !commission) {
    alert("Please fill all fields correctly!");
    return;
  }

  const layStake = (backOdds * backStake) / (layOdds - commission);

  const profitWin =
    backStake * (backOdds - 1) - (layStake * (layOdds - 1));

  const profitLose =
    layStake * (1 - commission) - backStake;

  document.getElementById("layStakeResult").innerText =
    "Required Lay Stake: ₹ " + layStake.toFixed(2);

  document.getElementById("profitIfWin").innerText =
    "Profit if Selection Wins: ₹ " + profitWin.toFixed(2);

  document.getElementById("profitIfLose").innerText =
    "Profit if Selection Loses: ₹ " + profitLose.toFixed(2);
}
