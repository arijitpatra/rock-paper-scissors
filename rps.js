var playerScoreTotal = 0;
var computerScoreTotal = 0;
var totalRounds = 0;
var playerSet = 0;
var computerSet = 0;

(function () {
    document.getElementById("rock-pic").addEventListener("mouseover", beepPlay);
    document.getElementById("paper-pic").addEventListener("mouseover", beepPlay);
    document.getElementById("scissors-pic").addEventListener("mouseover", beepPlay);
})();

function beepPlay() {
    var beep = new Audio('beep.mp3');
    beep.play();
}

function createRefreshBtn() {
    var refreshBtnElement = document.createElement("button");
    refreshBtnElement.setAttribute("id","refresh-btn");
    refreshBtnElement.setAttribute("class", "animated pulse infinite");
    document.getElementById("refresh-div").appendChild(refreshBtnElement);
    document.getElementById("refresh-btn").innerHTML = "New Round";
    document.getElementById("refresh-btn").addEventListener("click",refresh);
}

function newGameBtn() {
    var newGameBtnElement = document.createElement("button");
    newGameBtnElement.setAttribute("id","newgame-btn");
    newGameBtnElement.setAttribute("class", "animated pulse infinite");
    document.getElementById("refresh-div").appendChild(newGameBtnElement);
    document.getElementById("newgame-btn").innerHTML = "New Game";
    document.getElementById("newgame-btn").addEventListener("click",newGame);
}

function rock() {
    var choice = "rock";
    userChoice(choice);
    removeCompPic();
    // createRefreshBtn();
    document.getElementById("you-id").style.cursor = "no-drop";
    document.getElementById("rock-pic").style.cursor = "no-drop";
    document.getElementById("rock-pic").style.transform = "scale(1.0)";
    document.getElementById("rock-pic").removeEventListener("mouseover", beepPlay);
}

function paper() {
    var choice = "paper";
    userChoice(choice);
    removeCompPic();
    // createRefreshBtn();
    document.getElementById("you-id").style.cursor = "no-drop";
    document.getElementById("paper-pic").style.cursor = "no-drop";
    document.getElementById("paper-pic").style.transform = "scale(1.0)";
    document.getElementById("paper-pic").removeEventListener("mouseover", beepPlay);
}

function scissors() {
    var choice = "scissors";
    userChoice(choice);
    removeCompPic();
    // createRefreshBtn();
    document.getElementById("you-id").style.cursor = "no-drop";
    document.getElementById("scissors-pic").style.cursor = "no-drop";
    document.getElementById("scissors-pic").style.transform = "scale(1.0)";
    document.getElementById("scissors-pic").removeEventListener("mouseover", beepPlay);
}

function userChoice(choice) {
    console.log("Choice is " + choice);

    var switchChoice = choice;

    switch (switchChoice) {
        case "rock": 
        document.getElementById("paper").removeChild(document.getElementById("paper-pic"));
        document.getElementById("paper").className = "";
        document.getElementById("scissors").removeChild(document.getElementById("scissors-pic"));
        document.getElementById("scissors").className = "";
        document.getElementById("rock").className = "col-xs-12";
        break;
        case "paper":
        document.getElementById("rock").removeChild(document.getElementById("rock-pic"));
        document.getElementById("rock").className = "";
        document.getElementById("scissors").removeChild(document.getElementById("scissors-pic"));
        document.getElementById("scissors").className = "";
        document.getElementById("paper").className = "col-xs-12";
        break;
        case "scissors":
        document.getElementById("paper").removeChild(document.getElementById("paper-pic"));
        document.getElementById("paper").className = "";
        document.getElementById("rock").removeChild(document.getElementById("rock-pic"));
        document.getElementById("rock").className = "";
        document.getElementById("scissors").className = "col-xs-12";
        break;
    }

    computerChoice(choice);
}

function computerChoice(choice) {

    var optionsArray = ['rock', 'paper', 'scissors'];
    
    var randomNumber = Math.floor(Math.random()*optionsArray.length);

    var randomChoice = optionsArray[randomNumber];

    console.log("User: " + choice + " & " + "Computer: " + randomChoice);

    var imgElement = document.createElement("img");
    imgElement.setAttribute("id", "computer-choice-pic");
    imgElement.setAttribute("src", randomChoice+".png");
    imgElement.setAttribute("width", "100");
    document.getElementById("computer-choice").appendChild(imgElement);

    compareChoices(choice, randomChoice);
}

function compareChoices(choice, randomChoice) {
    var player = choice;
    var computer = randomChoice;

    var medalElement = document.createElement("img");
    medalElement.setAttribute("class", "medal animated flash collected-medal");  
    // var goldMedal = medalElement.setAttribute("src", "gold.png");
    // var silverMedal = medalElement.setAttribute("src", "silver.png");
    // var bronzeMedal = medalElement.setAttribute("src", "bronze.png");
    
    if(player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors") {
        console.log("TIE");
        document.getElementById("verdict").innerHTML = "Na Tera, Na Mera (Tie)";
        createRefreshBtn();
        document.getElementById("verdict").setAttribute("class", "verdict-dashed");
        var audio = new Audio('tie.mp3');
        audio.play();
        totalRounds++;
        document.getElementById("rounds").innerHTML = totalRounds;
    }

    if(player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper") {
        console.log("Player Won");
        
        var audio = new Audio('win.mp3');
        audio.play();
        playerScoreTotal++;
        console.log("Player: " + playerScoreTotal);
        document.getElementById("your-score").innerHTML = playerScoreTotal;
        totalRounds++;
        document.getElementById("rounds").innerHTML = totalRounds;
        playerSet++;
        if (playerSet == 1) {
            medalElement.setAttribute("src", "bronze.png");
            document.getElementById("medal-player").appendChild(medalElement);
            document.getElementById("verdict").innerHTML = "Yay! You Won";
            createRefreshBtn();
            document.getElementById("verdict").setAttribute("class", "verdict-dashed");
            // playerThreeSet = 0;
        }
        if (playerSet == 2) {
            document.getElementById("verdict").innerHTML = "Yay! You Won";
            createRefreshBtn();
            document.getElementById("verdict").setAttribute("class", "verdict-dashed");
        }
        if (playerSet == 3) {
            medalElement.setAttribute("src", "silver.png");
            document.getElementById("medal-player").appendChild(medalElement);
            document.getElementById("verdict").innerHTML = "Yay! You Won";
            createRefreshBtn();
            document.getElementById("verdict").setAttribute("class", "verdict-dashed");
            // playerThreeSet = 0;
        }
        // if (playerSet == 5) {
        //     medalElement.setAttribute("src", "gold.png");
        //     document.getElementById("medal-player").appendChild(medalElement);
        //     document.getElementById("verdict").innerHTML = "Yay! You Won";
        // createRefreshBtn();
        // document.getElementById("verdict").setAttribute("class", "verdict-dashed");
        //     // playerThreeSet = 0;
        // }
        if (playerSet == 4) {
            document.getElementById("verdict").innerHTML = "Yay! You Won";
            createRefreshBtn();
            document.getElementById("verdict").setAttribute("class", "verdict-dashed");
        }
        if (playerSet == 5 && computerSet < 5) {
            document.getElementById("verdict").innerHTML = "GAME OVER! <br> You are the CHAMPION.";
            document.getElementById("verdict").setAttribute("class", "animated flash infinite");
            medalElement.setAttribute("src", "gold.png");
            document.getElementById("medal-player").appendChild(medalElement);
            newGameBtn();
            //document.getElementById("refresh-btn").innerHTML = "New Game";
            //gameOver();
        }
    }

    if (player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock") {
        console.log("Computer Won");
        
        var audio = new Audio('lose.mp3');
        audio.play();
        computerScoreTotal++;
        console.log("Machine: " + computerScoreTotal);
        document.getElementById("computer-score").innerHTML = computerScoreTotal;
        totalRounds++;
        document.getElementById("rounds").innerHTML = totalRounds;
        computerSet++;
        if (computerSet == 1) {
            medalElement.setAttribute("src", "bronze.png");
            document.getElementById("medal-computer").appendChild(medalElement);
            document.getElementById("verdict").innerHTML = "Awww! Computer Won";
            createRefreshBtn();
            document.getElementById("verdict").setAttribute("class", "verdict-dashed");
            // playerThreeSet = 0;
        }
        if (computerSet == 2) {
           document.getElementById("verdict").innerHTML = "Awww! Computer Won";
           createRefreshBtn();
           document.getElementById("verdict").setAttribute("class", "verdict-dashed");
            // playerThreeSet = 0;
        }
        if (computerSet == 3) {
            medalElement.setAttribute("src", "silver.png");
            document.getElementById("medal-computer").appendChild(medalElement);
            document.getElementById("verdict").innerHTML = "Awww! Computer Won";
            createRefreshBtn();
            document.getElementById("verdict").setAttribute("class", "verdict-dashed");
            // playerThreeSet = 0;
        }
        // if (computerSet == 5) {
        //     medalElement.setAttribute("src", "gold.png");
        //     document.getElementById("medal-computer").appendChild(medalElement);

        //     // playerThreeSet = 0;
        // }
        if (computerSet == 4) {
           document.getElementById("verdict").innerHTML = "Awww! Computer Won";
           createRefreshBtn();
           document.getElementById("verdict").setAttribute("class", "verdict-dashed");
            // playerThreeSet = 0;
        }
        if (computerSet == 5 && playerSet < 5) {
            document.getElementById("verdict").innerHTML = "GAME OVER! <br> Computer is the CHAMPION.";
            document.getElementById("verdict").setAttribute("class", "animated flash infinite");
            medalElement.setAttribute("src", "gold.png");
            document.getElementById("medal-computer").appendChild(medalElement);
            newGameBtn();
            //document.getElementById("refresh-btn").innerHTML = "New Game";
            //gameOver();
        }
    }

};


// function gameOver() {

//     // document.getElementById("refresh-btn").style.display = "none";

//     // var btnElement = document.createElement("button");
//     // btnElement.setAttribute("id", "newgame-btn");
//     // btnElement.setAttribute("class", "animated pulse infinite")
//     // document.getElementById("refresh-div").appendChild(btnElement);
//     // document.getElementById("newgame-btn").addEventListener("click", newGame);
//     // document.getElementById("newgame-btn").innerHTML = "New Game";

//     //document.getElementById("refresh-btn").style.display = "none";

//     // var btnElement = document.createElement("button");
//     // btnElement.setAttribute("id", "newgame-btn");
//     // btnElement.setAttribute("class", "animated pulse infinite")
//     // document.getElementById("refresh-div").appendChild(btnElement);
//     // document.getElementById("newgame-btn").addEventListener("click",newGame);
//     // document.getElementById("newgame-btn").innerHTML = "New Game";

//     // var be = document.createElement("button");
//     // be.setAttribute("id", "refresh-btn");
//     // be.setAttribute("class", "animated pulse infinite")
//     // document.getElementById("refresh-div").appendChild(be);
//     // document.getElementById("refresh-btn").innerHTML = "New Round";
//     // //document.getElementById("refresh-btn").addEventListener("click",refresh);
//     // //document.getElementById("refresh-div").removeChild(document.getElementById("refresh-btn"));
//     // document.getElementById("refresh-btn").style.display = "none";

//     //var el = document.getElementById("refresh-btn");
//     //el.parentNode.removeChild(el);
//     //document.getElementById("refresh-btn").innerHTML = "hola";

//     playerScoreTotal = 0;
//     computerScoreTotal = 0;
//     computerSet = 0;
//     playerSet = 0;
//     totalRounds = 0;
//     newGame();
// }

function newGame() {
    playerScoreTotal = 0;
    computerScoreTotal = 0;
    computerSet = 0;
    playerSet = 0;
    totalRounds = 0;
    var collectedMedalElements = document.getElementsByClassName("collected-medal");
    for (var i = collectedMedalElements.length ; i--;) {
        collectedMedalElements[i].parentNode.removeChild(collectedMedalElements[i]);
    }
    document.getElementById("rounds").innerHTML = totalRounds;
    document.getElementById("your-score").innerHTML = playerScoreTotal;
    document.getElementById("computer-score").innerHTML = computerScoreTotal;
    refresh();
}


function removeCompPic() {
    document.getElementById("cf4a").removeChild(document.getElementById("rock-comp-pic"));
    document.getElementById("cf4a").removeChild(document.getElementById("paper-comp-pic"));
    document.getElementById("cf4a").removeChild(document.getElementById("scissors-comp-pic"));
}

function refresh() {
    document.getElementById("computer-choice").removeChild(document.getElementById("computer-choice-pic"));

    
    if (document.getElementById("refresh-btn")) {
        document.getElementById("refresh-div").removeChild(document.getElementById("refresh-btn"));
    }

    if (document.getElementById("newgame-btn")) {
        document.getElementById("refresh-div").removeChild(document.getElementById("newgame-btn"));
    }
    

    if (document.getElementById("rock-pic")) {
        document.getElementById("rock").removeChild(document.getElementById("rock-pic"));
    }

    if (document.getElementById("paper-pic")) {
        document.getElementById("paper").removeChild(document.getElementById("paper-pic"));
    }

    if (document.getElementById("scissors-pic")) {
        document.getElementById("scissors").removeChild(document.getElementById("scissors-pic"));
    }

    var rockElement = document.createElement("img");
    rockElement.setAttribute("id", "rock-pic");
    rockElement.setAttribute("class", "player-choosing-option");
    rockElement.setAttribute("src", "rock.png");
    rockElement.setAttribute("width", "100");
    document.getElementById("rock").appendChild(rockElement);
    document.getElementById("rock").className = "col-xs-4";

    var paperElement = document.createElement("img");
    paperElement.setAttribute("id", "paper-pic");
    paperElement.setAttribute("class", "player-choosing-option");
    paperElement.setAttribute("src", "paper.png");
    paperElement.setAttribute("width", "100");
    document.getElementById("paper").appendChild(paperElement);
    document.getElementById("paper").className = "col-xs-4";

    var scissorsElement = document.createElement("img");
    scissorsElement.setAttribute("id", "scissors-pic");
    scissorsElement.setAttribute("class", "player-choosing-option");
    scissorsElement.setAttribute("src", "scissors.png");
    scissorsElement.setAttribute("width", "100");
    document.getElementById("scissors").appendChild(scissorsElement);
    document.getElementById("scissors").className = "col-xs-4";

    var rockComp = document.createElement("img");
    rockComp.setAttribute("id","rock-comp-pic");
    rockComp.setAttribute("src","rock.png");
    rockComp.style.position = "absolute";
    document.getElementById("cf4a").appendChild(rockComp);

    var paperComp = document.createElement("img");
    paperComp.setAttribute("id","paper-comp-pic");
    paperComp.setAttribute("src","paper.png");
    paperComp.style.position = "absolute";
    document.getElementById("cf4a").appendChild(paperComp);

    var scissorsComp = document.createElement("img");
    scissorsComp.setAttribute("id","scissors-comp-pic");
    scissorsComp.setAttribute("src","scissors.png");
    scissorsComp.style.position = "relative";
    document.getElementById("cf4a").appendChild(scissorsComp);

    document.getElementById("verdict").innerHTML = " ";

    document.getElementById("rock-pic").addEventListener("mouseover", beepPlay);
    document.getElementById("paper-pic").addEventListener("mouseover", beepPlay);
    document.getElementById("scissors-pic").addEventListener("mouseover", beepPlay);

    document.getElementById("verdict").removeAttribute("class");
}