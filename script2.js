var randompic= Math.floor(Math.random()*6) + 1;
var img= "dice"+ randompic +".png";
var img1="images/"+img;

document.querySelectorAll("img")[0].setAttribute("src", img1);