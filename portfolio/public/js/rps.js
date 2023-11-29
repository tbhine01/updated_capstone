
    // Setting up variables
let choiceArray = ["Rock", "Paper", "Scissors"];

let outcome = document.getElementById("outcome")

const choice = document.getElementsByName("choices")
let userChoice

let userScore = 0
let computerScore = 0
const userScoreTracker = document.getElementById("user_score")
const computerScoreTracker = document.getElementById("computer_score")

function playGame(){


    let computerChoice = choiceArray[Math.floor(Math.random()* choiceArray.length)]
    // Chcecking choice
    for(let i = 0; i < choice.length; i++){
        if(choice[i].checked === true){
            userChoice = choice[i].value
        }
    }
    
    console.log(`The user chose ${userChoice}. The Computer chose ${computerChoice}`)

    // Condtional 
    if(userChoice === computerChoice){
        outcome.innerText = "It's a Tie!"
    }else if(userChoice == "Rock" && computerChoice == "Paper"){
        outcome.innerText = "The Computer chose Paper. Computer Wins"
        computerScore++
        computerScoreTracker.innerText = computerScore
    }else if(userChoice == "Rock" && computerChoice == "Scissors"){
        outcome.innerText = "The Computer chose Scissors! You Win!"
        userScore++
        userScoreTracker.innerText = userScore
    }else if(userChoice == "Paper" && computerChoice == "Rock"){
        outcome.innerText = "The Computer chose Rock. You win!"
        userScore++
        userScoreTracker.innerText = userScore
    }else if(userChoice ==  "Paper" && computerChoice == "Scissors"){
        outcome.innerText = "The Computer chose Scissors. Computer Wins"
        computerScore++
        computerScoreTracker.innerText = computerScore
    }else if(userChoice == "Scissors" && computerChoice == "Rock"){
        outcome.innerText = "The Computer chose Rock. Computer Wins"
        computerScore++
        computerScoreTracker.innerText = computerScore
    }else if(userChoice == "Scissors" && computerChoice == "Paper"){
        outcome.innerText = "The Computer chose Paper. You Win!"
        userScore++
        userScoreTracker.innerText = userScore
    }else{
        alert("Invalid Option")
    }

    if(userScore == 5 && userScore > computerScore){
        outcome.innerText = "Congrats! You won! Want to play again?"
        // console.log("Congrats! You won! Want to play again?")
    }else if(computerScore == 5 && computerScore > userScore){
        outcome.innerText = "Oh No, you lost :( Don't let the computer best you! Play again!"
        // console.log("Oh No! You lost :( Don't let the computer best you! Plya again!")
    }
        
    console.log(userScore)
    console.log(computerScore)

}

/*
To Do: 
Make the Shoot Button turn into a Play Again that refreshes the page
Fix page sizing 
Maybe add gifs?
*/