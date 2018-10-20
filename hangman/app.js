
const game1 = new Hangman('Cat', 2)
game1.getPuzzleDOM()
game1.getRemainingGuessesDOM()
console.log(game1.getStatus())




window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    game1.getPuzzleDOM()
    game1.getRemainingGuessesDOM()
    console.log(game1.getStatus())
})


