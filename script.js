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

const sequenceLength = 300;

// SET CURSOR TO INPUT BOX
const input = document.getElementById("input");
// SETS CURSOR AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
// input.setSelectionRange(0, 0);
input.focus();
// NOT NECESSARY ?
// input.select();

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

// !!! ACCESS INDEX OF ITERATION IN FOR OF LOOP WITH DESTRUCTURING SYNTAX + entries() METHOD
for (const [idx, char] of stringWords.split("").entries()) {
    console.log(idx, char);
    // CREATE ELEMENT
    const span = document.createElement("span");
    // SET TEXT CONTENT / CLASS / ID
    span.innerText = char;
    span.className = "span";
    span.id = `span-${idx}`;
    // APPEND TO PARENT DIV
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
};

const prevChar = () => {
    charIdx -= 1;
    strIdx -= 1;
};

const nextWord = () => {
    wordIdx += 1;
    charIdx = 0;
};

const clearInput = () => {
    txtInput.value = "";
};

// NODELIST OF ALL CHAR SPANS
const charSpans = document.querySelectorAll(".span");
// console.log(charSpans);

// ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
// ---
const firstChar = document.getElementById("span-0");
firstChar.classList.add("background", "black-border");
// ---
// firstChar.style.background = "lightgrey";
// firstChar.style.border = "1px solid black";
// firstChar.classList.add("blink");

// LISTEN FOR KEY EVENTS
document.addEventListener("keydown", (event) => {

    // DETECT CAPSLOCK
    if (event.getModifierState('CapsLock')) {
        console.log("CAPSLOCK IS ON!");
    }

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

    // SHIFT
    if (typedKey === "Shift") {
        console.log("SHIFT");
    }

    // BACKSPACE
    // PREVENT CURSOR FROM GOING BACK IF ITS ON FIRST CHAR OF WORD (&& charIdx > 0)
    if (typedKey === "Backspace" && charIdx > 0) {
        // console.log("BACKSPACE");
        // console.log(
        //     "current char:",
        //     wordsArr[wordIdx],
        //     "/",
        //     wordsArr[wordIdx][charIdx]
        // );

        prevChar();

        // ---
        const currentChar = document.getElementById(`span-${strIdx}`);
        console.log("CURRENT CHAR ORANGE", currentChar);
        currentChar.classList.add("orange", "background", "black-border");
        currentChar.classList.remove("red", "green");
        // ---
        // charSpans[strIdx].style.color = "orange";




        // ---
        const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
        nextCharacter.classList.remove("background", "black-border");
        // ---
        // charSpans[strIdx + 1].style.background = "none";
        // charSpans[strIdx + 1].style.border = "none";

        // ---
        // currentChar.classList.add("cursor");
        // ---
        // charSpans[strIdx].style.background = "lightgrey";
        // charSpans[strIdx].style.border = "1px solid black";

        // console.log(
        //     "current char:",
        //     wordsArr[wordIdx],
        //     "/",
        //     wordsArr[wordIdx][charIdx]
        // );
    }

    // SPACE
    // if (event.code === "Space") {
    if (typedKey === " ") {
        // !!!
        // CLEAR INPUT IF WORD IS COMPLETE
        if (wordsArr[wordIdx][charIdx] === undefined) {
            console.log("UNDEFINED!");
            // ---
            const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
            // ???
            // nextCharacter.classList.add("no-background");
            // ---
            // charSpans[strIdx + 1].style.background = "none";

            clearInput();
        }

        // console.log(
        //     "current char:",
        //     wordsArr[wordIdx],
        //     "/",
        //     wordsArr[wordIdx][charIdx]
        // );

        // nextWord();

        // console.log(
        //     "current char:",
        //     wordsArr[wordIdx],
        //     "/",
        //     wordsArr[wordIdx][charIdx]
        // );

        // JUMP IDX TO THE NEXT WORD IN STRING
        if (charIdx < wordsArr[wordIdx].length) {
            let nextWordIdx;
            console.log("charIdx:", charIdx, "word length:", wordsArr[wordIdx].length);
            console.log("STRING IDX TO JUMP TO NEXT WORD IN STRING!");
            for (let i = strIdx; i < stringWords.length; i += 1) {
                if (stringWords[i] === " ") {
                    console.log("space found at index: ", i);
                    nextWordIdx = i;
                    // ---
                    // let nextCharacter = document.getElementById(`span-${strIdx}`);
                    let currentChar = document.getElementById(`span-${strIdx}`);
                    currentChar.classList.add("red-border");
                    // let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
                    // nextCharacter.classList.remove("background", "black-border");

                    // ---
                    // charSpans[strIdx].style.border = "2px solid red";
                    break;
                }
            }
            // SKIP TO NEXT WORD IN STRING
            strIdx = nextWordIdx;
            // CLEAR INPUT IF GOT WORD WRONG
            clearInput();
            // txtInput.value = "";





            // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
            let currentChar = document.getElementById(`span-${strIdx}`);
            currentChar.classList.remove("background")
            // charSpans[strIdx].style.background = "none";
            let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
            nextCharacter.classList.add("background")
            // charSpans[strIdx + 1].style.background = "lightgrey";
        }

        nextWord();
        textSpanContainer.scroll({
            top: 35,
            // left: 100,
            behavior: 'smooth'
        });

        // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT

        // ---
        let currentChar = document.getElementById(`span-${strIdx}`);
        currentChar.classList.remove("background", "black-border");
        // ---
        // charSpans[strIdx].style.background = "none";
        // charSpans[strIdx].style.border = "none";
        // ---
        const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
        nextCharacter.classList.add("background", "black-border");
        // ---






        // charSpans[strIdx + 1].style.background = "lightgrey";
        // charSpans[strIdx + 1].style.border = "1px solid black";

        strIdx += 1;

        // console.log(
        //     "SPACE! ",
        //     "word: ",
        //     wordIdx,
        //     "char: ",
        //     charIdx,
        //     "string: ",
        //     strIdx
        // );
    }

    // CORRECT KEY
    if (typedKey === wordsArr[wordIdx][charIdx]) {
        // ---
        // ADD BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
        let currentChar = document.getElementById(`span-${strIdx}`);
        // currentChar = document.getElementById(`span-${strIdx}`);
        currentChar.classList.add("green", "enlarged");
        currentChar.classList.remove("red", "orange", "background", "black-border");
        // ---
        // charSpans[strIdx].style.color = "green";

        // charSpans[strIdx + 1].classList.add("blink");

        // ---
        // console.log("NEXT CHAR", nextCharacter);
        let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
        nextCharacter.classList.add("background", "black-border");
        // console.log("NEXT CHAR", nextCharacter);
        // ---

        // charSpans[strIdx + 1].style.background = "lightgrey";
        // charSpans[strIdx + 1].style.border = "1px solid black";


        // charSpans[strIdx].style.background = "none";
        // charSpans[strIdx].style.border = "none";
        // charSpans[strIdx].style.fontSize = "35px";

        nextChar();
    }

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

        // charSpans[strIdx].style.color = "red";
        // ---
        let currentChar = document.getElementById(`span-${strIdx}`);
        currentChar.classList.add("red", "enlarged");
        // ---

        // NEXTCHAR()

        // MOVE BORDER / BACKGROUND TO NEXT CHAR AFTER WRONG CHAR TYPED(JUST ADD BORDER)
        // charSpans[strIdx].style.border = "1px solid black";
        // charSpans[strIdx].style.background = "lightgrey";
        // ---
        let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
        nextCharacter.classList.add("background", "black-border");
        // ---

        // REMOVE BORDER AND BACKGROUND FROM WRONG CHAR
        // ---
        const prevChar = document.getElementById(`span-${strIdx}`);
        prevChar.classList.remove("background", "black-border");
        // ---
        // charSpans[strIdx - 1].style.border = "none";
        // charSpans[strIdx - 1].style.background = "none";
        // GO TO NEXT CHAR IF WRONG CHAR TYPED
        nextChar();
    }
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
        ☑️ DETECT CAPSLOCK
        CAPS LOCK WARNING MESSAGE
        BUILD RANDOM WORDS FROM PROBLEM CHARACTERS / WORDS

    CODE:
        FUNCTIONS:
            ☑️ STYLING CHARACTERS ASSIGN STYLES TO CSS (ADD AND REMOVE CLASS WITH JS)
            ☑️ SET CURSOR POSITION (FORWARD, BACK)
            ☑️ CLEAR INPUT



*/
