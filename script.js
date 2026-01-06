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
    let key = parseInt(box2.innerText);
    // make empty string to store results
    let string = "";
    // convert message to numbers w a for loop
    for (let i = 0; i < userText.length; i++) {
        // get current char .charAt(i)
        let currentChar = userText.charAt(i);
        // convert to lower case .toLowerCase

        // get index of char indexOf

        // apply formula (x + key) % 26 to get encrpyted number

        // use encrypted number as index in the array alpha[encryptedIndex]

        // concat to result string
    }
    // put result in box
}

function decrypt() {
    console.log("decrypt")
}