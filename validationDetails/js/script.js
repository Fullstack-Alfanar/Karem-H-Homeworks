function validationIsraelID() {
    let ID = [], sum = 0, digit = 0;
    ID[0] = document.getElementById("digit1").value;
    ID[1] = document.getElementById("digit2").value;
    ID[2] = document.getElementById("digit3").value;
    ID[3] = document.getElementById("digit4").value;
    ID[4] = document.getElementById("digit5").value;
    ID[5] = document.getElementById("digit6").value;
    ID[6] = document.getElementById("digit7").value;
    ID[7] = document.getElementById("digit8").value;
    ID[8] = document.getElementById("digit9").value;

    for (let i = 0; i < ID.length - 1; i++) {
        if(!ID[i]>=0 && !ID[i]<=10){
            console.log("enter your ID again !!!!!");
        }
        if (i % 2 == 0) {
            digit = ID[i] * 1;
        }
        else {
            digit = ID[i] * 2;
        }
        if (digit >= 10) {
            digit = (digit % 10) + Math.floor(digit / 10);
        }
        sum += digit;
    }
    if ((sum + ID[8] * 1) % 10 == 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }



}