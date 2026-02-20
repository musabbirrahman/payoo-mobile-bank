// Machine input form id 

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    
    return value;
}

// machine > get balance 
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

// machine > set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine > id > hide all > show id

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMoney = document.getElementById('send-money')
    const transactions = document.getElementById('transactions');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    sendMoney.classList.add('hidden')
    transactions.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
} 