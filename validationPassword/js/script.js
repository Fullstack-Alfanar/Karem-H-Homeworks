document.getElementById("lowercase").disabled = true;
document.getElementById("uppercase").disabled = true;
document.getElementById("number").disabled = true;
document.getElementById("length").disabled = true;
document.getElementById("specialCharacters").disabled = true;


function valid() {
    let myInput = document.getElementById("psw");
    let lowercase = document.getElementById("lowercase");
    let uppercase = document.getElementById("uppercase");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
    let special=document.getElementById("specialCharacters");

    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (myInput.value.match(format)){
        special.checked = true;
    }
    else {
        special.checked = false;
    }


    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        lowercase.checked = true;
    }
    else {
        lowercase.checked = false;
    }


    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        uppercase.checked = true;
    }
    else {
        uppercase.checked = false;
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.checked = true;
    }
    else {
        number.checked = false;
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.checked = true;
    }
    else {
        length.checked = false;
    }
}
