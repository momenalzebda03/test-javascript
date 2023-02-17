// start 1
// document.write("<h1>Elzero</h1>");
// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.color = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";
// ---------------------------
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;", "color: green; font-size: 40px; font-weight: bold;", "color: white; font-size: 40px;  background-color: blue;");
// ---------------------------
console.group("group 1");
console.log("message one");
console.log("message tow");
console.group("child group");
console.log("message one");
console.log("message tow");
console.group("grand child group");
console.log("message one");
console.log("message tow");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("message one");
console.log("message tow");
console.table(["elzero", "ahmed", "sameh", "gamal", "aya"]);
// ---------------------------
console.log("Iam In Console");
// document.write("Iam In Page");
// alert("stop");
// end 9
// start 10
// var my_title = "elzero", my_description = "elzero web school", my_date = "25/10";
// var my_html = `<div class = 'card'>

//     <h1>"${my_title}"</h1>
//     <p>"${my_description}"</p>
//     <span>"${my_date}"</span>
// </div>`;

// for (let i = 0; i <= 3; i++) {
//     document.write(my_html);
// }

var number_one = 10;
var number_tow = 20;

console.log(`${number_one}${number_tow}`);
console.log(typeof number_one + typeof number_tow);
console.log(`${number_one}${number_tow}`);
console.log(typeof number_one + typeof number_tow);
console.log(number_tow + "\n" + number_one);
console.log(`${number_tow}
${number_one}`);

// console.log(elzero.innerHTML);
// console.log(typeof elzero);

console.log(`\`I'm In \n\\\\\nLove \\\\ """ '''\n++ With ++\n\\"""\\"""\n""javascript""\`\``);

// let a = 21;
// let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
// end 17

// start 18
// let num = 3;

// console.log(num + num);
// console.log(num + num + false);
// console.log(num + num - false);
// console.log(num * num - true - true - true);
// console.log(num + num - false - false);
// console.log(Number(num) + Number(num));

// let num = +"10";

// console.log(num + num);
// console.log(num + num + false);
// console.log(num + num - false);
// console.log(num + num - false - false);

let points = 10;

points += 3;

console.log(points); // 13

points -= 5;

console.log(points); // 8;
// end 22

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
let d = 2.4;

// console.log(Math.min(a, b, c, d), Math.round(d));
// console.log(a + "0");
// start 23
console.log(100_000);
console.log(100000);
console.log(5e4 + 5e4);
console.log(50000 + 50000);
console.log(1000 * 100);
console.log(100 * 1000);
console.log(200000 - 100000);
console.log(300000 - 200000);
console.log(400000 - 300000);
console.log(500000 - 400000);
console.log(600000 - 500000);
console.log(700000 - 600000);
console.log(800000 - 700000);
console.log(Math.min(9007199254740992, 9007199254740991));
console.log(Math.max(16, 15));

let myVar = +"100.56789";

console.log(Math.floor(myVar));
console.log(Number(myVar.toFixed(2)));

// let num = 10;

console.log(10 - 8);

let flt = 10.4;

console.log(Math.floor(flt));

console.log(Math.random(0, 1, 2, 3, 4));
// end 26

var my_name = "  momen  ";

console.log(my_name.trim().charAt(4).toUpperCase());

// start 27
// let a = "Elzero Web Scholl";

// let charat2 = a.charAt(2).toUpperCase();
// let charat3 = a.charAt(3);
// let charat4 = a.charAt(4);
// let charat5 = a.charAt(5);

// console.log(charat2 + charat3 + charat4 + charat5);
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.split("Web Scholl"));

// let substr1 = a.substr(0, 6);
// let substr2 = a.substr(11);

// console.log(substr1 + " " + substr2);
// console.log(a.toLowerCase(0));

let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase(0));
console.log(userName.charAt(0).toLowerCase(0).repeat(3));

let word = "Elzero";

console.log(word.includes("z"));
console.log(word.startsWith("E"));
console.log(word.endsWith("o"));
// end 30

// start 31

console.log(100 == "100");
console.log(100 < 1000);
console.log(110 > 100 || 10 < 20);
console.log(-10 == "-10");
console.log(+-50 != +"-40");
console.log(+10 != -"-40");
console.log(+"10" === 10);
console.log(+20 > false);

// let num1 = 10;
// let num2 = 20;

// console.log(num1 != num2);
// console.log(num2 != num1);
// console.log(num1 < num2);
// console.log(num2 > num1);
// console.log(num1 !== num2);
// console.log(num2 !== num1);

// let a = 20;
let b = 30;
let c = 10;

// console.log(a < b && a > c || a > b);
// console.log(a < b && a > c);
// console.log(!(a == b) && !(a == b) && !(a == c) && !(a == c));
// end 32

// start 33
let a = 10;

a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("unknown");

let st = "Elzero Web School";

if (st.length * 2 == "34") {
    console.log("Good");
}
if (st.toLowerCase().charAt(7) === "w") {
    console.log("Good");
}
if (st !== "string") {
    console.log("Good");
}
if (typeof Number(st) === "number") {
    console.log("Good");
}
if ("ElzeroElzero" === "ElzeroElzero") {
    console.log("Good");
}

// let num = 100;

// if (num < 10) {
//     document.write("00" + num);
// } else if (num > 10 || num < 100) {
//     document.write("00" + num);
// } else if (num >= 100) {
//     document.write(num);
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 === str) {
//     document.write("<br>" + `${num1} Is The Same Value As ${str}`);
// }
// if (num1 == str) {
//     document.write("<br>" + `${num1} Is The Same Value As ${str} But Not The Same Type`);
// }
// if (num1 != str2) {
//     document.write("<br>" + `${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// }
// if (str !== str2) {
//     document.write("<br>" + `${str} Is The Same Type As ${str2} But Not The Same Value`);
// }

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && num3 !== num2) {
//     document.write("<br>" + num3 + "Is Larger Than" + num1 + "And Type string Not The Same Type As number");
// }
// if (num3 > num1 && num3 == num2 && num3 !== num2) {
//     document.write("<br>" + num3 + "Is Larger Than 10 And Value Is The Same As" + num3 + " And Type string Not The Same Type As number");
// }
// if (num3 !== num1 && num3 !== num2) {
//     document.write("<br>" + `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
// }
// end 37
// start 38

let jop = "IT";
let salary = 0;

switch (jop) {
    case (jop = "Manager"):
        salary = 8000;
        console.log(salary);
        break;
    case jop = "IT": case jop = "Support":
        salary = 6000;
        console.log(salary);
        break;
    case jop = "Developer": case jop == "Desinger":
        salary = 7000;
        console.log(salary);
        break;
    default:
        salary = 4000;
        console.log(salary);
}

let holidays = 0;
let money = 0;

if (holidays == 0) {
    money = 5000;
    console.log(`my money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`my money is ${money}`);
} else if (holidays == 3) {
    money = 2000;
    console.log(`my money us ${money}`);
}

// let day = "Friday";

// switch (day.charAt(0).toUpperCase() + day.slice(1)) {
//     case day = "Friday": case day = "Saturday": case day = "Sunday":
//         document.write("<br>" + "No Appointments Available");
//         break;
//     case day = "Monday": case day = "Thursday":
//         document.write("<br>" + "From 10:00 AM To 5:00 PM");
//         break;
//     case day = "Tuesday":
//         document.write("<br>" + "From 10:00 AM To 6:00 PM");
//         break;
//     case day = "Wednesday":
//         document.write("<br>" + "From 10:00 AM To 7:00 PM");
//         break;
//     default:
//         document.write("<br" + "ist not a valid day");
// }
// end 39

// start 40

let zero = 0;
// let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.push("momen");
// console.log(my.reverse().slice(counter));

// my.pop();
// my.shift();
// console.log(my.reverse().slice(counter));

// my.push("elzero");
// my.shift();
// my.shift();
// console.log(my.slice(counter));

// let o = my[counter][zero].toUpperCase();

zero++;
// counter++;

// console.log(my[zero][counter] + o);

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop();
console.log(myFriends);

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.shift();
// friends.pop()
// console.log(friends);

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr);

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

words.shift(), words.shift(); if (words = "Elzero") { let elzero = "zero"; console.log(elzero.toUpperCase()); }

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack[1] == needle) {
    console.log("found");
} else {
    console.log("not JS here im soory");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = ["fxy"];

console.log(allArrs); // fxy

// end 47
// start 48

// let start = 10;
// let end = 100;
// let exelude = 40;

// for (let i = start; i <= end; i += start) {
//     if (i == exelude) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i >= end; i--) {
//     if (i < start) {
//         console.log(`0${i}`);
//     }
//     if (i == stop) {
//         break;
//     }
// }

// let start = 1;
// let end = 6;
// let brak = 2;

// for (let i = start; i <= end; i++) {
//     console.log(i);
//     for (let j = brak; j <= end; j += brak) {
//         if (j == end) {
//             break;
//         }
//         console.log(`--${j}`);
//     }
// }

// let indx = 10;
// let jump = 2;
// let end = 0;

// let i = indx;
// for (; ;) {
//     i >= end;
//     if (i == jump) {
//         break;
//     }
//     console.log(i);
//     i -= jump;
// }

// let friend = ["Ahemd", "Sayed", "Eman", "Mahmoud", "Amera", "Osama", "Sameh"];
// let latter = "a";

// for (let i = 0; i <= 6; i++) {
//     if (friend[i].charAt(0).toLowerCase() == latter) {
//         continue;
//     }
//     console.log(`${i} => ${friend[i]}`);
// }

// let start = 0;
// let suappedname = "elZerO";
// let resart = "";

// for (let i = start; i < suappedname.length; i++) {
//     if (suappedname[i] == suappedname[i].toUpperCase()) {
//         resart += suappedname[i].toLowerCase();
//     } else {
//         resart += suappedname[i].toUpperCase();
//     }
// }
// console.log(resart);

// let start = 0;
// let max = [1, 2, 3, "A", "B", "C", 4];

// for (let i = max[start]; i <= max.length; i++) {
//     if (typeof max[i] == "string") {
//         continue;
//     }
//     console.log(max[i]);
// }
// end 53

// start 54

// let MyAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "Samera"];
// let MyEmployee = ["Amged", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anuwar"];

// for (let i = 0; i < MyAdmin.length; i++) {
//     if (MyAdmin[i].charAt(0) == 'S') {
//         MyAdmin.splice(i + 1);
//         document.write(`<div>We Have ${MyAdmin.length} Admins</div>`);
//     }
// }
// document.write("<hr>");
// document.write(`<div>`);
// for (let j = 0; j < MyAdmin.length; j++) {
//     document.write(`The Admin For Team ${j + 1} Is ${MyAdmin[j]} <br>`);
//     document.write(`<h3>Team Members:</h3>`);
//     for (let q = 1; q < 4; q++) {
//         for (let x = 0; x < MyEmployee.length; x++) {
//             if (MyAdmin[j].charAt(0) == MyEmployee[x].charAt(0)) {
//                 document.write(`<p>- ${q} ${MyEmployee[x]}</p>`);
//             }
//         }        
//     }
//     document.write("<hr>");
// }
// document.write(`</div>`);

let frindes = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indx = 0;
let counter = 0;

while (indx < frindes.length) {
    if (frindes[indx] == "Sayed") {
        console.log(`1 => ${frindes[indx]}`);
    }
    if (frindes[indx] == "Mahmoud") {
        console.log(`2 => ${frindes[indx]}`);
    }
    indx++;
}

// for (let i = 0; i < frindes.length; i++) {
//     if (typeof frindes[i] == "number") {
//         continue;
//     }
//     if (frindes[i].charAt(0) == "A") {
//         continue;
//     }
//     console.log(frindes[i]);
// }
// end 56

// start 57
function ShowDetails(a, b, c) {
    typeof a == "string" && typeof c == "boolean" && c == true ? document.write(`Hello ${a}, Your Age Is ${b}, Your Are Avalibles For Here<br>`) :
        typeof a == "string" && typeof c == "boolean" && c == false ? document.write(`Hello ${a}, Your Age Is ${b}, Your Are Not Avalibles For Here<br>`) :
            typeof a == "number" && typeof c == "boolean" && c == true ? document.write(`Hello ${b}, Your Age Is ${a}, Your Are Avalibles For Here<br>`) :
                typeof a == "number" && typeof c == "boolean" && c == false ? document.write(`Hello ${b}, Your Age Is ${a}, Your Are Not Avalibles For Here<br>`) :
                    typeof a == "boolean" && a == true && typeof b == "number" ? document.write(`Hello ${c}, Your Age Is ${b}, Your Are Avalibles For Here<br>`) :
                        typeof a == "boolean" && a == true && typeof b == "string" ? document.write(`Hello ${b}, Your Age Is ${c}, Your Are Avalibles For Here<br>`) :
                            typeof a == "boolean" && a == false && typeof b == "number" ? document.write(`Hello ${c}, Your Age Is ${b}, Your Are Not Avalibles For Here<br>`) :
                                typeof a == "boolean" && a == false && typeof b == "string" ? document.write(`Hello ${b}, Your Age Is ${c}, Your Are Not Avalibles For Here<br>`) : document.write("Im Soory Not Here The Fun");
}

ShowDetails("Osama", 38, true);
ShowDetails(38, "Osama", true);
ShowDetails(true, 38, "Osama");
ShowDetails(false, "Osama", 38);

function sayHello(theName, theGender = "") {
    if (theGender == "Male") {
        theGender = "Mr";
    } else if (theGender == "Female") {
        theGender = "Miss";
    }
    document.write(`<br>Hello ${theGender} ${theName}`);
}

sayHello("Osama", "Male");
sayHello("Eman", "Female");
sayHello("Sameh");

function calculate(firstNum, secondNum, operation) {
    if (secondNum == undefined) {
        document.write("<br><br>" + "Second Number Not Found");
    } else if (operation == undefined) {
        document.write(`<br> ${firstNum + secondNum}`);
    }
    if (operation == "add") {
        document.write(`<br> ${firstNum + secondNum}`);
    } else if (operation == "subtract") {
        document.write(`<br> ${firstNum - secondNum}`);
    } else if (operation == "multiply") {
        document.write(`<br> ${firstNum * secondNum}<br>`);
    }
}

calculate(20);
calculate(20, 30);
calculate(20, 30, 'add');
calculate(20, 30, 'subtract');
calculate(20, 30, 'multiply');

function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 110) {
        document.write("<br><br>" + "Age Out Of Range" + "<br>");
    } else {
        document.write(` ${theAge} year<br>`);
        var months = theAge * 12;
        document.write(` ${months} Months<br>`);
        var months = months * 4.34 + 2;
        document.write(` ${months} weeks<br>`);
        var months = months * 7;
        document.write(` ${months} dayes<br>`);
        var months = months * 24;
        document.write(` ${months} hours<br>`);
        var months = months * 60;
        document.write(` ${months} minutes<br>`);
        var months = months * 60 * 60;
        document.write(` ${months} seconds<br>`);
    }
}

// ageInTime(110);
ageInTime(19);

function createSelectBox(startYear, endYear) {
    document.write("<br><select>");
    for (let i = startYear; i <= endYear; i++) {
        document.write("<option>");
        document.write(i + "<br>");
        document.write("</option>");
    }
    document.write("<select><br><br>");
}
createSelectBox(2000, 2023);

function multiply(...array) {
    var resart = 1;
    for (let q = 0; q < array.length; q++) {
        if (typeof array[q] == "string") {
            continue;
        } else {
            resart = parseInt(array[q - 1]) * parseInt(array[q]);
        }
    }
    return resart + "<br>";
}

document.write(multiply(10, 20));
document.write(multiply("A", 10, 30));
document.write(multiply(100.5, 10, "B"));
// end 63

// start 64

let names = function (...array_string) {
    console.log("String");
    for (let i = 0; i < array_string.length; i++) {
        names = `[${array_string[i]}],`;
        console.log(names);
    }
    console.log("=> Done!");
    names == NaN ? console.log() : names = "";
    return names;
}

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

let myNumbers = [20, 50, 10, 60];

let calc = (one, tow, ...nums) => nums[+(!Array.isArray(myNumbers))] + one + tow;

console.log(calc(20, 50, 10, 60));

// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         if (zName[6] == "M") {
//             zName = "Osama M.";
//         }
//         if (zName[6] == "a") {
//             zName = "Ahemd a.";
//         }
//         let resart = `Hello ${zName}, `;
//         return resart;
//     }
//     function ageWithMessage(zAge) {
//         let resart = `Your Is ${zAge}, `;
//         return resart;
//     }
//     function countryTwoLetters(zCountry) {
//         let resart = `Your Live In ${zCountry[0]}${zCountry[1]}`;
//         return resart;
//     }
//     function fullDetails() {
//         return namePattern(zName) + ageWithMessage(zAge) + countryTwoLetters(zCountry);
//     }
//     return fullDetails();
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

function itsMe() {
    return `Iam A Normal Function`;
}

itsMe = () => { return `Iam A Normal Function`; }

console.log(itsMe());

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => { return `${protocol}://www.${web}.${tld}`; }

console.log(urlCreate("https", "elzero", "org"));

var checker = (zName) => { return (status) => { return (salary) => { return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`; }; }; }

console.log(checker("Osama")("Available")(4000));
console.log(checker("Ahmed")("Not Available")());

function specialMix(...data) {
    let resart = 0;
    for (let x = 0; x < data.length; x++) {
        if (isNaN(parseInt(data[x])) == false) {
            resart += parseInt(data[x]);
        }
    }
    if (resart === 0) {
        resart = "this the string";
    }
    return resart;
}

console.log(specialMix(10, 20));
console.log(specialMix("20Test", "Testing", "20Cool"));
console.log(specialMix("Testing", "10Testing", "40Cool"));
console.log(specialMix("Test", "Cool", "Test"));
// end 70
// start 71

let string = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";
let slout = string.split("").filter((ele) => ele == "," ? "" : !isNaN(parseInt(ele)) ? "" : ele).slice(true, -isNaN(string)).join("").replaceAll("_", " ");
console.log(slout);

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let mix_map = mix.map((ele) => !isNaN(parseInt(ele)) ? "" : ele).join("");
console.log(mix_map);

let myString = "EElllzzzzzzzeroo";
let pushArray = [];
myString.split("").filter((ele) => !pushArray.includes(ele) ? pushArray.push(ele) : "");
console.log(pushArray.join(""));

let myArray = ["E", "l", "z", ["e", "r"], "o"];
const loukhere = myArray.reduce((total, amount) => total.concat(amount), []);
console.log(loukhere.join(""));

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let my_map = numsAndStrings.map((ele) => typeof ele == "string" ? "" : -ele).filter((ele) => ele);
console.log(my_map);

let nums = [2, 12, 11, 5, 10, 1, 99];
let my_nums = nums.reduce((ele1, ele2) => ele2 % 2 == 0 ? ele1 * ele2 : ele1 + ele2, 1);
console.log(my_nums);

// end 78