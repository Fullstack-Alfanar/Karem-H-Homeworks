// question 1

function fullName() {
    let fName, lName;
    fName = prompt("please enter your first name");
    lName = prompt("please enter your last name");
    alert(fName + " " + lName);
}
// fullName();
// fullName();

// ----------------------------------------------------

// question 2

function sumAvg(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let avg = sum / 3;
    console.log("the sum is " + sum + " the avarege is " + avg);
}
// sumAvg(15,67,22);
// sumAvg(Math.random()*100,Math.random()*100,Math.random()*100);
// sumAvg((+prompt("enter num1")),(+prompt("enter num2")),(+prompt("enter num3")));

// ----------------------------------------------------

// question 3

function row(len) {
    let string = "";
    for (let i = 0; i < len; i++)
        string += "*";
    return string;
}

function square(size) {
    let string = "";
    for (let i = 0; i < size; i++) {
        string += row(size);
        string += "\n";
    }
    console.log(string);
}
square(+prompt("enter num"));

// ----------------------------------------------------

// question 4

function numbersRow(limit) {
    let string = "";
    for (let i = 1; i <= limit; i++)
        string += i;
    return string;

}

function numbersPyramid(size) {
    let string = "";
    for (let i = 1; i <= size; i++) {
        string += numbersRow(i);
        string += "\n";
    }
    console.log(string);
}
// numbersPyramid(4);

// ----------------------------------------------------

// question 5

function row(len) {
    let string = "";
    for (let i = 0; i < len; i++)
        string += "*";
    return string;
}

function starsPyramid1(size) {
    let string = "";
    for (let i = size; i > 0; i--) {
        string += row(i);
        string += "\n";
    }
    console.log(string);
}
// starsPyramid(5);

// ----------------------------------------------------

// question 6

function row1(len) {
    let string = "";
    for (let i = 1; i <= len; i++)
        string += i;
    for (let i = 0; i < len; i++)
        string += "*";
    return string;
}

function Pyramid(size) {
    let string = "";
    for (let i = size; i > 0; i--) {
        string += row1(i);
        string += "\n";
    }
    console.log(string);
}
// Pyramid(+prompt("enter num1"));

// ----------------------------------------------------

// question 7

function starsPyramid2(size) {
    let string="";
    for (let i = 1; i <= size; i++){
        string += row(i);
        string += "\n";
    }
    console.log(string);
}

function pyramid2(size){
    starsPyramid1(size);//quastion 5
    starsPyramid2(size);
}
// pyramid2(+prompt("enter num"));







