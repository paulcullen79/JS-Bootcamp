let fahrenheit = 100

let getTempConversion = function(temp) {
    
    return {
        fahrenheit: temp,
        celcius: (temp - 32) * (5/9),
        kelvin : (temp + 459.67) * (5/9)
    }
}

let tempConversion = getTempConversion(fahrenheit)
console.log(`Fahrenheit = ${tempConversion.fahrenheit}, Celcius = ${tempConversion.celcius}, Kelvin = ${tempConversion.kelvin}`)
console.log(tempConversion)