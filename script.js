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

const punctMarks = [",", ".", "!", "?", ":", ";", "-", "'"];

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ELEMENT VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DIFFICULTY
const difficultyApply = document.getElementById("diffuculty-apply");
// LENGTH
const slider = document.getElementById("length");
const lengthApply = document.getElementById("length-apply");
const lengthDisplaySpan = document.getElementById("length-display-span");
// PUNCTUATION
const punctuationToggle = document.getElementById("punctuation-toggle");
const punctuationApply = document.getElementById("punctuation-apply");
// CAPITAL
const capitalToggle = document.getElementById("capital-toggle");
const capitalApply = document.getElementById("capital-apply");
// ACTIVE SPAN
const textSpanContainerActive = document.getElementById("text-span-active");
// NEXT SPAN
const textSpanContainerNext = document.getElementById("text-span-next");
// TEXT INPUT
const textInput = document.getElementById("input");
// START BUTTON
const startButton = document.getElementById("start-button");
// ALL RADIOS
// const radios = document.getElementsByClassName("radio");
const difficultyRadios = document.getElementsByClassName("difficulty-radio");
const timerRadios = document.getElementsByClassName("timer-radio");

// TIMER
const timerApply = document.getElementById("timer-apply");
// SPEEDOMETER DISPLAY SPAN
const speedSpan = document.getElementById("speed-span");
// GREEN / RED COUNTER SPANS
const greenCounterSpan = document.getElementById("green-counter-span");
const redCounterSpan = document.getElementById("red-counter-span");
const keystrokesSpan = document.getElementById("keystrokes-span");
const accuracySpan = document.getElementById("accuracy-span");

// TEXTCONTAINER
// DISABLED
// const textContainer = document.querySelector(".text-container");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LOGIC VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// 🁢

let targetArray = [...common100];
let sequenceLength = 30;
// HARD CODED ARRAY LENGTH (TEMPORARY)
const wordsArrLength = 20;
let stringWords = "";
let wordArrays = [];
let lineIdx = 0;
let wordIdx = 0;
let strIdx = 0;
let charIdx = 0;
let punctuationOn = false;
let capitalOn = false;
let timerOn = false;
let keyStrokeCounter = 0;
// TEST: COUNT ALL COMPLETED WORDS (BOTH CORRECT AND INCORRECT)
let wordCounter = 0;
let greenCounter = 0;
let redCounter = 0;
let accuracy = 0;

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 FUNCTIONS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

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

const clearTextInput = () => {
    textInput.value = "";
    // AFTER WORD IS COMPLETED CLEAR PLACEHOLDER TOO, ITS HARDCODED IN HTML
    textInput.placeholder = "";
};

// GET RANDOM WORD FROM ARRAY
// const getRandom = (arr) => {
//     const randIdx = Math.floor(Math.random() * targetArray.length);
//     return targetArray[randIdx];
// };

// PICK RANDOM ELEMENT FROM ARRAY (USED WITH TARGET ARRAY AND PUNCTUATION MARKS ARRAY)
const getRandom = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
};

// ================== PUNCTUATION ==================

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
        if (element === punctuationToggle) {
            punctuationOn = true;
            console.log("PUNCTUATION:", punctuationOn);
        }
        if (element === capitalToggle) {
            capitalOn = true;
            console.log("CAPITAL:", capitalOn);
        }
    } else {
        if (element === punctuationToggle) {
            punctuationOn = false;
            console.log("PUNCTUATION", punctuationOn);
        }
        if (element === capitalToggle) {
            capitalOn = false;
            console.log("CAPITAL", capitalOn);
        }
    }
};

// UPPERCASE FIRST LETTER IN WORD
const capitaliseWord = (str) => {
    const lettersArr = str.split("");
    lettersArr[0] = lettersArr[0].toUpperCase();
    // console.log(lettersArr.join(""));
    return lettersArr.join("");
};

// =================================================

// GET CURRENT LENGTH OF WORDS PLUS SPACES IN BETWEEN WHEN BUILDING WORDSARRAY
// THIS IS TO DETERMINE LINE LENGTH FOR CUSTOM SETTINGS
const getStrLength = (arr) => {
    let length = 0;
    arr.forEach((word) => {
        length += word.length;
    });
    // DISABLED AS TRAILING SPACE IS NOW PART OF WORD
    // if (arr.length > 1) {
    //     length += arr.length - 1;
    // }
    return length;
};

// BUILD STRING BY ADDING RANDOM WORDS ONE BY ONE UNTIL LENGTH IS REACHED

// POPULATE wordArrays WITH ARRAYS OF WORDS (wordsArr), ONE FOR EACH TEXT LINE
const buidWordArrays = (numOfLines) => {
    // console.log("TARGET ARRAY FROM BUILDARRAYS:", targetArray);
    for (let i = 0; i < numOfLines; i += 1) {
        let arr = [];
        while (true) {
            if (getStrLength(arr) >= sequenceLength) break;
            // GET RANDOM WORD
            let currWord = getRandom(targetArray);
            // CONCAT RANDOM PUNCT MARK
            if (punctuationOn) {
                // currWord += randomPunctMark();
                currWord += getRandom(punctMarks);
            }
            // CAPITAL ON, MAKE FIRST CHAR UPPERCASE
            if (capitalOn) {
                // !!! MAKE ADJUSTMENTS FOR WORD "I" !!!
                currWord = capitaliseWord(currWord);
            }

            currWord += " ";
            // console.log("<<<< SPACE ADDED >>>");
            arr.push(currWord);
        }
        wordArrays.push(arr);
    }
};

// CLEAR INDEX TRACKERS
const clearIdxTrackers = () => {
    charIdx = 0;
    wordIdx = 0;
    lineIdx = 0;
    strIdx = 0;
};

// CLEAR WORDARRAYS AND STRINGWORDS
const clearArrAndString = () => {
    wordArrays = [];
    stringWords = "";
};

const clearTextFields = () => {
    textSpanContainerActive.innerHTML = "";
    textSpanContainerNext.innerHTML = "";
};

// CLEAR TEXT FIELDS ACTIVE / NEXT, INPUT, AND INITIALISE WORDARRAYS
const clearDataAndDisplay = () => {
    clearTextFields();
    clearTextInput();
    clearIdxTrackers();
    clearArrAndString();
    // document.removeEventListener("keyup", handleKeyEvent);
};

const resetAccuracyCounters = () => {
    greenCounter = 0;
    redCounter = 0;
    accuracy = 0;
};

const resetAccuracyDisplays = () => {
    greenCounterSpan.textContent = "0";
    redCounterSpan.textContent = "0";
    accuracySpan.textContent = "0";
};

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

let startButtonCounter = 0;

// HIGHLIGHT START BUTTON
startButton.classList.add("control-apply-active");

// ADD LISTENER
startButton.addEventListener("click", (event) => {
    // RESET ACCURACY COUNTERS / DISPLAYS , KEYSTROKE COUNTER
    speedSpan.textContent = 0;
    resetAccuracyCounters();
    resetAccuracyDisplays();
    keyStrokeCounter = 0;
    keystrokesSpan.textContent = 0;

    // ADD LISTENER FOR TIMER AND RESET WORDCOUNTER
    textInput.addEventListener("keydown", startCountdown);
    console.log("EVENT LISTENER ADDED TEXT INPUT FOR TIMER");

    // textInput.removeEventListener("keydown", startCountdown);
    // console.log("EVENT LISTENER REMOVED FROM TEXT INPUT FOR TIMER");
    wordCounter = 0;

    // TRACK NUMBER OF START BUTTON CLICKS
    startButtonCounter += 1;
    // console.log("START BUTTON COUNTER", startButtonCounter);

    // CLEAR ALL STRING DATA FROM TEXT FIELDS AND EMPTY ARRAYS
    // clearArrAndString();
    clearTextFields();
    // clearIdxTrackers();

    // REMOVE HIGHLIGHT START BUTTON
    startButton.classList.remove("control-apply-active");
    // CHANGE PLACEHOLDER TO "START TYPING"
    textInput.placeholder = "Start typing or customise text";
    clearIdxTrackers();

    // SET CURSOR TO INPUT BOX  AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
    // SETS CURSOR AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
    // txtInput.setSelectionRange(0, 0);
    textInput.focus();

    // TEST FOR ARRAY OF 5 ARRAYS
    buidWordArrays(wordsArrLength);
    // console.log("WORDARRAYS:", wordArrays);

    // OR USE OWN CUSTOM TEXT
    // wordsArr = ["your", "custom", "text"];

    // CREATE TEXT STRING FROM RANDOM WORDS UP TO sequenceLength IN LENGTH
    // CREATE STRING OF WORDS WITH SPACES
    // USE THIS FUNCTION BELOW?

    const buildStringWords = (arr) => {
        return arr.join("");
    };

    stringWords = wordArrays[lineIdx].join("");

    // console.log("STRINGWORDS:", stringWords);

    // DISABLED
    // textContainer.textContent = stringWords;

    // MAKE EACH CHARACTER OF THE STRING A span AND APPEND AS A CHILD ELEMENT TO ITS CONTAINER

    // CREATE SPANS FROM wordArrays' ARRAY OF WORDS, JOIN ELEMENS TO ONE STRING WITH SPACES AND THEN SPLIT
    // wordArrays[lineIdx] WILL BE INCREMENTED IN EVETLISTENER
    // console.log("WORDARRAYS FIRST LINE:", wordArrays[lineIdx]);
    const createSpans = (lineIdx, location) => {
        // console.log("hello from CREATESPANS");
        for (const [idx, char] of wordArrays[lineIdx]
            .join("")
            .split("")
            .entries()) {
            // console.log(idx, char);
            // CREATE ELEMENT
            const span = document.createElement("span");
            // SET TEXT CONTENT / CLASS / ID
            span.innerText = char;
            span.className = "active-txt-span";
            span.id = `span-${idx}`;
            // console.log(span);
            // APPEND TO PARENT DIV
            location.appendChild(span);
        }
    };

    createSpans(lineIdx, textSpanContainerActive);

    // INITIALISE TEXTSPANCONTAINER NEXT
    // createSpans(lineIdx + 1, textSpanContainerNext);
    // FILL THIS CONTAINER WITH TEXT, NOT SPANS
    let stringWordsNext = "";
    stringWordsNext = wordArrays[lineIdx + 1].join("");
    textSpanContainerNext.innerText = stringWordsNext;

    // ------------------------------------------------------------------------
    // THIS IS NOW REPLACED WITH createSpans(lineIdx, textSpanContainerActive); ABOVE
    // NO NEED FOR STRINGWORDS AS ARRAY WORDS NOW HAVE TRAILING SPACES

    // LOOP OVER STRINGWORDS TO CREATE SPANS(EVERY CHAR INCLUDING SPACES IN BETWEEN)
    // !!! ACCESS INDEX OF ITERATION IN FOR OF LOOP WITH DESTRUCTURING SYNTAX + entries() METHOD

    // for (const [idx, char] of stringWords.split("").entries()) {
    //     console.log("hello from LOOP");
    //     // console.log(idx, char);
    //     // CREATE ELEMENT
    //     const span = document.createElement("span");
    //     // SET TEXT CONTENT / CLASS / ID
    //     span.innerText = char;
    //     span.className = "span";
    //     span.id = `span-${idx}`;
    //     // APPEND TO PARENT DIV
    //     textSpanContainerActive.appendChild(span);
    // }
    // ------------------------------------------------------------------------

    // NODELIST OF ALL CHAR SPANS
    // const charSpans = document.querySelectorAll(".span");
    // console.log(charSpans);

    // ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 KEY EVENTS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    const handleKeyEvent = (event) => {
        const typedKey = event.key;
        console.log("EVENT: KEYUP", event.key);
        //NOT USED
        // console.log("event.code:", event.code)
        // counterOn = true;

        // ADD LISTENER FOR TIMER
        // textInput.addEventListener("keydown", startCountdown);

        // ONLY KEEP TRACK OF KEYSTROKES WHILE CLOCK IS RUNNING
        if (timerOn) {
            keyStrokeCounter += 1;
            console.log("KEYSTROKE COUNTER:", keyStrokeCounter);
            keystrokesSpan.textContent = keyStrokeCounter;
        }

        console.log(
            "🟩---EVENT START: ",
            event.key,
            " ---",
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

        // DETECT CAPSLOCK

        if (event.getModifierState("CapsLock")) {
            console.log("CAPSLOCK IS ON!");
        }

        // SHIFT
        if (typedKey === "Shift") {
            console.log("SHIFT");
        }

        // BACKSPACE
        // PREVENT CURSOR FROM GOING BACK IF ITS ON FIRST CHAR OF WORD (&& charIdx > 0)
        if (typedKey === "Backspace" && charIdx > 0) {
            // console.log("BACKSPACE");

            prevChar();

            const currentCharacter = document.getElementById(`span-${strIdx}`);
            // console.log("CURRENT CHAR ORANGE", currentChar);
            currentCharacter.classList.add(
                "orange",
                "background",
                "black-border"
            );
            currentCharacter.classList.remove("red", "green");

            const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
            nextCharacter.classList.remove("background", "black-border");
        }

        /*
            // JUMP IDX TO THE NEXT WORD IN STRING
            if (charIdx < wordArrays[lineIdx][wordIdx].length) {
                // IF SPACE IS PRESSED ANYWHERE ON LAST WORD
                console.log("INCOMPLETE WORD, NEXT LINE()");

                let nextWordIdx;

                // console.log(
                //     "charIdx:",
                //     charIdx,
                //     "word length:",
                //     wordArrays[lineIdx][wordIdx].length
                // );

                console.log("STRING IDX TO JUMP TO NEXT WORD IN STRING!");
                // FIND NEXT SPACE IN STRING AND SET INDEX TO NEXT WORD AFTER SPACE
                for (let i = strIdx; i < stringWords.length; i += 1) {
                    if (stringWords[i] === " ") {
                        console.log("space found at index: ", i);
                        nextWordIdx = i;

                        let currentCharacter = document.getElementById(
                            `span-${strIdx}`
                        );
                        currentCharacter.classList.add("red-border");
                        break;
                    }
                }
                // SKIP TO NEXT WORD IN STRING
                strIdx = nextWordIdx;
                // CLEAR INPUT IF GOT WORD WRONG
                clearTextInput();
            }

            // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
            // ON ALL CHARACTERS BUT LAST
            if (strIdx < stringWords.length) {
                let currentCharacter = document.getElementById(`span-${strIdx}`);
                currentCharacter.classList.remove("background", "black-border");
                const nextCharacter = document.getElementById(
                    `span-${strIdx + 1}`
                );
                nextCharacter.classList.add("background", "black-border");
                nextWord();
                strIdx += 1;
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
        */

        // ==================== CORRECT KEY TYPED ======================
        if (typedKey === wordArrays[lineIdx][wordIdx][charIdx]) {
            // NOT LAST CHARACTER IN WORD
            if (charIdx < wordArrays[lineIdx][wordIdx].length - 1) {
                console.log("<<<<<  NOT LAST CHARACER >>>>>");
                let nextCharacter = document.getElementById(
                    `span-${strIdx + 1}`
                );
                nextCharacter.classList.add("background", "black-border");
                let currentCharacter = document.getElementById(
                    `span-${strIdx}`
                );
                currentCharacter.classList.add("green", "enlarged");
                currentCharacter.classList.remove(
                    "red",
                    "orange",
                    "background",
                    "black-border",
                    // !!! THIS WONT WORK !!! (BECAUSE ITS THE LAST CHAR IN WORD)
                    "red-border"
                );

                nextChar();
            }

            // LAST CHARACTER IN WORD
            else if (charIdx === wordArrays[lineIdx][wordIdx].length - 1) {
                if (wordIdx < wordArrays[lineIdx].length - 1) {
                    console.log("<<<<< LAST CHARACER !!! >>>>>");
                    let nextCharacter = document.getElementById(
                        `span-${strIdx + 1}`
                    );

                    // REMOVE RED BORDER FROM SPACE IF CORRECTED
                    let currentCharacter = document.getElementById(
                        `span-${strIdx}`
                    );
                    currentCharacter.classList.remove("red-border");
                    // MOVE CURSOR FORWARD
                    nextCharacter.classList.add("background", "black-border");
                    strIdx += 1;
                }
            }

            // if (strIdx === stringWords.length - 1) {
            //     console.log("<<<<< LAST WORD, LAST CHARACTER !!! >>>>>")
            // }

            // REMOVE CURSOR FROM SPACE
            if (typedKey === " ") {
                // END OF LINE SPACE
                if (strIdx === stringWords.length - 1) {
                    // START NEW LINE
                    nextLine();
                    wordCounter += 1;
                    console.log("WORD COUNTER TEST:", wordCounter);
                    // DELETE SPANS FROM ACTIVE DIV / APPEND SPANS CREATED FROM NEXT LINE
                    textSpanContainerActive.innerHTML = "";
                    createSpans(lineIdx, textSpanContainerActive);
                    // ADD CURSOR TO FIRST CHAR IN LINE
                    const firstCharacter = document.getElementById("span-0");
                    firstCharacter.classList.add("background", "black-border");
                    // UPDATE STRWORDS
                    stringWords = wordArrays[lineIdx].join("");
                    // DELETE CONTENT / APPEND NEXT LINE TO TEXTSPAN NEXT DIV
                    textSpanContainerNext.innerHTML = "";
                    // createSpans(lineIdx + 1, textSpanContainerNext);
                    // APPEND TEXT AS STRING INSTEAD OF SPANS !!!
                    stringWordsNext = wordArrays[lineIdx + 1].join(" ");
                    textSpanContainerNext.innerText = stringWordsNext;
                }

                // if (strIdx === stringWords.length - 1) {
                //     console.log("<<<<< LAST WORD, LAST CHARACTER !!! >>>>>")
                // }

                // console.log("SPACE");

                // ONLY ACCESS CURRENTCHAR IF IT IS NOT END OF LINE (IF STATEMENT DOESNT WORK FOR CLASSLIST REMOVE, STILL GET TYPE ERROR )
                // !!! ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at HTMLDocument.handleKeyEvent (script.js:680:33)
                if (strIdx < stringWords.length - 1) {
                    let currentCharacter = document.getElementById(
                        `span-${strIdx - 1}`
                    );
                    currentCharacter.classList.remove(
                        "background",
                        "black-border"
                    );
                    nextWord();
                    clearTextInput();
                }

                // let currentCharacter = document.getElementById(`span-${strIdx - 1}`);
                // currentCharacter.classList.remove("background", "black-border");
                // nextWord();
                // clearTextInput();

                wordCounter += 1;
                console.log("<<< COUNT GREEN KEYS NOW >>>");
                console.log(
                    "LAST WORD COMPLETED:",
                    wordArrays[lineIdx][wordIdx - 1],
                    "length:",
                    wordArrays[lineIdx][wordIdx - 1].length,
                    "strIdx:",
                    strIdx,
                    "stringWords length:",
                    stringWords.length
                );

                let lastWordLength = wordArrays[lineIdx][wordIdx - 1].length;
                let charSpans = document.querySelectorAll(".active-txt-span");
                // console.log(charSpans);

                // START LOOP BACKWARDS AND COUNT SPANS WITH GREEN CLASS
                for (let i = strIdx - 2; i >= strIdx - lastWordLength; i -= 1) {
                    // console.log(wordArrays[lineIdx][wordIdx - 1][i]);
                    console.log(charSpans[i]);
                    if (charSpans[i].classList.contains("green")) {
                        greenCounter += 1;
                    }
                    if (charSpans[i].classList.contains("red")) {
                        redCounter += 1;
                    }
                }
                console.log("<<< green:", greenCounter, "red:", redCounter);
                greenCounterSpan.textContent = greenCounter;
                redCounterSpan.textContent = redCounter;
                accuracy = (100 / (greenCounter + redCounter)) * greenCounter;
                accuracySpan.textContent = `${Math.floor(accuracy)}%`;
            }
        }

        // =========== WRONG KEY OR SHIFT FOR CAPITAL LETTERS ============
        else if (
            typedKey !== wordArrays[lineIdx][wordIdx][charIdx] &&
            typedKey !== " " &&
            typedKey !== "Shift" &&
            typedKey !== "Backspace"
        ) {
            console.log(
                "WRONG KEY!",
                "typed:",
                typedKey,
                "actual:",
                wordArrays[lineIdx][wordIdx][charIdx]
            );

            let currentCharacter = document.getElementById(`span-${strIdx}`);
            let nextCharacter = document.getElementById(`span-${strIdx + 1}`);

            currentCharacter.classList.add("red");

            // ONLY ACCESS NEXT CHAR IF IT IS NOT THE END OF LINE SPACE
            if (strIdx < stringWords.length - 1) {
                nextCharacter.classList.add("background", "black-border");
            }

            // const prevChar = document.getElementById(`span-${strIdx}`);
            currentCharacter.classList.remove("background", "black-border");

            if (stringWords[strIdx] === " ") {
                // console.log("<<<<< ADD RED BORDER TO SPACE >>>>>");
                currentCharacter.classList.add("red-border");
            }

            nextChar();
        }

        //               +++++ START +++++

        // =========== SPACE ON WORD (WRONG CHAR AND SPACE) ===========
        else if (
            typedKey !== wordArrays[lineIdx][wordIdx][charIdx] &&
            typedKey === " "
        ) {
            console.log("<<<<< SPACE ON WORD, SKIP TO NEXT WORD >>>>>");

            // JUMP IDX TO THE NEXT WORD IN STRING
            if (charIdx < wordArrays[lineIdx][wordIdx].length) {
                // IF SPACE IS PRESSED ANYWHERE ON LAST WORD
                console.log("INCOMPLETE WORD, NEXT LINE()");

                let nextWordIdx;

                // console.log(
                //     "charIdx:",
                //     charIdx,
                //     "word length:",
                //     wordArrays[lineIdx][wordIdx].length
                // );

                console.log("STRING IDX TO JUMP TO NEXT WORD IN STRING!");
                // FIND NEXT SPACE IN STRING AND SET INDEX TO NEXT WORD AFTER SPACE
                for (let i = strIdx; i < stringWords.length; i += 1) {
                    if (stringWords[i] === " ") {
                        console.log("space found at index: ", i);
                        nextWordIdx = i + 1;

                        let currentCharacter = document.getElementById(
                            `span-${strIdx}`
                        );
                        currentCharacter.classList.add("red-border");
                        break;
                    }
                }
                // SKIP TO NEXT WORD IN STRING
                strIdx = nextWordIdx;
                // CLEAR INPUT IF GOT WORD WRONG
                clearTextInput();
            }

            // ======= SPACE ON LAST WORD (WRONG CHAR AND SPACE) ==========
            if (wordIdx === wordArrays[lineIdx].length - 1) {
                console.log("<<<<< SPACE ON LAST WORD, NEW LINE! >>>>>");
                // START NEW LINE
                nextLine();
                wordCounter += 1;
                console.log("WORD COUNTER TEST:", wordCounter);
                // DELETE SPANS FROM ACTIVE DIV / APPEND SPANS CREATED FROM NEXT LINE
                textSpanContainerActive.innerHTML = "";
                createSpans(lineIdx, textSpanContainerActive);
                // ADD CURSOR TO FIRST CHAR IN LINE
                const firstCharacter = document.getElementById("span-0");
                firstCharacter.classList.add("background", "black-border");
                // UPDATE STRWORDS
                stringWords = wordArrays[lineIdx].join("");
                // DELETE CONTENT / APPEND NEXT LINE TO TEXTSPAN NEXT DIV
                textSpanContainerNext.innerHTML = "";
                // createSpans(lineIdx + 1, textSpanContainerNext);
                // APPEND TEXT AS STRING INSTEAD OF SPANS !!!
                stringWordsNext = wordArrays[lineIdx + 1].join(" ");
                textSpanContainerNext.innerText = stringWordsNext;
            }

            // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND ON CURRENT
            // ON ALL CHARACTERS BUT LAST
            if (strIdx < stringWords.length) {
                let currentCharacter = document.getElementById(
                    `span-${strIdx - 1}`
                );
                currentCharacter.classList.remove("background", "black-border");
                const nextCharacter = document.getElementById(`span-${strIdx}`);
                nextCharacter.classList.add("background", "black-border");
                nextWord();
                // strIdx += 1;
            }
        }
        //                  +++++ END +++++

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

        // console.log("WORD COUNTER TEST:", wordCounter);
    };

    // ADD HANDLEKEYEVENT FOR KEYUP EVENT ONLY ONCE, REMOVE IT IF START IS CLICKED AGAIN, SEE IF BLOCK BELOW
    document.addEventListener("keydown", handleKeyEvent);

    // IF START BUTTON CLICKED AGAIN, RESET EVERYTHING AND GENERATE NEW DATA
    if (startButtonCounter > 1) {
        // REMOVE LISTENER
        document.removeEventListener("keydown", handleKeyEvent);
        // console.log("EVENT LISTENER REMOVED FROM DOCUMENT FOR KEYUP");

        // textInput.removeEventListener("keydown", startCountdown);
        // console.log("EVENT LISTENER REMOVED FROM TEXT INPUT FOR TIMER");

        // RESET
        clearTextFields();
        clearTextInput();
        clearIdxTrackers();
        clearArrAndString();
        // INITIALISE
        buidWordArrays(wordsArrLength);
        createSpans(lineIdx, textSpanContainerActive);
        stringWords = wordArrays[lineIdx].join("");
        stringWordsNext = wordArrays[lineIdx + 1].join("");
        textSpanContainerNext.innerText = stringWordsNext;
        textInput.placeholder = "Start typing or customise text";
    }

    // if (keyStrokeCounter >= 1) {
    //     textInput.removeEventListener("keydown", startCountdown);
    // }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CONTROL PANEL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DIFFICULTY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// MAKE APPLY BUTTON ACTIVE IF SELECTION IS MADE
for (let i = 0, length = difficultyRadios.length; i < length; i++) {
    difficultyRadios[i].addEventListener("click", function () {
        console.log("difficulty selected");
        difficultyApply.classList.add("control-apply-active");
    });
}

difficultyApply.addEventListener("click", function () {
    // REMOVE ACTIVE STYLE
    difficultyApply.classList.remove("control-apply-active");
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");
    // REMOVE LISTENER FOR KEYUP
    // !!!
    // document.removeEventListener("keydown", handleKeyEvent);
    // CLEAR TRACKERS, DISPLAY AND TARGET ARRAY/STRING
    clearDataAndDisplay();
    clearArrAndString();

    for (let i = 0, length = difficultyRadios.length; i < length; i++) {
        if (difficultyRadios[i].checked) {
            // do whatever you want with the checked radio
            console.log("RADIOS VALUE:", difficultyRadios[i].value);
            if (difficultyRadios[i].value === "100") {
                console.log("100");
                targetArray = [...common100];
            }
            if (difficultyRadios[i].value === "200") {
                console.log("200");
                targetArray = [...commonTest];
            }

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    console.log("TARGET ARRAY:", targetArray);
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LINE LENGTH 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// DEFAULT LINE LENGTH, ALSO HARD CODED IN HTML

// DISPLAY CURRENT VALUE OF SLIDER
slider.onchange = function (event) {
    // console.log("SLIDER VALUE HAS BEEN CHANGED:", slider.value);
    // DISPLAY CURRENT VALUE
    lengthDisplaySpan.textContent = slider.value;
    console.log("slider changed");
    lengthApply.classList.add("control-apply-active");
};

// GET SLIDER FINAL VALUE AND ASSIGN TO SEQUENCE LENGTH
lengthApply.addEventListener("click", function () {
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");
    // REMOVE LISTENER FOR KEYUP
    // !!!
    // document.removeEventListener("keydown", handleKeyEvent);
    // CLEAR TRACKERS, DISPLAY AND TARGET ARRAY/STRING
    clearDataAndDisplay();
    clearArrAndString();
    sequenceLength = slider.value;
    // console.log("SLIDER CHANGED, NEW VALUE TO SUBMIT:", sequenceLength);
    lengthApply.classList.remove("control-apply-active");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PUNCTUATION 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// 1. ONLY TOGGLE STYLE
const handlePunctuationToggle = () => {
    // REMOVE LISTENER FOR KEYUP
    // !!!
    // document.removeEventListener("keydown", handleKeyEvent);
    toggleButtonStyle(punctuationToggle);
    // toggleButtonState(punctuationToggle);
    punctuationApply.classList.add("control-apply-active");
};

punctuationToggle.addEventListener("click", handlePunctuationToggle);

// 2. APPLY CHANGES WHEN CLICKED
punctuationApply.addEventListener("click", function () {
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");
    // REMOVE LISTENER FROM PUNCTUATION-TOGGLE

    // punctuationToggle.removeEventListener("click", handlePunctuationToggle);

    // CLEAR TRACKERS, DISPLAY AND TARGET ARRAY/STRING
    clearDataAndDisplay();
    clearArrAndString();
    // TOGGLE STATE BOOLEAN
    toggleButtonState(punctuationToggle);
    punctuationApply.classList.remove("control-apply-active");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CAPITAL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// 1. ONLY TOGGLE STYLE
const handleCapitalToggle = () => {
    // REMOVE LISTENER FOR KEYUP
    // !!!
    // document.removeEventListener("keydown", handleKeyEvent);
    toggleButtonStyle(capitalToggle);
    // toggleButtonState(punctuationToggle);
    capitalApply.classList.add("control-apply-active");
};

capitalToggle.addEventListener("click", handleCapitalToggle);

// 2. APPLY CHANGES WHEN CLICKED
capitalApply.addEventListener("click", function () {
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");
    // REMOVE LISTENER FROM CAPITAL-TOGGLE

    // capitalToggle.removeEventListener("click", handleCapitalToggle);

    // CLEAR TRACKERS, DISPLAY AND TARGET ARRAY/STRING
    clearDataAndDisplay();
    clearArrAndString();
    // TOGGLE STATE BOOLEAN
    toggleButtonState(capitalToggle);
    capitalApply.classList.remove("control-apply-active");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TIMER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ONE TIME LISTENER FOR TIMER SETTIMEOUT
const countdown = () => {
    let seconds = 59;
    seconds = 10;
    const tick = () => {
        const counter = document.getElementById("counter-test");
        seconds -= 1;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        // counter.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
            // MIGHT HAVE TO SET THIS TO TRUE WITH FIRST KEYPRESS
            timerOn = true;
        }

        // CALCULATE CURRENT AVE SPEED EVERY SECOND
        if (Number.isInteger(seconds / 1)) {
            let currentSpeed = (60 / (60 - seconds)) * wordCounter;
            // DISABLED
            // speedSpan.innerText = currentSpeed.toFixed(1);
            // ROUND DOWN SPEED TO NEAREST INTEGER
            // speedSpan.innerText = `${Math.floor(currentSpeed)}WPM`;
            speedSpan.innerText = Math.floor(currentSpeed);
        }

        if (seconds === 0) {
            timerOn = false;
            // console.log("times up");
            textInput.value = "                 Try Again ➡";
            speedSpan.innerText = currentSpeed;
            startButton.classList.add("control-apply-active");
            clearTextFields();
            textInput.removeEventListener("keydown", startCountdown);
            const totalKeystrokes = keyStrokeCounter;
            keystrokesSpan.textContent = totalKeystrokes;
        }
    };
    tick();
};

// ONE OFF FUNCTION RUNS ON FIRST KEYPRESS
const startCountdown = () => {
    // alert('Thanks for clicking!');
    // console.log("REMOVE LISTENER NOW!");
    countdown();
    textInput.removeEventListener("keydown", startCountdown);
    console.log("EVENT LISTENER REMOVED FROM TEXT INPUT FOR TIMER");
};

// textInput.addEventListener("keydown", startCountdown);

// MAKE APPLY BUTTON ACTIVE IF SELECTION IS MADE
for (let i = 0, length = timerRadios.length; i < length; i++) {
    timerRadios[i].addEventListener("click", function () {
        console.log("timer selected");
        timerApply.classList.add("control-apply-active");
    });
}

/*
MASTER/multiple
TODOS
    STATISTICS / MONITOR:
        ☑️ MAKE NEXT LINE TEXT GREY 
        ☑️ TIMER (1 MIN)
        ☑️ SPEEDOMETER (WPM)
            ☑️ CALCULATE AVE SPEED IN REAL TIME EVERY SECOND
        GREEN WORDS COUNTER
        ☑️ GREEN KEYS COUNTER
        ☑️ RED KEYS COUNTER
        COMPLETE WORDS COUNTER
    FEATURES:
        RESET TIMER IF START BUTTON IS CLICKED?
        ☑️ HIGHLIGHT APPLY BUTTONS WHEN CHANGES ARE MADE
            TIMER IS NOT DONE YET
        ☑️ START / NEW BUTTON
        ☑️ HIGHLIGHT START BUTTON AFTER CONTROL CHANGES HAVE BEEN APPLIED
        ☑️ ALLOW USER TO SET CUSTOM LINE LENGTH
        ☑️ LEVEL SELECTOR (100, 200, 500 ETC...)
            TARGET ARRAY 200
            TARGET ARRAY 500
            TARGET ARRAY JAVASCRIPT SYNTAX
        ☑️ DETECT CAPSLOCK
        CAPS LOCK WARNING MESSAGE
        BUILD RANDOM WORDS FROM PROBLEM CHARACTERS / WORDS
    CODE:
        FUNCTIONS:
            ☑️ STYLING CHARACTERS ASSIGN STYLES TO CSS (ADD AND REMOVE CLASS WITH JS)
            ☑️ SET CURSOR POSITION (FORWARD, BACK)
            ☑️ CLEAR INPUT
            ☑️RESET ALL INDEX TRACKERS (FOR START BUTTON - AND APPLY BUTTONS ON CONTROL PANEL ? MAYBE NOT NECESSARY)
            
    PROBLEMS:
        TIMER IS NOT WORKING PROPERLY IF START BUTTON IS CLICKED BEFORE TIME RUNS OUT
        ☑️ CONTROL PANEL SETTINGS DON'T WORK TOGETHER WELL (PROBLEM WITH LISTENERS)
        ☑️ INITIALISE (CLEAR) ALL TEXT DATA WHEN CLICKING START
        LISTEN FOR KEYPRESS ON INPUT FIELD ONLY !!!
        ADD EVENTLISTENER TO CONTROL OPTIONS WHEN PAGE LOADS? BEFORE START BUTTON IS CLICKED?
        REMOVE EVENTLISTENER WHEN APPLY CHANGES AS START BUTTON WILL ADD IT AGAIN !!!
        CLEAR SPANS / RESET TRACKERS AFTER CHANGES ARE MADE TO
            ☑️ DIFFICULTY
            ☑️ LENGTH
            ☑️ PUNCTUATION
            ☑️ CAPITAL
        THEN,
        ☑️ HIGHLIGHT START BUTTON
        STOP MOVING CURSOR WHEN LETTER CHARACTER IS PRESSED INSTEAD OF SPACE AFTER WORD IS TYPED
        ☑️ ADD CURSOR TO ACTIVE LINE
        ☑️ DON'T APPEND TEXT AS SPANS TO NEXT LINE DIV, JUST DISPLAY IT AS PARAGRAPH ?
        ☑️ INCREMENT LINEIDX WHEN LAST WORD IS ALL GREEN AND SPACE IS PRESSED
        ☑️ INCREMENT LINEIDX WHEN SPACE IS PRESSED ON LAST WORD OF LINE
            INITIALISE STRIDX
        DYNAMICALLY GENERATE NEXT LINE + 1 ?
        SHOW ALL TEXT AS ONE BLOCK
*/
