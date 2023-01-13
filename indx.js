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
alert("stop");
// end 9