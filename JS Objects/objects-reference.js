//create account object
let account = {
    name: 'Paul',
    income: 0,
    expenses: 0
}

//function for adding income
let addIncome = function(account, income) {
    account.income = account.income + income
} 

//function for adding expense
let addExpense = function(account, expense) {
    account.expenses = account.expenses + expense
} 

//function for resetting account
let accountReset = function(account) { 
    account.income = 0
    account.expenses = 0  
} 

//function for account summary
let getAccountSummary = function(account) {
    let accountBalance = account.income - account.expenses
    return (`Account for ${account.name} has $${accountBalance}, $${account.income} in income, $${account.expenses} in expenses.`)
} 

//add income
addIncome(account, 2000)

//add expense
addExpense(account, 200)
addExpense(account, 300)

//get account summary
console.log(getAccountSummary(account))

//reset account
accountReset(account)

//get account summary
console.log(getAccountSummary(account))

