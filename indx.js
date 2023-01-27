// start 1
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.color = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
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
document.write("Iam In Page");
// alert("stop");
// end 9
// start 10
var my_title = "elzero", my_description = "elzero web school", my_date = "25/10";
var my_html = `<div class = 'card'>

    <h1>"${my_title}"</h1>
    <p>"${my_description}"</p>
    <span>"${my_date}"</span>
</div>`;

for (let i = 0; i <= 3; i++) {
    document.write(my_html);
}

var number_one = 10;
var number_tow = 20;

console.log(`${number_one}${number_tow}`);
console.log(typeof number_one + typeof number_tow);
console.log(`${number_one}${number_tow}`);
console.log(typeof number_one + typeof number_tow);
console.log(number_tow + "\n" + number_one);
console.log(`${number_tow}
${number_one}`);

console.log(elzero.innerHTML);
console.log(typeof elzero);

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

let num = 100;

if (num < 10) {
    document.write("00" + num);
} else if (num > 10 || num < 100) {
    document.write("00" + num);
} else if (num >= 100) {
    document.write(num);
}

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

let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && num3 !== num2) {
    document.write("<br>" + num3 + "Is Larger Than" + num1 + "And Type string Not The Same Type As number");
}
if (num3 > num1 && num3 == num2 && num3 !== num2) {
    document.write("<br>" + num3 + "Is Larger Than 10 And Value Is The Same As" + num3 + " And Type string Not The Same Type As number");
}
if (num3 !== num1 && num3 !== num2) {
    document.write("<br>" + `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
}
// end 37