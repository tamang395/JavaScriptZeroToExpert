//naming convenstion
//always use camel case when you are declaring variable and variable should be descriptive

let fullName = "Prithvinarayan"
let firstJob = "Programmer"
let countryName = "India"
let PI = 3.14;

//Data types
//There are 5 data types in js number, string, boolean, undefined, null

let ageOfPrithvi = 23;//number it can be floating point number
let firstName = "Prithvinarayan";//string is the sequence of character
let isAbleToWalk = true;//it contains only true or false
let dogName;//it will undefined without initialized

//Understanding let const and var keyword

let myJob = "Computer Operator";//let is used to declare variable and it can be mutate lateste version (recommended)
myJob = "Software Developer"
const birthYear = 1998;//const is never be reassigned in one application
// birthYear =1999;   it will throw error
var myAge = 23;//var is same as let but it having some older feature of js
myAge = 24;

//Understanding Basic Operators
//Mathmetical Assigement Operators  +,-,*,/,%;

const numberOfApples = 4;// if we want to add number it will give sum
const numberOfOranges = 5;
const totalFruites = numberOfApples + numberOfOranges;
console.log(`Number of Apples ${numberOfApples} and Number of Oranges ${numberOfOranges} total number of fruites ${totalFruites}`)

const fName = "Prithvinarayan";// But the when we working on string it will concaticant that string
const lName = "Tamang";
const fullNameOfPrithvi = fName + lName;
console.log(`Full name of Prithvi ${fullNameOfPrithvi}`);

const ageOfPrithviInFuture = 2037 - 1998;//It will subtracnt the number but in case of string it cant be the subtract the sting; it will throuw error
console.log(`Age of Prithvi in 2037 ${ageOfPrithviInFuture}`)

console.log(2 * 3, 2 - 3, 4 + 4, 4 / 2, 4 % 2);//all areathmetic operation will perform in single console log;

//Assigenment Operator =
let x = 10 + 5;
//compound Assigenment Operators
x += 10;//x = 15 + 10 = 25
x *= 4;//x = 25 * 4 = 100
x /= 5; //x = 100 / 5;
x++;
x--;
console.log(x);

//Comparision OPerators
//Comparison Operator should be boolean True or false >----- >, <, <=, >=, ===(Stricly equal to)

const heightPrithvi = 5.3;
const heightKhali = 7.1;
console.log(heightKhali > heightPrithvi);

//Operator Precednecy 
//it follows BODMAS rules for bracket then division and multiplication and addistion and subtraction

const evalueation = 3 + 4 * (4 * 3);
console.log(evalueation);

