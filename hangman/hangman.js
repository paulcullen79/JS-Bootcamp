

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    getPuzzle() {
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

    makeGuess(guess) {
        if (this.status === 'Playing') {
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
    }

    getPuzzleDOM(){
        const puzzleEl = document.querySelector('#puzzle')
        puzzleEl.textContent = game1.getPuzzle() 
    }

    getMessageDOM(message) {
        const remainingGuessesEl = document.querySelector('#remaining-guesses')
        remainingGuessesEl.textContent = message  
    }

    getStatus() {
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

    message() {
        if (this.status === 'Playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'Failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
}