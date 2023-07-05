var rando1 = Math.floor(1+Math.random()*6);
var rando2 = Math.floor(1+Math.random()*6);
var str = "dice"+rando1+".png";
var str2 = "dice"+rando2+".png";

document.querySelector(".img1").setAttribute("src",str);
document.querySelector(".img2").setAttribute("src",str2);

if(rando1>rando2){
    document.querySelector("h1").innerHTML="Winner is Player 1 ";
}

else if(rando1<rando2){
    document.querySelector("h1").innerHTML="Winner is Player 2 ";
}

else{
    document.querySelector("h1").innerHTML="Play Again";
}