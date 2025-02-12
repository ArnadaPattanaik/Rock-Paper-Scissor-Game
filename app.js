let userScore=0;
let comScore=0;
const  msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const drawGame = ()=>
{
    console.log("Game is draw");
    msg.innertext="Game was Draw";
}
const showWinner=(userWin)=>
{
    if(userWin){
        console.log("you Win");
        msg.innertext="you Win";
        userScorePara++;
    }else{
        console.log("you lose");
        msg.innertext="Computer win";
        compScorePara++;
    }
}


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];// options re jaha string achi seita ku index value hisab re bahar kariba pai emt lekha hela reutrn kariba vlaue;
}

const playGame = (userChoice) =>{
    //console.log("choice was clicked", userChoice);
    //lets write computer generate code
    const compChoice=genCompChoice();
    console.log("choice was clicked", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
         let userWin=true;
         if(userChoice==="rock"){
            userWin= compChoice==="paper" ? false :true;// if else statement in one line
         }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false: true;
         }else{
               userWin= compChoice==="rock" ? false: true;
         }
    }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id");

        playGame();
    });
});