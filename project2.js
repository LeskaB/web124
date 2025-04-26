// Aksel Bejarano 4/8/25
let myName = "Aksel Bejarano";
let para1 = document.getElementById("p1");
para1.textContent = myName;


let n1 = 14;
let n2 = 28;
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;


let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;


let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;


let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;


let ageCompare = 23 > n1;
document.getElementById("p6").textContent = ageCompare;