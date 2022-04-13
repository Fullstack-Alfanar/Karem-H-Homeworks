function validationIsraelID() {
    let ID, sum = 0, digit = 0;
    ID = document.getElementById("digit1");

    if (ID.value.length > 9) {
        alert("error id");
        return;
    }
    for (let i = 0; i < ID.value.length - 1; i++) {

        if (i % 2 == 0) {
            digit = ID.value[i] * 1;
        }
        else {
            digit = ID.value[i] * 2;
        }
        if (digit >= 10) {
            digit = (digit % 10) + Math.floor(digit / 10);
        }
        sum += digit;
    }
    if ((sum + ID.value[8] * 1) % 10 == 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }

    ID.value = "";

}