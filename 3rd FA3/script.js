let x;
let y;
let string;
let lettercheck;
let indexletter;
let namevar;

function getNum() {
    x = Number(prompt("first number ?!?!!?"));
    y = Number(prompt("second number pleaase"));

    numbers.innerHTML = "number 1: " + x + " // number 2: " + y;

    round.innerHTML = "round() of " + x + " / " + y + " is " + Math.round(x/y);
    ceil.innerHTML = "ceil() of " + x + " / " + y + " is " + Math.ceil(x/y);
    floor.innerHTML = "floor() of " + x + " / " + y + " is " + Math.floor(x/y); 
    exponent.innerHTML = "numbers " + x + "^" + y + " is " + x*y;
}

function getString() {
    string = String(prompt("type in a funny word of your choice"));
    dispStr.innerHTML = "chosen string: " + string;
}

function checkLetter() {
    lettercheck = String(prompt("choose a letter from the alphabet (obviously)"));
    indexletter = string.indexOf(lettercheck) + 1;
    dispLetter.innerHTML = "chosen letter: " + lettercheck;

    if (indexletter != -1) {
        index.innerHTML = "yo your letter is at index " + indexletter + ", nice word";
    } else {
        index.innerHTML = "yo i cant find your letter :broken_heart:";
    }
}

function getName() {
    namevar = String(prompt("what IS your name ??")).toUpperCase();
    yourname.innerHTML = "Your name is " + namevar + ".";
}