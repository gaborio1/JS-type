// console.log("connected");

let commonWords = [
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

// console.log(getRandom());

const textContainer = document.querySelector(".text-container");
const txtInput = document.getElementById("input");

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

// OR USE OWN CUSTOM TEXT
// wordsArr = ["your", "custom", "text"];

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

// TRACK WORDS IN SEQUENCE AND CHARACTERS OF CURRENT WORD
let wordIdx = 0;
let strIdx = 0;
let charIdx = 0;

// 
const nextChar = () => {
    charIdx += 1;
    strIdx += 1;
}

const prevChar = () => {
    charIdx -= 1;
    strIdx -= 1;
}

const nextWord = () => {
    wordIdx += 1;
    charIdx = 0;
}

// NODELIST OF ALL CHAR SPANS
const charSpans = document.querySelectorAll(".span");
// console.log(charSpans);

console.log(charSpans[strIdx]);

// !!! HAS TO SAVE ELEMENT IN VARIABLE TO ADD CLASS !!!
const element = document.querySelector(".span");
// ONLY ONE OF THE TWO WORKS AT ONCE
element.style.background = "lightgrey";
element.style.border = "1px solid black";
// element.classList.add("blink");

// const addCursor = (char) => {
//     char.classlist.add("cursor");
// }

// LISTEN FOR KEY EVENTS
document.addEventListener("keydown", function (event) {

    console.log(
        "---EVENT---",
        "word: ",
        wordIdx,
        "char: ",
        charIdx,
        "string: ",
        strIdx
    );

    const typedKey = event.key;
    console.log("event.key: ", event.key);
    // console.log("event.code:", event.code)

    // const reChar = new RegExp(/[A-Za-z]/, "g");
    // const reChar = new RegExp(/[A-Za-z]/);

    // SHIFT
    if (typedKey === "Shift") {
        console.log("SHIFT");
    }

    // BACKSPACE
    // PREVENT CURSOR FROM GOING BACK IF ITS ON FIRST CHAR OF WORD (&& charIdx > 0)
    if (typedKey === "Backspace" && charIdx > 0) {
        console.log("BACKSPACE");
        console.log(
            "current char:",
            wordsArr[wordIdx],
            "/",
            wordsArr[wordIdx][charIdx]
        );

        prevChar();

        charSpans[strIdx].style.color = "orange";
        //
        charSpans[strIdx + 1].style.background = "none";
        charSpans[strIdx + 1].style.border = "none";

        // addCursor(charSpans[strIdx]);

        charSpans[strIdx].style.background = "lightgrey";
        charSpans[strIdx].style.border = "1px solid black";

        console.log(
            "current char:",
            wordsArr[wordIdx],
            "/",
            wordsArr[wordIdx][charIdx]
        );
    }

    // SPACE
    // if (event.code === "Space") {
    if (typedKey === " ") {
        // !!!
        // CLEAR INPUT IF WORD IS COMPLETE
        if (wordsArr[wordIdx][charIdx] === undefined) {
            console.log("UNDEFINED!");
            charSpans[strIdx + 1].style.background = "none";
            // charIdx -= 1;
            txtInput.value = "";
        }

        console.log(
            "current char:",
            wordsArr[wordIdx],
            "/",
            wordsArr[wordIdx][charIdx]
        );

        nextWord();

        console.log(
            "current char:",
            wordsArr[wordIdx],
            "/",
            wordsArr[wordIdx][charIdx]
        );

        // JUMP IDX TO THE NEXT WORD IN STRING
        if (charIdx < wordsArr[wordIdx].length) {
            let nextWordIdx;
            console.log("STRING IDX TO JUMP TO NEXT WORD IN STRING!");
            for (let i = strIdx; i < stringWords.length; i += 1) {
                if (stringWords[i] === " ") {
                    console.log("space found at index: ", i);
                    nextWordIdx = i;
                    charSpans[strIdx].style.border = "2px solid red";
                    break;
                }
            }
            // SKIP TO NEXT WORD
            strIdx = nextWordIdx;
            // CLEAR INPUT IF GOT WORD WRONG
            txtInput.value = "";
            // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
            // charSpans[strIdx].style.background = "none";
            // charSpans[strIdx + 1].style.background = "lightgrey";
        }
        // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
        charSpans[strIdx].style.background = "none";
        charSpans[strIdx + 1].style.background = "lightgrey";
        charSpans[strIdx + 1].style.border = "1px solid black";
        charSpans[strIdx].style.border = "none";

        strIdx += 1;
        console.log(
            "SPACE! ",
            "word: ",
            wordIdx,
            "char: ",
            charIdx,
            "string: ",
            strIdx
        );
    }
    // if (reChar.test(current)) {
    //     console.log("character typed: ", current);
    // }

    // if (typedKey === "a") console.log("a");
    // if (typedKey === "A") console.log("A");

    // CORRECT KEY
    if (typedKey === wordsArr[wordIdx][charIdx]) {
        charSpans[strIdx].style.color = "green";
        // charSpans[strIdx + 1].style.color = "tomato";
        // charSpans[strIdx + 1].classList.add("blink");
        // charSpans[strIdx + 1].classList.add("highlight");

        // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
        charSpans[strIdx + 1].style.background = "lightgrey";
        charSpans[strIdx].style.background = "none";
        charSpans[strIdx + 1].style.border = "1px solid black";
        charSpans[strIdx].style.border = "none";

        charSpans[strIdx].style.fontSize = "35px";

        nextChar();
    }

    // else if (typedKey !== wordsArr[wordIdx][charIdx] && wordsArr[wordIdx][charIdx] === undefined) {

    // WRONG KEY OR SHIFT FOR CAPITAL LETTERS
    // !!! LOOK INT && ITS A TEMP FIX FOR UNDEFINED LAST CHARACTER !!!
    else if (
        typedKey !== wordsArr[wordIdx][charIdx] &&
        typedKey !== " " &&
        typedKey !== "Shift" &&
        typedKey !== "Backspace"
    ) {
        // !!!
        console.log(
            "WRONG KEY!",
            "typed:",
            typedKey,
            "actual:",
            wordsArr[wordIdx][charIdx]
        );
        charSpans[strIdx].style.color = "red";
        // GO TO NEXT CHAR IF WRONG CHAR TYPED
        nextChar();

        // MOVE BORDER / BACKGROUND TO NEXT CHAR AFTER WRONG CHAR TYPED(JUST ADD BORDER)
        charSpans[strIdx].style.border = "1px solid black";
        charSpans[strIdx].style.background = "lightgrey";
        // REMOVE BORDER AND BACKGROUND FROM WRONG CHAR
        charSpans[strIdx - 1].style.border = "none";
        charSpans[strIdx - 1].style.background = "none";
    }

    // if (typedKey === stringWords[strIdx]) {
    //     charSpans[strIdx].style.color = "green";
    //     // charSpans[strIdx].style.fontSize = "35px";
    //     strIdx += 1;
    // }

    // if (current !== stringWords[strIdx]) {
    //     charSpans[strIdx].style.color = "red";
    //     // charSpans[strIdx].style.fontSize = "35px";
    //     strIdx += 1;
    // }
});

/*
TODOS

   TODOS

    STATISTICS / MONITOR:
        TIMER (1 MIN)
        SPEEDOMETER (WPM)
        GREEN KEYS COUNTER
        RED KEYS COUNTER
        COMPLETE WORDS COUNTER
        CORRECT WORDS COUNTER

    FEATURES:
        START / NEW BUTTON
        LEVEL SELECTOR (100, 200, 500 ETC...)
        CAPS LOCK WARNING
        BUILD RANDOM WORDS FROM PROBLEM CHARACTERS / WORDS

    CODE:
        FUNCTIONS:
            STYLING CHARACTERS ASSIGN STYLES TO CSS (ADD AND REMOVE CLASS WITH JS)
            ☑️ SET CURSOR POSITION (FORWARD, BACK)
            CLEAR INPUT



*/
