var num1 = Math.floor(Math.random() * 6);
var num2 = Math.floor(Math.random() * 6);

if(num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Both are winners";
}


var i1 = "images/dice"+(num1+1)+".png";
document.querySelector(".img1").setAttribute("src",i1);
var i2 = "images/dice"+(num2+1)+".png";
document.querySelector(".img2").setAttribute("src",i2);
