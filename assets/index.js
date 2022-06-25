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