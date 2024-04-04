function dice(){
    var diceNumber = Math.floor(Math.random()*6 + 1);
    console.log(diceNumber);
   var diceLocation = "./images/dice-"+diceNumber+".svg";
    console.log(diceLocation);
    document.querySelector(".player1 img").setAttribute("src",diceLocation)   ; 


    var diceNumber2 = Math.floor(Math.random()*6 + 1);
    console.log(diceNumber2);
    var diceLocation2 = "./images/dice-"+diceNumber2+".svg";
    console.log(diceLocation2);
    document.querySelector(".player2 img").setAttribute("src",diceLocation2)    ;

    if(diceNumber > diceNumber2){
        document.querySelector(".player1 h3").innerHTML = "🚩 Player 1";
        document.querySelector(".player1 h3").classList.toggle("pop")
    }
    else if(diceNumber < diceNumber2){
        document.querySelector(".player2 h3").innerHTML = "🚩 Player 2";
        document.querySelector(".player2 h3").classList.toggle("pop")

    }
    else if(diceNumber === diceNumber2){
        document.querySelector("h1").innerHTML = "DRAW!!";
        document.querySelector("h1").classList.toggle("pop")
    }


}
window.onbeforeunload = dice();
