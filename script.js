console.log("connexted");


// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// make an attay of integers and  make an array of odd numbers and make an array of even numbers  and  push them into the array of  integers use while loop


let intArr = [1,2,4,5,6,7,8,9,10,11,12,13,14];
let oddArr = [];
let evenArr = [];

while (true) {
    if (intArr.length === 0) {
        break;
    }
    if (intArr[0] % 2 === 0) {
        evenArr.push(intArr.shift());
    } else {
        oddArr.push(intArr.shift());
    }
}

console.log(`this is integer array\n: ${intArr}`);
console.log(`this is even array\n: ${evenArr}`);
console.log(`this is odd array\n: ${oddArr}`);

