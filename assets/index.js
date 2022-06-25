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