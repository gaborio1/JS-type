// console.log("connected");

let commonTest = [
    "a",
    "about",
    "act",
    "actually",
    "add",
    "after",
    "again",
    "against",
    "age",
    "ago",
    "air",
    "all",
    "also",
    "always",
    "am",
    "among",
    "an",
    "and",
    "animal",
    "another",
    "answer",
    "appear",
    "are",
    "area",
    "as",
    "ask",
    "at",
];

let common100 = [
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

const punctMarks = [",", ".", "!", "?", ":", ";"];

const textSpanContainerActive = document.getElementById("text-span-active");
const textSpanContainerNext = document.getElementById("text-span-next");

const clearInput = () => {
    txtInput.value = "";
};

// CLEAR TEXT FIELDS ACTIVE / NEXT, INPUT, AND INITIALISE WORDARRAYS
const clearActiveNext = () => {
    textSpanContainerActive.innerHTML = "";
    textSpanContainerNext.innerHTML = "";
    clearInput();
    wordArrays = [];
    stringWords = "";
}

// GET VALUES FROM CONTROL PANEL

// ================== DIFFICULTY ==================
const radios = document.getElementsByClassName("radio");
const difficultySubmitButton = document.getElementById("diffuculty-button");
let targetArray = [...common100];

difficultySubmitButton.addEventListener("click", function () {

    clearActiveNext();

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            console.log("RADIOS VALUE:", radios[i].value);
            if (radios[i].value === "100") {
                console.log("100");
                targetArray = [...common100];
            }
            if (radios[i].value === "200") {
                console.log("200");
                targetArray = [...commonTest];
            }

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    console.log("TARGET ARRAY:", targetArray);
});

// =================================================

const startButton = document.getElementById("start-button");

// ================== LINE LENGTH ==================
// DEFAULT LINE LENGTH, ALSO HARD CODED IN HTML
let sequenceLength = 30;

const slider = document.getElementById("length");
slider.onchange = function (event) {
    console.log("SLIDER VALUE:", slider.value);
    sequenceLength = slider.value;
    const lengthDisplaySpan = document.getElementById("length-display-span");
    lengthDisplaySpan.textContent = sequenceLength;
};

const lengthSubmitButton = document.getElementById("length-button");
lengthSubmitButton.addEventListener("click", function () {
    console.log("LENGTH CLICKED");
    console.log(sequenceLength);
});

// let sequenceLength = 45;
// let sequenceLength = 0;

// function getLength() {
//     console.log("HELLO");
//     let length = document.getElementById("length").value;
//     // console.log(length);
//     // console.log(document.getElementById("length"));
//     sequenceLength = length;
//     return length;
// }
// sequenceLength = getLength();
// console.log(sequenceLength);
// console.log(document.getElementById("length").value);

// console.log(sequenceLength);
// =================================================






// GET RANDOM WORD FROM ARRAY
// const getRandom = (arr) => {
//     const randIdx = Math.floor(Math.random() * targetArray.length);
//     return targetArray[randIdx];
// };
const getRandom = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
};






// ================== PUNCTUATION ==================
const punctuationButton = document.getElementById("punctuation-button");
let punctuationOn = false;

// TOGGLE BUTTON STYLE (ON / OFF)
const toggleButtonStyle = (element) => {
    if (element.classList.contains("toggle-on")) {
        element.classList.remove("toggle-on");
        element.classList.add("toggle-off");
        element.innerText = "Off";
    } else {
        element.classList.remove("toggle-off");
        element.classList.add("toggle-on");
        element.innerText = "On";
    }
};

// TOGGLE BOOLEAN BUTTON STATE BASED ON CLASS
const toggleButtonState = (element) => {
    // console.log(element);
    if (element.classList.contains("toggle-on")) {
        if (element === punctuationButton) {
            punctuationOn = true;
            console.log("PUNCTUATION:", punctuationOn);
        }
        if (element === capitalButton) {
            capitalOn = true;
            console.log("CAPITAL:", capitalOn);
        }
    } else {
        if (element === punctuationButton) {
            punctuationOn = false;
            console.log("PUNCTUATION", punctuationOn);
        }
        if (element === capitalButton) {
            capitalOn = false;
            console.log("CAPITAL", capitalOn);
        }
    }
};

punctuationButton.addEventListener("click", function () {
    toggleButtonStyle(punctuationButton);
    toggleButtonState(punctuationButton);
});

// GENERATE RANDOM PUNCT MARK
const randomPunctMark = () => {
    const randIdx = Math.floor(Math.random() * punctMarks.length);
    return punctMarks[randIdx];
};

// =================================================

// ================== CAPITAL ==================

const capitaliseWord = (str) => {
    const lettersArr = str.split("");
    lettersArr[0] = lettersArr[0].toUpperCase();
    // console.log(lettersArr.join(""));
    return lettersArr.join("");
};

const capitalButton = document.getElementById("capital-button");
let capitalOn = false;
// TOGGLE BUTTON STYLE AND STATE
capitalButton.addEventListener("click", function () {
    toggleButtonStyle(capitalButton);
    toggleButtonState(capitalButton);
});

// =================================================

// SET CURSOR TO INPUT BOX
/*
const input = document.getElementById("input");
// SETS CURSOR AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
// input.setSelectionRange(0, 0);
input.focus();
// NOT NECESSARY ?
// input.select();
*/

// console.log(getRandom());

const textContainer = document.querySelector(".text-container");
const txtInput = document.getElementById("input");

// CREATE TEXT STRING FROM RANDOM WORDS UP TO sequenceLength IN LENGTH
let stringWords = "";
let wordArrays = [];

// TRACK LINES(ARRAY OF WORDS), WORDS IN SEQUENCE AND CHARACTERS OF CURRENT WORD
let lineIdx = 0;
let wordIdx = 0;
let strIdx = 0;
let charIdx = 0;

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

// BUILD STRING BY ADDING RANDOM WORDS ONE BY ONE UNTIL LENGTH IS REACHED

// POPULATE wordArrays WITH ARRAYS OF WORDS (wordsArr), ONE FOR EACH TEXT LINE
const buidWordArrays = (numOfLines) => {
    console.log("TARGET ARRAY FROM BUILDARRAYS:", targetArray);
    for (let i = 0; i < numOfLines; i += 1) {
        let arr = [];
        while (true) {
            if (getStrLength(arr) >= sequenceLength) break;
            // GET RANDOM WORD
            let currWord = getRandom(targetArray);
            // CONCAT RANDOM PUNCT MARK
            if (punctuationOn) {
                currWord += randomPunctMark();
            }
            // CAPITAL ON, MAKE FIRST CHAR UPPERCASE
            if (capitalOn) {
                // !!! MAKE ADJUSTMENTS FOR WORD "I" !!!
                currWord = capitaliseWord(currWord);
            }

            arr.push(currWord);
        }
        wordArrays.push(arr);
    }
};



startButton.addEventListener("click", (event) => {
    // event.Handled = true;
    // event.preventDefault();

    // SET CURSOR TO INPUT BOX
    const input = document.getElementById("input");
    // SETS CURSOR AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
    // input.setSelectionRange(0, 0);
    input.focus();

    // TEST FOR ARRAY OF 5 ARRAYS
    buidWordArrays(5);
    console.log("WORDARRAYS:", wordArrays);

    // OR USE OWN CUSTOM TEXT
    // wordsArr = ["your", "custom", "text"];

    // CREATE STRING OF WORDS WITH SPACES
    stringWords = wordArrays[lineIdx].join(" ");
    console.log("STRINGWORDS:", stringWords);

    const buildStringWords = (arr) => {
        return arr.join(" ");
    };
    // const testString = buildStringWords(wordArrays[2]);
    // console.log("TEST STRING", testString);

    // DISABLED
    // textContainer.textContent = stringWords;

    // MAKE EACH CHARACTER OF THE STRING A span AND APPEND AS A CHILD ELEMENT TO ITS CONTAINER

    // CREATE SPANS FROM wordArrays' ARRAY OF WORDS, JOIN ELEMENS TO ONE STRING WITH SPACES AND THEN SPLIT
    // wordArrays[lineIdx] WILL BE INCREMENTED IN EVETLISTENER
    console.log("WORDARRAYS FIRST LINE:", wordArrays[lineIdx]);
    const createSpans = (lineIdx, location) => {
        for (const [idx, char] of wordArrays[lineIdx]
            .join(" ")
            .split("")
            .entries()) {
            // console.log(idx, char);
            // CREATE ELEMENT
            const span = document.createElement("span");
            // SET TEXT CONTENT / CLASS / ID
            span.innerText = char;
            span.className = "span";
            span.id = `span-${idx}`;
            // APPEND TO PARENT DIV
            location.appendChild(span);
        }
    };

    // INITIALISE TEXTSPANCONTAINER NEXT
    createSpans(lineIdx + 1, textSpanContainerNext);

    // LOOP OVER STRINGWORSD TO CREATE SPANS(EVERY CHAR INCLUDING SPACES IN BETWEEN)
    // !!! ACCESS INDEX OF ITERATION IN FOR OF LOOP WITH DESTRUCTURING SYNTAX + entries() METHOD
    for (const [idx, char] of stringWords.split("").entries()) {
        // console.log(idx, char);
        // CREATE ELEMENT
        const span = document.createElement("span");
        // SET TEXT CONTENT / CLASS / ID
        span.innerText = char;
        span.className = "span";
        span.id = `span-${idx}`;
        // APPEND TO PARENT DIV
        textSpanContainerActive.appendChild(span);
    }

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

    const nextLine = () => {
        lineIdx += 1;
        wordIdx = 0;
        charIdx = 0;
        strIdx = 0;
    };


    // NODELIST OF ALL CHAR SPANS
    const charSpans = document.querySelectorAll(".span");
    // console.log(charSpans);

    // ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
    const firstChar = document.getElementById("span-0");
    firstChar.classList.add("background", "black-border");

    // LISTEN FOR KEY EVENTS
    document.addEventListener("keyup", (event) => {
        // event.Handled = true;
        // event.preventDefault();
        console.log(
            "---EVENT START---------------------",
            "line idx: ",
            lineIdx,
            "word idx: ",
            wordIdx,
            "/",
            wordArrays[lineIdx].length - 1,
            "char idx: ",
            charIdx,
            "/",
            wordArrays[lineIdx][wordIdx].length - 1,
            "string idx: ",
            strIdx,
            "/",
            stringWords.length - 1
        );

        // LAST CHARACTER TYPED IN LINE
        if (
            wordIdx === wordArrays[lineIdx].length - 1 &&
            charIdx === wordArrays[lineIdx][wordIdx].length - 1
        ) {
            console.log("LAST WORD, LAST CHAR! CHAR IDX:", charIdx);
        }

        // DETECT CAPSLOCK
        if (event.getModifierState("CapsLock")) {
            console.log("CAPSLOCK IS ON!");
        }

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

            prevChar();

            const currentChar = document.getElementById(`span-${strIdx}`);
            // console.log("CURRENT CHAR ORANGE", currentChar);
            currentChar.classList.add("orange", "background", "black-border");
            currentChar.classList.remove("red", "green");

            const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
            nextCharacter.classList.remove("background", "black-border");
        }

        // SPACE
        // if (event.code === "Space") {
        if (typedKey === " ") {
            if (wordIdx === wordArrays[lineIdx].length - 1) {
                console.log("--------LAST WORD IN LINE--------");
            }

            // !!!
            // CLEAR INPUT IF WORD IS COMPLETE
            if (wordArrays[lineIdx][wordIdx][charIdx] === undefined) {
                console.log("UNDEFINED, SPACE!");
                // ---
                const nextCharacter = document.getElementById(
                    `span-${strIdx + 1}`
                );
                // ???
                // nextCharacter.classList.add("no-background");

                //REMOVE RED BORDER FROM SPACE IF IT HAS BEEN CORRECTED
                const currentChar = document.getElementById(`span-${strIdx}`);
                // console.log(currentChar);
                currentChar.classList.remove("red-border");

                clearInput();

                if (wordIdx === wordArrays[lineIdx].length - 1) {
                    console.log("--------NEXTLINE()--------");
                    nextLine();
                }
            }

            // JUMP IDX TO THE NEXT WORD IN STRING
            if (charIdx < wordArrays[lineIdx][wordIdx].length) {
                // IF SPACE IS PRESSED ANYWHERE ON LAST WORD
                console.log("INCOMPLETE WORD, NEXT LINE()");

                // === === === === === === === === START === === === === === === === === ===

                // !!! THIS DOES NOT RUN ON LAST WORD !!!
                // if (
                //     wordIdx === wordArrays[lineIdx][wordArrays[lineIdx].length - 1]
                // ) {
                //     console.log("INCOMPLETE WORD, NEXT LINE()");
                //     // START NEW LINE
                //     nextLine();
                //     // DELETE SPANS FROM ACTIVE DIV
                //     textSpanContainerActive.innerHTML = "";
                //     // APPEND SPANS CREATED FROM NEXT LINE
                //     createSpans(lineIdx, textSpanContainerActive);
                // }
                // === === === === === === === === START === === === === === === === === ===

                let nextWordIdx;
                console.log(
                    "charIdx:",
                    charIdx,
                    "word length:",
                    wordArrays[lineIdx][wordIdx].length
                );
                console.log("STRING IDX TO JUMP TO NEXT WORD IN STRING!");
                for (let i = strIdx; i < stringWords.length; i += 1) {
                    if (stringWords[i] === " ") {
                        console.log("space found at index: ", i);
                        nextWordIdx = i;

                        let currentChar = document.getElementById(
                            `span-${strIdx}`
                        );
                        currentChar.classList.add("red-border");
                        break;
                    }
                }
                // SKIP TO NEXT WORD IN STRING
                strIdx = nextWordIdx;
                // CLEAR INPUT IF GOT WORD WRONG
                clearInput();
            }

            // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
            // ON ALL CHARACTERS BUT LAST
            if (strIdx < stringWords.length) {
                let currentChar = document.getElementById(`span-${strIdx}`);
                currentChar.classList.remove("background", "black-border");
                const nextCharacter = document.getElementById(
                    `span-${strIdx + 1}`
                );
                nextCharacter.classList.add("background", "black-border");
                nextWord();
                strIdx += 1;
            }

            // START A NEW LINE
            if (strIdx === undefined) {
                console.log("NEXT LINE()");
                // START NEW LINE
                nextLine();
                // DELETE SPANS FROM ACTIVE DIV / APPEND SPANS CREATED FROM NEXT LINE
                textSpanContainerActive.innerHTML = "";
                createSpans(lineIdx, textSpanContainerActive);
                // ADD CURSOR TO FIRST CHAR IN LINE
                const firstChar = document.getElementById("span-0");
                firstChar.classList.add("background", "black-border");
                // UPDATE STRWORDS
                stringWords = wordArrays[lineIdx].join(" ");
                // DELETE CONTENT / APPEND NEXT LINE TO TEXTSPAN NEXT DIV
                textSpanContainerNext.innerHTML = "";
                createSpans(lineIdx + 1, textSpanContainerNext);
            }

            // === === === === === === === === START === === === === === === === === ===

            // !!! FIND A WAY TO PREVENT STRIDX GOING OVER STRING.LENGTH !!!

            // DETECT LAST CHARACTER IN LINE OR LAST UNCOMPLETED WORD
            // JUMP TO NEXT LINE

            if (
                wordIdx === wordArrays[lineIdx][wordArrays[lineIdx].length - 1]
            ) {
                console.log("--------END OF LINE, SKIP TO NEXT ARRAY--------");
            }

            // === === === === === === === === START === === === === === === === === ===
        }

        // CORRECT KEY
        if (typedKey === wordArrays[lineIdx][wordIdx][charIdx]) {
            // ---
            // ADD BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
            let currentChar = document.getElementById(`span-${strIdx}`);
            currentChar.classList.add("green", "enlarged");
            currentChar.classList.remove(
                "red",
                "orange",
                "background",
                "black-border"
            );
            // charSpans[strIdx + 1].classList.add("blink");

            // console.log("NEXT CHAR", nextCharacter);

            // ❗️❗️❗️ ERROR ❗️❗️❗️
            //     script.js:485 Uncaught TypeError: Cannot read properties of null (reading 'classList')
            // at HTMLDocument.<anonymous> (script.js:485:23)
            // !!! THERE IS NO NEXT CHARACTER WHEN LAST CHAR IS TYPED !!!
            // if (wordIdx === wordsArr.length - 1) {
            if (
                wordIdx === wordArrays[lineIdx][wordArrays[lineIdx].length - 1]
            ) {
                console.log("LAST WORD");
            }
            // if (charIdx === wordsArr[wordIdx].length - 1) {
            if (charIdx === wordArrays[lineIdx][wordIdx].length - 1) {
                console.log("LAST CHARACTER");
            }

            // DON'T ACCESS NEXT SPAN(UNDEFINED) AFTER LAST CHARACTER
            if (strIdx < stringWords.length - 1) {
                console.log("+++++++++++++++", strIdx);
                let nextCharacter = document.getElementById(
                    `span-${strIdx + 1}`
                );
                nextCharacter.classList.add("background", "black-border");
                nextChar();
            }

            // LAST CHARACTER TYPED IN LINE
            if (
                wordIdx === wordArrays[lineIdx].length - 1 &&
                charIdx === wordArrays[lineIdx][wordIdx].length - 1
            ) {
                console.log("LAST WORD, LAST CHAR! CHAR IDX:", charIdx);
            }
        }

        // WRONG KEY OR SHIFT FOR CAPITAL LETTERS
        // !!! LOOK INT && ITS A TEMP FIX FOR UNDEFINED LAST CHARACTER !!!
        else if (
            typedKey !== wordArrays[lineIdx][wordIdx][charIdx] &&
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
                wordArrays[lineIdx][wordIdx][charIdx]
            );

            let currentChar = document.getElementById(`span-${strIdx}`);
            let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
            // === === === === === === === === START === === === === === === === === ===
            // BUG !!! DO NOT MOVE CURSOR FORWARD, ADD SPACE A RED BORDER AND KEEP CURSOR ON SPACE
            if (stringWords[strIdx] === " ") {
                console.log("CHARACTER TYPED ON SPACE!");
                currentChar.classList.add("red-border");
            }
            // === === === === === === === === START === === === === === === === === ===

            currentChar.classList.add("red", "enlarged");

            nextCharacter.classList.add("background", "black-border");

            // REMOVE BORDER
            const prevChar = document.getElementById(`span-${strIdx}`);
            prevChar.classList.remove("background", "black-border");

            // GO TO NEXT CHAR IF WRONG CHAR TYPED
            nextChar();
        }

        console.log(
            "---------------------EVENT END---",
            "line idx: ",
            lineIdx,
            "word idx: ",
            wordIdx,
            "/",
            wordArrays[lineIdx].length - 1,
            "char idx: ",
            charIdx,
            "/",
            wordArrays[lineIdx][wordIdx].length - 1,
            "string idx: ",
            strIdx,
            "/",
            stringWords.length - 1
        );

        if (wordIdx === wordArrays[lineIdx].length - 1) {
            console.log("LAST WORD IN LINE");
        }
    });
});

/*
MASTER/multiple

TODOS

    STATISTICS / MONITOR:
        TIMER (1 MIN)
        SPEEDOMETER (WPM)
        GREEN KEYS COUNTER
        RED KEYS COUNTER
        COMPLETE WORDS COUNTER
        CORRECT WORDS COUNTER

    FEATURES:
        ☑️ START / NEW BUTTON
        ☑️ ALLOW USER TO SET CUSTOM LINE LENGTH
        LEVEL SELECTOR (100, 200, 500 ETC...)
        ☑️ DETECT CAPSLOCK
        CAPS LOCK WARNING MESSAGE
        BUILD RANDOM WORDS FROM PROBLEM CHARACTERS / WORDS

    CODE:
        FUNCTIONS:
            ☑️ STYLING CHARACTERS ASSIGN STYLES TO CSS (ADD AND REMOVE CLASS WITH JS)
            ☑️ SET CURSOR POSITION (FORWARD, BACK)
            ☑️ CLEAR INPUT
            
    PROBLEMS:
        REMOVE EVENTLISTENER WHEN APPLY CHANGES AS START BUTTON WILL ADD IT AGAIN !!!
        CLEAR SPANS AFTER CHANGES ARE MADE TO
            DIFFICULTY
            LENGTH
            PUNCTUATION
            CAPITAL
        THEN,
        HIGHLIGHT START BUTTON

        STOP MOVING CURSOR WHEN LETTER CHARACTER IS PRESSED INSTEAD OF SPACE AFTER WORD IS TYPED
        ☑️ ADD CURSOR TO ACTIVE LINE
        DON'T APPEND TEXT AS SPANS TO NEXT LINE DIV, JUST DISPLAY IT AS PARAGRAPH ?
        INCREMENT LINEIDX WHEN LAST WORD IS ALL GREEN AND SPACE IS PRESSED
        INCREMENT LINEIDX WHEN SPACE IS PRESSED ON LAST WORD OF LINE
            INITIALISE STRIDX
        DYNAMICALLY GENERATE NEXT LINE + 1 ?
        SHOW ALL TEXT AS ONE BLOCK


*/
