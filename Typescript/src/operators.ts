// Arithemetic Operators

let num1 = 45;
let num2 = 18;
let num3 = 7;
let num4 = 10;

let sum1 = num1+num3;
let sum2 = num2+num4;

let sub1 = num3-num2;
let sub2 = num1-num4;

let mul1 = num1*num2*num3;
let mul2 = num1*num4;

let div1 = num1/num2;
let div2 = num4/num3;

let rem1 = num1%num2;
let rem2 = num4%num3;

console.log(sum1);
console.log(sum2);
console.log(sub1);
console.log(sub2);
console.log(mul1);
console.log(mul2);
console.log(div1);
console.log(div2);
console.log(rem1);
console.log(rem2);


// Comparison Operators

let x = 45;
let y = 18;

let isLooseEqual = x==y;
let isStrictEqual = x===y;
let notEqual = x!=y; 
let greaterThan = x>y;
let lessThan = x<y;
let greaterThanEqual = x>=y;
let lesThanEqual = x<=y;

console.log(isLooseEqual);
console.log(isStrictEqual);
console.log(notEqual);
console.log(greaterThan);
console.log(lessThan);
console.log(greaterThanEqual);
console.log(lesThanEqual);

// Logical Operators
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse; // false
let orResult = isTrue || isFalse; //true
let notResult = !isTrue; // false

//Assignment Operators
let num = 5;
num+=5 // num = num + 5;
console.log(num);
num-=4 // num = num - 4;
console.log(num);
num*=3 // num = num * 3;
console.log(num);
num/=2 // num = num / 2;
console.log(num);


// Terenary Operator
var age1 = 20;
var age2 = 10;
var message1 = age1>=18 ? "Adult" : "Minor"
var message2 = age2>=18 ? "Adult" : "Minor"
console.log(message1);
console.log(message2);
