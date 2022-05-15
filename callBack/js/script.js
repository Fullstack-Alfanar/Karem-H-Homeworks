// question 1

// function call_back(){
//     alert("karem hamze");
// }

// function myName(callBack){
//     callBack();
// }

// myName(call_back);

// =========================================

// question 2 

// function cool(callback) {
// 	callback();
// }

// function ramdonaly(){
//     alert(Math.random()*100);
// }

// cool(ramdonaly);

// =========================================

// question 3

// function nice(callback) {
// 	callback(42);
// }

// function showNumber(num){
//     alert(num);
// }

// nice(showNumber);

// =========================================

// question 4

function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    document.write("Num: " + num);
}

function ramdonaly5(num1, num2, num3, num4, num5) {
     let arr = [num1, num2, num3, num4, num5];
    return arr[Math.floor(Math.random() * arr.length)];
}

amazing(ramdonaly5);