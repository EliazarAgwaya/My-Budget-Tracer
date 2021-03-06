let myObj={
    income: 5000,
    expense: 500,
    balance: 1000,
    transactions: [
    
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

let myStorageObj = JSON.parse(localStorage.getItem("expenseTracker"));
function myExpense () {
   
   if(myStorageObj !== null){
    myObj = myStorageObj;
   }
  
       myListeners()
       updateMyObj()
       
    
    }
    myExpense()

function myListeners(){
    incomeBtn.addEventListener("click", incomeAddition)
    expenseBtn.addEventListener("click", expenseAddition)
}

function incomeAddition(){
    let name = nameInput.value;
    let amount = amountInput.value;
    if(name!== "" && amount !== ""){
        let transaction = {
            id: uniqueId(),
            name: nameInput.value,
            amount: parseInt(amountInput.value),
            type: "income"
        };
        myObj.transactions.push(transaction)
    updateMyObj();

    } else{
        alert ("Please input valid data")
    }

    nameInput.value ="";
    amountInput.value ="";
    
}

function expenseAddition(){
    let name = nameInputTwo.value;
    let amount = amountInputTwo.value;
    if(name!== "" && amount !== ""){
        let transaction = {
            id: uniqueId(),
            name: nameInputTwo.value,
            amount: parseInt(amountInputTwo.value),
            type: "expense"
        };
        myObj.transactions.push(transaction)
    updateMyObj();

    } else{
        alert ("Please input valid data")
    }

    nameInputTwo.value=""
    amountInputTwo.value=""
}

function uniqueId(){
    return Math.random()
}

function transactionDelete(e){
    let id = parseInt(e.target.getAttribute("data-id"))
    let deleteIndex;
    for (let i=0; i<myObj.transactions.length; i++){
        if(myObj.transactions[i].id === id){
            deleteIndex =i;
            break;
        }
    }

    myObj.transactions.splice(deleteIndex,1);

    updateMyObj()
}


function updateMyObj(){
    let balance=0;
    let income=0;
    let expense=0;
    let item;
    for(let i=0; i<myObj.transactions.length; i++){
        item=myObj.transactions[i];

        if(item.type === "income"){
            income += item.amount;
        }else if(item.type === "expense"){
            expense += item.amount;
        }
    }
    balance=income-expense;
   
    myObj.balance=balance;
    myObj.income=income;
    myObj.expense=expense;

    localStorage.setItem("expenseTracker", JSON.stringify(myObj))

    renderElements()
}

function renderElements(){
    myBalance.innerHTML = `Ksh. ${myObj.balance}`;
    myIncome.innerHTML = `Ksh. ${myObj.income}`;
    expenses.innerHTML = `Ksh. ${myObj.expense}`;

    let aTransaction, transactionContainer, inputAmount, item, btnEl;
    incomeTransaction.innerHTML=""
    expenseTransaction.innerHTML=""

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

        btnEl= document.createElement("button");
        btnEl.setAttribute("data-id", item.id)
        btnEl.innerHTML='Delete'

        btnEl.addEventListener("click", transactionDelete)
        transactionContainer.appendChild(btnEl)
        aTransaction.appendChild(transactionContainer)

     }
}