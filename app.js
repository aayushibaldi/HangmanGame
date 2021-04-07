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
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage  
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
/*getPuzzle('3').then((myPuzzle)=>{
    console.log(myPuzzle)
}).catch((error)=>{
    console.log(error)
})

getCurrentCountry().then((myCountry)=>{
    console.log(myCountry.name)
}).catch((error)=>{
    console.log(error)
})*/

/*getLocation().then((location)=>{
    return getCountryDetails(location.country)
    //console.log(`Your current location is ${location.city}, ${location.region},${location.country}`)
}).then((myCountry)=>{
    console.log(myCountry.name)
}).catch((error)=>{
    console.log(error)
})*/
//console.log('After the function')
//const puzzle = getPuzzleSync()
//console.log(puzzle)

//console.log('After Synchronous execution')


/*fetch('http://puzzle.mead.io/puzzle',{}).then((response)=>{
    if(response.status === 200){
        return response.json()
    }else{
        throw new Error('Puzzle not found')
    }
}).then((data)=>{
    console.log(`New Puzzle: ${data.puzzle}`)
}).catch((e)=>{
    console.log(e)
})*/

/*getCountryDetails('IN').then((myCountry)=>{
    console.log(myCountry.name)
}).catch((error)=>{
    console.log(error)
})*/