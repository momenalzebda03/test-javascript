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

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log(`\`I'm In \n\\\\\nLove \\\\ """ '''\n++ With ++\n\\"""\\"""\n""javascript""\`\``);

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
// end 17