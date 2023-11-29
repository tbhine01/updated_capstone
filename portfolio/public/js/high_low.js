const numberToGuess = Math.floor(Math.random() * (100 - 1)) + 1
const response = document.getElementById("response")
let tries = 5
let triesCount = document.getElementById("tries")
let numbersGuessed = document.getElementById("numbers_guessed")

triesCount.innerHTML = `You have ${tries} tries left`

console.log(`The number to guess is ${numberToGuess}`)

function reloadPage(){
    location.reload()
}



// Game Loop
function startGame(){
    let userNumber = document.getElementById("number").value

    console.log(`The user number is ${userNumber}`)

    if(userNumber > 100){
         response.innerHTML = ("Please choose a number below 100")
    }else if(userNumber < 1){
        response.innerHTML = ("Please choose a number higher than 1")
    }else if(userNumber > numberToGuess){
        response.innerHTML =  ("Your number is too high!")
   }else if(userNumber < numberToGuess){
        response.innerHTML = ("Your number is too low!")
   }else if(userNumber == numberToGuess){
        response.innerHTML = (`That's correct! The number was ${numberToGuess}.`),
        document.getElementById("play_again").style.display = "inline"
        document.getElementById("submit").disabled = true
   }else{
     response.innerHTML = "Only numbers are allowed"
   }

     if (userNumber != numberToGuess) {
          tries--
          triesCount.innerHTML = `You have ${tries} tries left`
          numbersGuessed.innerText += ` ${userNumber}`
     }
     if (tries == 0 && userNumber != numberToGuess) {
          response.innerText = (`Game Over! The number was ${numberToGuess}.`),
          document.getElementById("play_again").style.display = "inline"
          document.getElementById("submit").disabled = true
     }

}
