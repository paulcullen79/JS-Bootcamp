// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'Playing'
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    
}

Hangman.prototype.getPuzzleDOM = function () {
    puzzleEl = document.querySelector('#puzzle')
    puzzleEl.textContent = game1.getPuzzle()
}

Hangman.prototype.getRemainingGuessesDOM = function () {
    remainingGuessesEl = document.querySelector('#remaining-guesses')
    remainingGuessesEl.textContent = `You have ${game1.remainingGuesses} guesses remaining`
}

Hangman.prototype.getStatus = function () {
    let finished = false
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            finished = true
            this.status = 'Finished'
        } else if (this.remainingGuesses === 0) {
            this.status = 'Failed'
        } else {
            this.status = 'Playing'
        }
    
    }) 
   return this.status    
}