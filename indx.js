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

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.min(a, b, c, d), Math.round(d));
console.log(a + "0");
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

let num = 10;

console.log(10 - 8);

let flt = 10.4;

console.log(Math.floor(flt));

console.log(Math.random(0, 1, 2, 3, 4));
// end 26