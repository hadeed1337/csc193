// Makes the text bigger when "Bigger!" button is clicked
function makeBigger() {
    alert("Hello, world!");
    let textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

// Applies "FancyShmancy" style when selected
function applyFancyStyle() {
    let textArea = document.getElementById("userText");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

// Reverts to "BoringBetty" style when selected
function applyBoringStyle() {
    let textArea = document.getElementById("userText");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

// Converts text to uppercase and adds "-Moo" to sentences
function mooifyText() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    // Splits sentences and filters out empty ones
    let sentences = text.split(".").filter(sentence => sentence.trim().length > 0);

    // Appends "-Moo" if not already present
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (!sentence.endsWith("-MOO")) {
            sentences[i] = sentence + "-MOO";
        }
    }

    // Joins sentences back together
    textArea.value = sentences.join(". ") + ".";
}