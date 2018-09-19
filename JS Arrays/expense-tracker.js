

const account = {
    name: 'Paul Cullen',
    income: [],
    expenses: [],
    addIncome: function(description, amount) {
        this.income.push( {
            description: description,
            amount: amount
        })
    },
    addExpense: function(description, amount) {
        this.expenses.push( {
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {  
        let incomeTotal = 0
        let expenseTotal = 0
        this.income.forEach(function (income) {     
            incomeTotal = incomeTotal + income.amount
        }) 
        this.expenses.forEach(function (expense) {     
            expenseTotal = expenseTotal + expense.amount
        }) 
        return `${this.name} has an account balance of $${incomeTotal - expenseTotal}.
                $${incomeTotal} in Income and $${expenseTotal} in Expenses.`
    
    
    },
}
account.addIncome('Job', 1000)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())
