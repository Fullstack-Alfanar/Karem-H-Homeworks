// question 1

function Avg(numbers) {
    let i, sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [56,43,23,67,79,89,78,67];
// let arr3 = [12,666,3344,987,12,33,29];
// console.log(Avg(arr1)); 
// console.log(Avg(arr2)); 
// console.log(Avg(arr3)); 

//------------------------------------------------------

// question 2

function minimum(numbers) {
    let i, min = numbers[0];
    for (i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return "the minimum is " + min;
}

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [56,43,23,67,79,89,78,67];
// let arr3 = [12,666,3344,987,12,33,29];
// console.log(minimum(arr1)); 
// console.log(minimum(arr2)); 
// console.log(minimum(arr3));

//------------------------------------------------------

// question 3

function howLongIsTheLongestString(strings) {
    let i, maxLength = 0;
    for (i = 0; i < strings.length; i++) {
        if (strings[i].length > maxLength) {
            maxLength = strings[i].length;
        }
    }
    return  maxLength;
}

// // arr1=["John","David","Alex","Mohammad"];
// // arr2=["Karem","Ahmad","ddcxxcvde","Mohammad"];
// // arr3=["Ali","Foaad","Fathi"];
// // console.log(howLongIsTheLongestString(arr1));
// // console.log(howLongIsTheLongestString(arr2));
// // console.log(howLongIsTheLongestString(arr3));

// //------------------------------------------------------

// // question 4

function TheLongestString(strings){
    let i;
    for(i=0;i<strings.length;i++){
// in the condetion the function from question 3
        if(strings[i].length==howLongIsTheLongestString(strings)){
            return "The longest string is "+strings[i];
        }
    }
}

// arr1=["John","David","Alex","Mohammad"];
// arr2=["Karem","Ahmad","ddcxxcvde","Mohammad"];
// arr3=["Ali","Foaad","Fathi"];
// console.log(TheLongestString(arr1));
// console.log(TheLongestString(arr2));
// console.log(TheLongestString(arr3));

//------------------------------------------------------

// question 5

function EGAvarege(numbers) {
    let i, avg = Avg(numbers), cnt = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] >= avg) {
            cnt++;
        }
    }
    return "There are " + cnt + " numbers equal or greater than  the avarege";
}

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [56, 43, 23, 67, 79, 89, 78, 67];
// let arr3 = [12, 666, 3344, 987, 12, 33, 29];
// console.log(EGAvarege(arr1));
// console.log(EGAvarege(arr2));
// console.log(EGAvarege(arr3));

//------------------------------------------------------

// question 6

function isPrime(num) {
    let cnt = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            cnt++;
        }
    }
    if (cnt <= 2) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isPrime(7));
// console.log(isPrime(50));
// console.log(isPrime(13));

//------------------------------------------------------

// question 7

function allPrime(numbers) {
    let i;
    for (i = 0; i < numbers.length; i++) {
// in the condetion the function from question 6
        if (!isPrime(numbers[i])) {
            return false;
        }
    }
    return true;
}

// let arr1 = [1, 13, 1, 7, 5];
// let arr2 = [53, 41, 23, 67, 79, 18, 11, 67];
// let arr3 = [12, 666, 3344, 987, 12, 33,];
// console.log(allPrime(arr1));
// console.log(allPrime(arr2));
// console.log(allPrime(arr3));





