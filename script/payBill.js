document.getElementById("pay-bill-btn").addEventListener("click", function () {
  // 1. get bank account
  const payOption = getValueFromInput("payment-option");
  if (payOption == "Select an option") {
    alert("Please select an option");
    return;
  }

  // 2. get bank account number
  const accno = getValueFromInput("pay-bill-number");
  if (accno.length != 11) {
    alert("Invalid number");
    return;
  }

  const payAmount = getValueFromInput("pay-bill-amount");

  //  get balance
  const currentBalance = getBalance();

  //  calculate new balance
  const newBalance = currentBalance - Number(payAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  

  const pin = getValueFromInput("pay-bill-pin");
  if (pin == "1234") {
    alert(`Payment Success
    at ${new Date()}`);
    setBalance(newBalance);

    const transactions = document.getElementById("transaction-container");
    const newTransaction = document.createElement("div");
    newTransaction.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
         ${payOption} pay Success, to ${accno} at ${new Date()}
    </div>
    `;
    transactions.appendChild(newTransaction);
  } else {
    alert("Invalid Pin");
    return;
  }
});
