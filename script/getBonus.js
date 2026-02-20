document.getElementById("get-bonus-btn").addEventListener("click", function () {
  const bonus = 5000;
  const getCoupon = getValueFromInput("bonus-coupon");
  if (getCoupon == "pay-5000") {
    alert("Bonus 5000 Taka added successfully");
  } else {
    alert("Invalid Coupon");
    return;
  }
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(bonus);
  setBalance(newBalance);
  const transactions = document.getElementById("transaction-container");
  const newTransaction = document.createElement("div");
  newTransaction.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
        Got Bonus ${bonus} TAKA successfully at ${new Date()}
    </div>
    `;
  transactions.appendChild(newTransaction);
});
