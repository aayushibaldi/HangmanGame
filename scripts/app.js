const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 

//puzzleEl.textContent = game1.puzzle
//guessesEl.textContent = game1.statusMessage



window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    renderHangman()

})

const renderHangman = ()=>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage  

    game1.puzzle.split('').forEach((letter)=>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}
const startGame = async ()=>{
    const myPuzzle = await getPuzzle('2')
    game1 = new Hangman(myPuzzle, 5)
    renderHangman()
}

startGame()

document.querySelector('#reset').addEventListener('click', ()=>{
    startGame()
})
