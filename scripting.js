die1 = document.getElementById("die1");
die2 = document.getElementById("die2");

function roll() {
    die1.innerHTML=Math.floor(Math.random()*6 + 1)
    die2.innerHTML=Math.floor(Math.random()*6 + 1)
}