document.getElementById("cashout-btn").addEventListener("click", function () {
  // get agent number and validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }

  // get cashout amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  //  get balance
  const currentBalance = getBalance();

  //  calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  const pin = getValueFromInput("input-pin");
  if (pin == "1234") {
    alert("cashout successful");
    setBalance(newBalance);
  } else {
    alert("invalid pin");
    return;
  }
});


// document.getElementById('cashout-btn').addEventListener('click', function(){
//     const cashoutNumberInput =  document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;

//     if(cashoutNumber.length != 11){
//         alert('Invalid Agent Number');
//         return;
//     }

//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;

//     const balanceElement =  document.getElementById('balance');
//     const balance = balanceElement.innerText;

//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }

//     const cashoutPinInput =  document.getElementById('input-pin');
//     const pin = cashoutPinInput.value;
//     if(pin == '1234'){
//         alert('cashout successful');
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         alert('invalid pin');
//         return;
//     }
// })
