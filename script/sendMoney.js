document
  .getElementById("send-money-btn")
  .addEventListener("click", function () {
    const sendMoneyNumber = getValueFromInput("send-money-number");
    if (sendMoneyNumber.length != 11) {
      alert("Invalid Number");
      return;
    }

    const sendMoneyAmount = getValueFromInput("send-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(sendMoneyAmount);
    if (newBalance < 0) {
      alert("Invalid Amount");
      return;
    }

    const pin = getValueFromInput("send-money-pin");
    if (pin == "1234") {
      alert("Send Money Successful");
      setBalance(newBalance);
      const transactions = document.getElementById("transaction-container");
      const newTransaction = document.createElement("div");
      newTransaction.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
        Send Money ${sendMoneyAmount} TAKA Success to ${sendMoneyNumber} at ${new Date()}
    </div>
    `;
      transactions.appendChild(newTransaction);
    } else {
      alert("invalid pin");
      return;
    }
  });
