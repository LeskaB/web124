// Aksel Bejarano

let chosenNum;
console.log(chosenNum);
document.getElementById("calButton").addEventListener("click", calGen);

function calGen() {
    //Initialize HTML Variable Text
    let textAdd = "";
    let textSub = "";
    let textMul = "";
    let textDiv = "";

    chosenNum = document.getElementById("num").value;
    //Validate the input to be real numbers
    if (chosenNum === null || chosenNum === undefined || String(chosenNum).trim() === "") {
        console.log("Haha LOL");
    }
    else {
        //Calculate the chosen number
        console.log(chosenNum);
        //Add
        for (let i = 1; i < 11; i++) {
            console.log(`${i} + ${chosenNum} = ${i + Number(chosenNum)}`);
            textAdd += `${i} + ${chosenNum} = ${i + Number(chosenNum)} <br>`;
        }
        //Sub
        for (let i = 1; i < 11; i++) {
            console.log(`${i} - ${chosenNum} = ${i - Number(chosenNum)}`);
            textSub += `${i} - ${chosenNum} = ${i - Number(chosenNum)} <br>`;
        }
        //Mul
        for (let i = 1; i < 11; i++) {
            console.log(`${i} x ${chosenNum} = ${i * Number(chosenNum)}`);
            textMul += `${i} x ${chosenNum} = ${i * Number(chosenNum)} <br>`;
        }
        //Div
        for (let i = 1; i < 11; i++) {
            console.log(`${i} / ${chosenNum} = ${i / Number(chosenNum)}`);
            textDiv += `${i} / ${chosenNum} = ${(i / Number(chosenNum)).toFixed(2)} <br>`;
        }
        //Append results to page
        document.getElementById("resAdd").innerHTML = textAdd;
        document.getElementById("resSub").innerHTML = textSub;
        document.getElementById("resMul").innerHTML = textMul;
        document.getElementById("resDiv").innerHTML = textDiv;
    }
}

