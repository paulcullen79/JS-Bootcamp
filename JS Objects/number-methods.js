let guess = function(num) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * max - min + 1) + min
    console.log(randomNum)
    return num === randomNum
}
console.log(guess(3))
