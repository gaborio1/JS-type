// console.log("connected");

const commonWords = [
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part",
];

const sequenceLength = 40;

// GET RANDOM WORD FROM ARRAY
const getRandom = (arr) => {
    const randIdx = Math.floor(Math.random() * commonWords.length);
    return commonWords[randIdx];
};

console.log(getRandom());

const textContainer = document.querySelector(".text-container");
// textContainer.textContent = getRandom();

// CREATE TEXT STRING FROM RANDOM WORDS UP TO sequenceLength IN LENGTH
let stringWords = "";
let wordsArr = [];

// GET CURRENT LENGTH OF WORDS PLUS SPACES IN BETWEEN
const getStrLength = (arr) => {
    let length = 0;
    arr.forEach((word) => {
        length += word.length;
    });
    if (arr.length > 1) {
        length += arr.length - 1;
    }
    return length;
};

// BUILD STRING BY ADDING RANDNOM WORDS ONE BY ONE UNTIL LENGTH IS REACHED
while (true) {
    if (getStrLength(wordsArr) >= sequenceLength) break;
    let currWord = getRandom();
    wordsArr.push(currWord);
}

console.log(wordsArr);
stringWords = wordsArr.join(" ");
console.log(stringWords);

textContainer.textContent = stringWords;

// MAKE EACH CHARACTER OF THE STRING A span AND APPEND AS A CHILD ELEMENT TO ITS CONTAINER
const textSpanContainer = document.querySelector(".text-span-container");
for (let char of stringWords) {
    // console.log(char);
    const span = document.createElement("span");
    span.innerText = char;
    span.className = "span";
    textSpanContainer.appendChild(span);
}

/*
//creates a listener for when you press a key
window.onkeyup = keyup;

//creates a global Javascript variable
var inputTextValue;

function keyup(e) {
    //setting your input text to the global Javascript Variable for every key press
    inputTextValue = e.target.value;
    // ALL TEXT
    // console.log(inputTextValue);
    // CURRENT KEYCODE
    console.log(e.keyCode);
    // CONVERT KEYCODE TO CHARACTER
    // console.log(String.fromCharCode(e.keyCode));
    console.log(String.fromCharCode((96 <= e.keyCode && e.keyCode <= 105) ? e.keyCode - 48 : e.keyCode));

    //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
    if (e.keyCode == 13) {
        window.location = "http://www.myurl.com/search/" + inputTextValue;
    }
}
*/

// document.onkeypress = function (evt) {
//     evt = evt || window.event;
//     var charCode = evt.keyCode || evt.which;
//     var charStr = String.fromCharCode(charCode);
//     console.log(charStr);
// };

document.addEventListener(
    "keydown",
    function (event) {
        const current = event.key;
        console.log("event.key: ", event.key);
        console.log("event.code", event.code)
        // const reChar = new RegExp(/[A-Za-z]/, "g");
        // const reChar = new RegExp(/[A-Za-z]/);
        if (current === "Shift") {
            console.log("SHIFT");
        }
        if (event.code === "Space") {
            console.log("SPACE");
        }
        // if (reChar.test(current)) {
        //     console.log("character typed: ", current);
        // }
        if (current === "a") console.log("a");
        if (current === "A") console.log("A");
    },
);
