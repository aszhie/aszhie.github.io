function onload() {
    exercise3()
}

function exercise1() {
    let x = String(prompt("give me a word: "));
    let xup = String(x.toUpperCase());

    let y = String(prompt("give me another word: "));
    let yup = String(y.toUpperCase());
    
    let n = Number(prompt("cool! give me a number from 0 to " + (x.length - 1)));

    firstword.innerHTML = "first word: " + x;
    secondword.innerHTML = "second word: " + y;

    let xchar = xup.charAt(n);
    let ychar = -1;
    let i;

    wordlen.innerHTML = "max index (0-n) of word: " + Number(x.length - 1) + " || index chosen: " + n + " || first character: " + xchar;

    for (i=0; i < (xup.length - 1); i++) {
        if (yup[i] == xchar) {
            ychar = yup[i];
            break;
        } else {
            console.log(yup[i] + " does not match with " + xchar);
        }
    }

    if (ychar != -1) {
        resultex1.innerHTML = "result: the character " + xchar + " with index " + n + " was spotted in the word " + y + ", and has an index of " + i + ".";
    } else {
        resultex1.innerHTML = "result: the character " + xchar + " with index " + n + " was not spotted in the word " + y + ".";
    }
}

function exercise2() {
    let n = prompt("give me a number (must be a number): ");
    let type = typeof(n);
    console.log(n + " is a" + type)

    if (type == "number") {
        resultex2.innerHTML = "wow thank you for that great number " + n + "!";
    } else {
        resultex2.innerHTML = "oh my my you didnt give me a number ..";
    }
    
    numbergiven.innerHTML = "number: " + n;
}

function exercise3() {
    let datenow = new Date();
    datetoday.innerHTML = datenow;

    const birthdate = new Date("12-10-2011");
    birthday.innerHTML = birthdate;

    let difference = datenow.getFullYear() - birthdate.getFullYear();
    
}

setInterval(() => {
    exercise3()
}, 500);