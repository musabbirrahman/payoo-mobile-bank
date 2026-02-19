document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1. get bank account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please select a bank");
    return;
  }

  // 2. get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid acc no");
    return;
  }

  // 3. get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success from ${bankAccount}
    at ${new Date()}`);
    setBalance(newBalance);

    const transactions = document.getElementById("transaction-container");
    const newTransaction = document.createElement('div');
    newTransaction.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
        Add Money Success from ${bankAccount}, acc-no ${accno} at ${new Date()}
    </div>
    `;
    transactions.appendChild(newTransaction);
  } else {
    alert("Invalid Pin");
    return;
  }
});
