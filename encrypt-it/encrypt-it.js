(function() {
  "use strict";

  // Called when the window is loaded
  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");

    // Set up the event listeners for the buttons
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Function to handle the encryption
  function handleEncrypt() {
    let inputText = document.getElementById("input-text").value;
    let encryptedText = shiftCipher(inputText); // Encrypt using the shift cipher
    document.getElementById("result").textContent = encryptedText; // Output the encrypted result
  }

  // Function to clear the input and result fields when reset button is clicked
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  // Shift cipher function (shifts each letter by 1)
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char < 'a' || char > 'z') {
        result += char; // Non-letter characters stay the same
      } else if (char === 'z') {
        result += 'a'; // Special case for 'z'
      } else {
        let letter = text.charCodeAt(i);
        result += String.fromCharCode(letter + 1); // Shift letters by 1
      }
    }
    return result;
  }

})();
