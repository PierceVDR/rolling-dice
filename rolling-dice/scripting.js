btn = document.getElementById("btn")

die1 = document.getElementById("die1");
die2 = document.getElementById("die2");

sumDiv = document.getElementById("sumDiv")


function roll() {
    one=Math.floor(Math.random()*6 + 1);
    two=Math.floor(Math.random()*6 + 1);

    die1.innerHTML=one
    die2.innerHTML=two

    sumDiv.innerHTML="Sum: " + (one+two);
}