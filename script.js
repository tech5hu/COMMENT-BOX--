let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 100;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumOfChars - numOfEnteredChars;
    characterCounter.textContent = counter + "/100";
};

textArea.addEventListener("input", countCharacters);

if (counter < 0) {
    characterCounter.style.color = "red";
} else if (counter < 20) {
    characterCounter.style.color = "orange";
} else {
    characterCounter.style.color = "black";
}
