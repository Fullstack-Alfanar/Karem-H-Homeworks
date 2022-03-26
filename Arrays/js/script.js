// quastion 1

// var names = [];
// for (var i = 0; i < 5; i++) {
//     names[i] = prompt("enter name");
// }
// console.log(names[0], names[4]);
// console.log(names[0], "\n", names[4]);
// names = names.reverse();
// console.log(names);

//-------------------------------------------------

// quastion 2

// var fruit = [];
// for (var i = 0; i < 4; i++) {
//     fruit[i] = prompt("enter name of fruit");
// }
// for (i = 0; i < 4; i++) {
//     console.log(fruit[i]);
// }

//-------------------------------------------------

// quastion 3

// var grades = [90, 80, 70, 75, 66, 98, 36, 55, 120, -44];
// for (var i = 0; i < grades.length; i++) {
//     if (grades[i] < 0 || grades[i] > 100){
//         console.log(grades[i]);
//     }
// }

//-------------------------------------------------

// quastion 4

// var numbers = [90, 80, 70, 75, 66, 98, 36, 55, 120, 6, 25, 57, 86, 74, 25, 75, 23, 57, 54, 22];
// var sum = 0, avg = 0, max = 0, min = numbers[0];
// console.log(numbers.reverse());
// for (var i = 0; i < numbers.length; i++) {
//     sum+=numbers[i];
//     if(numbers[i]>max){
//         max=numbers[i];
//     }
//     if(numbers[i]<min){
//         min=numbers[i];
//     }
// }
// console.log("the sum is ",sum);
// console.log("the avg is ",sum/numbers.length);
// console.log("the max is ",max);
// console.log("the min is ",min);

//-------------------------------------------------

// quastion 21

// var n,i;
// n=+prompt("enter a number");
// var temp=n;

//-------------------------------------------------

// quastion 22

// var n, i;
// n = +prompt("enter number");
// while (n > 0) {
//     for (i = 1; i <= n; i++){
//         document.write(i);
//     }
//     document.write("\n");
//     n = +prompt("enter number");
// }


// ###############################################################################################challege question

// var n, i, j;
// var square = "";
// n = +prompt("enter number");
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n; j++) {
//         square += "*";
//     }
//     square += "<br>";
// }
// document.write(square);

// ###############################################################################################challege question

// var width, height, i, j;
// var square = "";
// height = +prompt("enter width");
// width = +prompt("enter height");
// for (i = 1; i <= width; i++) {
//     for (j = 1; j <= height; j++) {
//         square += "*";
//     }
//     square += "<br>";
// }
// document.write(square);

// _________________________________________________

// ###############################################################################################challege question

var n, i, j;
var pyramid = "";
n = +prompt("enter number");

for (i = n; i > 0; i--) {
    var temp=i;
    while(temp!=0){
        pyramid+="*";
        temp--;
    }
    pyramid += "<br>";
}
document.write(pyramid);




