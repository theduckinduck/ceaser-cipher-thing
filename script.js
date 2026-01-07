console.log("Script loaded successfully.");

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encrypt() {
    console.log("encrypt")
    // get user message text
    let box = document.getElementById("messageInput");
    let userText = box.value;
    console.log(userText);

    // get key n parseInt
    let box2 = document.getElementById("key");
    let key = parseInt(box2.value);
    // make empty string to store results
    let result = "";
    // convert message to numbers w a for loop
    for (let i = 0; i < userText.length; i++) {
        // get current char .charAt(i) and turn lower case .toLowerCase()
        let currentChar = userText.charAt(i).toLowerCase();
        // get index of char indexOf
        let index = alpha.indexOf(currentChar);
        // apply formula (x + key) % 26 to get encrpyted number
        let formulaResult = (index + key) % 26
        // use encrypted number as index in the array alpha[encryptedIndex]
        let encryptedChar = alpha[formulaResult];
        // concat to result string
        result += encryptedChar;
    }
    // put result in box
    console.log(result);
    let theBox = document.getElementById("result");
    theBox.value = result;
}

function decrypt() {
    console.log("decrypt")
        console.log("encrypt")
    // get user message text
    let box = document.getElementById("messageInput");
    let userText = box.value;
    console.log(userText);

    // get key n parseInt
    let box2 = document.getElementById("key");
    let key = parseInt(box2.value);
    // make empty string to store results
    let result = "";
    // convert message to numbers w a for loop
    for (let i = 0; i < userText.length; i++) {
        // get current char .charAt(i) and turn lower case .toLowerCase()
        let currentChar = userText.charAt(i).toLowerCase();
        // get index of char indexOf
        let index = alpha.indexOf(currentChar);
        // apply formula (x + key) % 26 to get encrpyted number
        let formulaResult = (index - key) % 26
        // use encrypted number as index in the array alpha[encryptedIndex]
        let encryptedChar = alpha[formulaResult];
        // concat to result string
        result += encryptedChar;
    }
    // put result in box
    console.log(result);
    let theBox = document.getElementById("result");
    theBox.value = result;
}