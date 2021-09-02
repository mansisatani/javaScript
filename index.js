var randomnumber1= Math.floor(Math.random() * 6) +1;
var randomDiceImage = "dice" + randomnumber1 + ".png" ;
var randomSource = "images/" + randomDiceImage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomSource = "images/" + "dice" + randomNumber2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src",randomSource);

if(randomnumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(randomnumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="both are equal";
}