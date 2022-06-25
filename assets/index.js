const myObj={
    income: 5000,
    expense: 500,
    balance: 1000,
    transactions: [
        {id: uniqueId(), name: "Salary", amount: 5000, type: "income"},
        {id: uniqueId(), name: "Buy Grocery", amount: 700, type: "expense"},
        {id: uniqueId(), name: "Buy a phone", amount: 2000, type: "expense"}  
    ]
}

const myIncome =document.querySelector("#myIncome");
const expenses = document.querySelector("#myExpense");
const myBalance = document.getElementById("myBalance");
const incomeTransaction = document.getElementById("transaction")
const expenseTransaction =document.getElementById("expenseTransaction")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const nameInput = document.getElementById("nameOne")
const amountInput = document.getElementById("amountOne")
const nameInputTwo = document.querySelector("#nameTwo")
const amountInputTwo = document.querySelector("#amountTwo")

function renderElements(){
    myBalance.innerHTML = `Ksh. ${myObj.balance}`;
    myIncome.innerHTML = `Ksh. ${myObj.income}`;
    expenses.innerHTML = `Ksh. ${myObj.expense}`;

    let aTransaction, transactionContainer, inputAmount, item, btnEl;

    for(let i=0; i<myObj.transactions.length; i++){
        item = myObj.transactions[i];
        aTransaction = document.createElement("li");
        aTransaction.append(myObj.transactions[i].name)

        if(item.type === "income"){
            incomeTransaction.appendChild(aTransaction)
        }
        else if(item.type === "expense"){
            expenseTransaction.appendChild(aTransaction)
        }
        transactionContainer = document.createElement("div");
        inputAmount = document.createElement("span");
        if(item.type === "income") {
            inputAmount.classList.add("income-amt")
        }else if(item.type === "expense"){
            inputAmount.classList.add("expense-amt")
        }
        inputAmount.innerHTML = `Ksh. ${item.amount}`;

        transactionContainer.appendChild(inputAmount)


     }
}