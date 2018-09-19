let tipPercent = .4
let total = 100


let getTip = function(total, tipPercent) { 
    return total * tipPercent
}
let tip = getTip(total, tipPercent)
console.log(`A ${tip}% tip on $${total} would be $${tip} `)
