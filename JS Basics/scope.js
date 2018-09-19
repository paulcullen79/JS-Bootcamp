let tempFahrenheit = 68

let tempConverter = function(value) {
    let result = (value - 32) * (5/9)
    return result
}


let tempCelcius = tempConverter(tempFahrenheit)

console.log(tempCelcius)
