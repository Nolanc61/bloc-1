const textElement = document.getElementById("example-text");

// Checkbox for bold
document.getElementById("boldCheckbox").addEventListener("change", function() {
    textElement.style.fontWeight = this.checked ? "bold" : "normal";
});

// Checkbox for italic
document.getElementById("italicCheckbox").addEventListener("change", function() {
    textElement.style.fontStyle = this.checked ? "italic" : "normal";
});

// Checkbox for underline
document.getElementById("underlineCheckbox").addEventListener("change", function() {
    if (this.checked) {
        textElement.style.textDecoration = textElement.style.textDecoration === "line-through" ? "underline line-through" : "underline";
    } else {
        textElement.style.textDecoration = textElement.style.textDecoration === "line-through" ? "line-through" : "none";
    }
});

// Checkbox for strikethrough
document.getElementById("strikeCheckbox").addEventListener("change", function() {
    if (this.checked) {
        textElement.style.textDecoration = textElement.style.textDecoration === "underline" ? "underline line-through" : "line-through";
    } else {
        textElement.style.textDecoration = textElement.style.textDecoration === "underline" ? "underline" : "none";
    }
});

// Color picker
document.getElementById("pickcolor").addEventListener("input", function() {
    textElement.style.color = this.value;
});

// Font size from number input
document.getElementById("fontSize").addEventListener("input", function() {
    textElement.style.fontSize = this.value + "px";
});

// Font size control
document.getElementById("increaseButton").addEventListener("click", function() {
    let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
    textElement.style.fontSize = (currentSize + 2) + "px";
});

document.getElementById("decreaseButton").addEventListener("click", function() {
    let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
    textElement.style.fontSize = (currentSize - 2) + "px";
});

// Font family selector
document.getElementById("police").addEventListener("change", function() {
    textElement.style.fontFamily = this.value;
});
