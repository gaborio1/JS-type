// IMPORT WORDS ARRAYS
// import common100 from './words.js';
import {
    common100,
    common200,
    jsReserved,
    jsObjPropMeth,
    punctMarks,
} from "./words.js";

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ELEMENT VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const controlsContainer = document.getElementById("controls-container");
const statsContainer = document.getElementById("stats-container");
const colourCodeContainer = document.getElementById("colour-code-container");
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
const orangeCounterSpan = document.getElementById("orange-counter-span");
const keystrokesSpan = document.getElementById("keystrokes-span");
const accuracySpan = document.getElementById("accuracy-span");

// TEXTCONTAINER
// DISABLED
// const textContainer = document.querySelector(".text-container");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LOGIC VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DEFAULT COMMON 100 WORDS
let targetArray = [...common100];
// DEFAULT LINE LENGTH
let sequenceLength = 30;
// DEFAULT HARD CODED ARRAY LENGTH (NUMBER OF LINES GENERATED WITH START BUTTON)
const wordsArrLength = 20;
// ARRAY OF WORDARRAYS (LINES)
let wordArrays = [];
// STRING BASED ON CURRENT LINE
let stringWords = "";
// CURSOR TRACKERS
let lineIdx = 0;
let wordIdx = 0;
let strIdx = 0;
let charIdx = 0;
// DEFAULT CONTROL SETTINGS
let punctuationOn = false;
let capitalOn = false;
let timerSelected = true;
let timerOn = false;

let keyStrokeCounter = 0;
// TEST: COUNT ALL COMPLETED WORDS (BOTH CORRECT AND INCORRECT)
let wordCounter = 0;
let greenCounter = 0;
let redCounter = 0;
// NOT IN USE YET
let orangeCounter = 0;
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

// GET CURRENT LENGTH OF WORDS PLUS SPACES IN BETWEEN WHEN BUILDING WORDSARRAY
// THIS IS TO DETERMINE LINE LENGTH FOR CUSTOM SETTINGS
const getStrLength = (arr) => {
    let length = 0;
    arr.forEach((word) => {
        length += word.length;
    });

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
};

const resetAccuracyCounters = () => {
    greenCounter = 0;
    redCounter = 0;
    accuracy = 0;
};

const resetAccuracyDisplays = () => {
    greenCounterSpan.textContent = "0";
    redCounterSpan.textContent = "0";
    orangeCounterSpan.textContent = "0";
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
    console.log("TARGET ARRAY LENGTH:", targetArray.length);

    // RESET ACCURACY COUNTERS / DISPLAYS , KEYSTROKE COUNTER
    speedSpan.textContent = 0;
    resetAccuracyCounters();
    resetAccuracyDisplays();
    keyStrokeCounter = 0;
    keystrokesSpan.textContent = 0;

    // UN BLUR CONTROLS
    controlsContainer.classList.remove("hidden-with-z-index");
    statsContainer.classList.remove("hidden-with-z-index");
    colourCodeContainer.classList.remove("hidden-with-z-index");

    // ADD LISTENER FOR TIMER IF 1 MIN TIMER IS SELECTED
    if (timerSelected) {
        textInput.addEventListener("keydown", startCountdown);
        console.log("EVENT LISTENER ADDED TEXT INPUT FOR TIMER");
    }

    // RESET WORDCOUNTER
    wordCounter = 0;

    // TRACK NUMBER OF START BUTTON CLICKS
    startButtonCounter += 1;
    // console.log("START BUTTON COUNTER", startButtonCounter);

    // CLEAR ALL STRING DATA FROM TEXT FIELDS AND EMPTY ARRAYS
    clearTextFields();

    // REMOVE HIGHLIGHT START BUTTON
    startButton.classList.remove("control-apply-active");
    // CHANGE PLACEHOLDER TO "START TYPING"
    textInput.placeholder = "Start typing or customise text";
    clearIdxTrackers();

    // DETECT CAPSLOCK
    if (event.getModifierState("CapsLock")) {
        console.log("CAPSLOCK IS ON!");
        textInput.placeholder = "CAPSLOCK IS ON!";
    }

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

    // ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 KEY EVENTS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    const handleKeyEvent = (event) => {
        const typedKey = event.key;
        console.log("EVENT: KEYUP", event.key);

        console.log("<<<<< WORD COUNTER:", wordCounter, ">>>>>");

        //NOT USED
        // console.log("event.code:", event.code)
        // counterOn = true;

        // ONLY KEEP TRACK OF KEYSTROKES WHILE CLOCK IS RUNNING
        if (timerOn) {
            keyStrokeCounter += 1;
            console.log("KEYSTROKE COUNTER:", keyStrokeCounter);
            keystrokesSpan.textContent = keyStrokeCounter;
        }

        // DISABLE CONTROLS BY HIDING IT BEHIND MAIN CONTAINER WHILE TIMER IS ON
        controlsContainer.classList.add("fadeOut");
        statsContainer.classList.add("fadeOut");
        colourCodeContainer.classList.add("fadeOut");

        // controlsContainer.classList.add("hidden-with-z-index");
        // statsContainer.classList.add("hidden-with-z-index");
        // colourCodeContainer.classList.add("hidden-with-z-index");

        // ENABLE CONTROLS WHEN TIME IS UP
        if (!timerOn) {
            console.log("<<<<< TIMER OFF >>>>>");

            controlsContainer.classList.remove("fadeOut");
            statsContainer.classList.remove("fadeOut");
            colourCodeContainer.classList.remove("fadeOut");

            // controlsContainer.classList.remove("hidden-with-z-index");
            // statsContainer.classList.remove("hidden-with-z-index");
            // colourCodeContainer.classList.remove("hidden-with-z-index");
        }

        // console.log(
        //     "🟩---EVENT START: ",
        //     event.key,
        //     " ---",
        //     "line idx: ",
        //     lineIdx,
        //     "word idx: ",
        //     wordIdx,
        //     "/",
        //     wordArrays[lineIdx].length - 1,
        //     "char idx: ",
        //     charIdx,
        //     "/",
        //     wordArrays[lineIdx][wordIdx].length - 1,
        //     "string idx: ",
        //     strIdx,
        //     "/",
        //     stringWords.length - 1
        // );

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DETECT CAPSLOCK 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        if (event.getModifierState("CapsLock")) {
            console.log("CAPSLOCK IS ON!");
        }

        if (typedKey === "CapsLock") {
            console.log("YOU JUST TURNED CAPSLOCK ON!");
            textInput.placeholder = "CAPSLOCK IS ON!";
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SHIFT 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        if (typedKey === "Shift") {
            console.log("SHIFT");
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BACKSPACE 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        // PREVENT CURSOR FROM GOING BACK IF ITS ON FIRST CHAR OF WORD (&& charIdx > 0)
        if (typedKey === "Backspace" && charIdx > 0) {
            // console.log("BACKSPACE");

            // INCREMENT ORANGE COUNTER
            orangeCounter += 1;

            prevChar();

            const currentCharacter = document.getElementById(`span-${strIdx}`);
            console.log("CURRENT CHAR ORANGE", currentCharacter);

            // ADD ORANGE BORDER TO BACKSPACE'D SPACE
            // !!! HAVE TO CHECK TEXTCONTENT !!!
            if (currentCharacter.innerText === " ") {
                currentCharacter.classList.add("orange-border");
            }

            if (strIdx === stringWords.length - 1) {
                currentCharacter.classList.add("orange-border");
            }

            currentCharacter.classList.add(
                "orange",
                "background",
                "black-border"
            );

            currentCharacter.classList.remove("red", "green");

            const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
            nextCharacter.classList.remove(
                "background",
                "black-border",
                "red-border"
            );
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CORRECT KEY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

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

            // LAST CHARACTER IN WORD (SPACE)
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
                    currentCharacter.classList.remove(
                        "red-border",
                        "orange-border"
                    );
                    // MOVE CURSOR FORWARD
                    nextCharacter.classList.add("background", "black-border");
                    strIdx += 1;
                }
            }

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
                    // PRINT LAST WORD SPANS WITHOUT TRAILING SPACE
                    // console.log(charSpans[i]);
                    if (charSpans[i].classList.contains("green")) {
                        greenCounter += 1;
                    }
                    if (charSpans[i].classList.contains("red")) {
                        redCounter += 1;
                    }
                    // NOT IN USE YET
                    if (charSpans[i].classList.contains("orange")) {
                        orangeCounter += 1;
                    }
                }
                console.log("<<< green:", greenCounter, "red:", redCounter);
                greenCounterSpan.textContent = greenCounter;
                redCounterSpan.textContent = redCounter;
                orangeCounterSpan.textContent = orangeCounter;
                accuracy = (100 / (greenCounter + redCounter)) * greenCounter;
                accuracySpan.textContent = `${Math.floor(accuracy)}%`;
                // ADD GREEN CLASS TO ACCURACY WHILE ITS 100%
                if (accuracy < 100) {
                    accuracySpan.classList.remove("green");
                }
                if (accuracy === 100) {
                    accuracySpan.classList.add("green");
                }
            }
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 WRONG KEY OR SHIFT FOR CAPITAL LETTERS 🀰🀰🀰🀰🀰🀰🀰🀰🀰
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

                // DON'T INCREMENT WORD COUNTER IF SPACE IS TYPED ON LAST WORD
                // wordCounter += 1;

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

        // console.log(
        //     "---------------------EVENT END---",
        //     "line idx: ",
        //     lineIdx,
        //     "word idx: ",
        //     wordIdx,
        //     "/",
        //     wordArrays[lineIdx].length - 1,
        //     "char idx: ",
        //     charIdx,
        //     "/",
        //     wordArrays[lineIdx][wordIdx].length - 1,
        //     "string idx: ",
        //     strIdx,
        //     "/",
        //     stringWords.length - 1
        // );

        console.log("<<<<< WORD COUNTER:", wordCounter, ">>>>>");
    };

    // ADD HANDLEKEYEVENT FOR KEYUP EVENT ONLY ONCE, REMOVE IT IF START IS CLICKED AGAIN, SEE IF BLOCK BELOW
    document.addEventListener("keydown", handleKeyEvent);

    // IF START BUTTON CLICKED AGAIN, RESET EVERYTHING AND GENERATE NEW DATA
    if (startButtonCounter > 1) {
        // REMOVE LISTENER
        document.removeEventListener("keydown", handleKeyEvent);
        // console.log("EVENT LISTENER REMOVED FROM DOCUMENT FOR KEYUP");

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
        startButton.classList.remove("control-apply-active");
    });
}

difficultyApply.addEventListener("click", function () {
    // REMOVE ACTIVE STYLE
    difficultyApply.classList.remove("control-apply-active");
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");

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
                targetArray = [...common200, ...common100];
            }
            if (difficultyRadios[i].value === "JavaScript") {
                console.log("JaveScript");
                targetArray = [...jsReserved, ...jsObjPropMeth];
            }

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
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
    startButton.classList.remove("control-apply-active");
};

// GET SLIDER FINAL VALUE AND ASSIGN TO SEQUENCE LENGTH
lengthApply.addEventListener("click", function () {
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");

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
    toggleButtonStyle(punctuationToggle);
    // toggleButtonState(punctuationToggle);
    punctuationApply.classList.add("control-apply-active");
    startButton.classList.remove("control-apply-active");
};

punctuationToggle.addEventListener("click", handlePunctuationToggle);

// 2. APPLY CHANGES WHEN CLICKED
punctuationApply.addEventListener("click", function () {
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");

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
    toggleButtonStyle(capitalToggle);
    // toggleButtonState(punctuationToggle);
    capitalApply.classList.add("control-apply-active");
    startButton.classList.remove("control-apply-active");
};

capitalToggle.addEventListener("click", handleCapitalToggle);

// 2. APPLY CHANGES WHEN CLICKED
capitalApply.addEventListener("click", function () {
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");

    // CLEAR TRACKERS, DISPLAY AND TARGET ARRAY/STRING
    clearDataAndDisplay();
    clearArrAndString();
    // TOGGLE STATE BOOLEAN
    toggleButtonState(capitalToggle);
    capitalApply.classList.remove("control-apply-active");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TIMER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// MAKE APPLY BUTTON ACTIVE IF SELECTION IS MADE
// for (let i = 0, length = timerRadios.length; i < length; i++) {
//     timerRadios[i].addEventListener("click", function () {
//         console.log("timer selected");
//         timerApply.classList.add("control-apply-active");
//     });
// }

// ONE TIME LISTENER FOR TIMER SETTIMEOUT
const countdown = () => {
    let seconds = 59;
    // seconds = 5;
    const tick = () => {
        const counter = document.getElementById("counter-div");
        seconds -= 1;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        // counter.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
            // MIGHT HAVE TO SET THIS TO TRUE WITH FIRST KEYPRESS
            timerOn = true;
        }

        let finalSpeed = 0;

        // CALCULATE CURRENT AVE SPEED EVERY SECOND
        if (Number.isInteger(seconds / 1)) {
            let currentSpeed = (60 / (60 - seconds)) * wordCounter;
            // DISABLED
            // speedSpan.innerText = currentSpeed.toFixed(1);
            // ROUND DOWN SPEED TO NEAREST INTEGER
            // speedSpan.innerText = `${Math.floor(currentSpeed)}WPM`;
            speedSpan.innerText = Math.floor(currentSpeed);
            finalSpeed = currentSpeed;
        }

        if (seconds === 0) {
            console.log("times up");
            // document.removeEventListener("keydown", handleKeyEvent);
            timerOn = false;
            // DISABLE INPUT AND SET VALUE
            textInput.value = "                 Try Again ➡";
            textInput.readOnly = true;

            speedSpan.innerText = finalSpeed;

            startButton.classList.add("control-apply-active");
            clearTextFields();
            textInput.removeEventListener("keydown", startCountdown);
            const totalKeystrokes = keyStrokeCounter;
            keystrokesSpan.textContent = totalKeystrokes;

            // controlsContainer.classList.remove("hidden-with-z-index");
            // !!! TRY THIS WITHOUT IF BLOCK AS ABOVE !!!
            // if (controlsContainer.classList.contains("hidden-with-z-index")) {
            //     console.log("<<<<< HIDDEN CLASS FOUND >>>>>");
            //     controlsContainer.classList.remove("hidden-with-z-index");
            //     statsContainer.classList.remove("hidden-with-z-index");
            //     colourCodeContainer.classList.remove("hidden-with-z-index");
            // }

            controlsContainer.classList.remove("fadeOut");
            controlsContainer.classList.add("fadeIn");
            statsContainer.classList.remove("fadeOut");
            statsContainer.classList.add("fadeIn");
            colourCodeContainer.classList.remove("fadeOut");
            colourCodeContainer.classList.add("fadeIn");
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

// console.log(timerRadios);
console.log(timerApply);

// for (let i = 0; i < timerRadios.length; i++) {
for (let i = 0, length = timerRadios.length; i < length; i++) {
    console.log(timerRadios[i]);
    timerRadios[i].addEventListener("click", function () {
        console.log("timer selected", timerRadios[i].value);
        timerApply.classList.add("control-apply-active");
        startButton.classList.remove("control-apply-active");
    });
}

timerApply.addEventListener("click", function () {
    // REMOVE ACTIVE STYLE
    timerApply.classList.remove("control-apply-active");
    // HIGHLIGHT START BUTTON
    startButton.classList.add("control-apply-active");

    // CLEAR TRACKERS, DISPLAY AND TARGET ARRAY/STRING
    clearDataAndDisplay();
    clearArrAndString();

    for (let i = 0; i < timerRadios.length; i++) {
        if (timerRadios[i].checked) {
            console.log("RADIOS VALUE:", timerRadios[i].value);
            if (timerRadios[i].value === "no-timer") {
                console.log("no timer");
                timerSelected = false;
            }
            if (timerRadios[i].value === "1min") {
                console.log("1 min timer");
                timerSelected = true;
            }
            break;
        }
    }
    console.log("TIMER SELECTED:", timerSelected);
});

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
        ☑️ ORANGE KEYS COUNTER (BACKSPACE)
        COMPLETE WORDS COUNTER
    FEATURES:
        ☑️ REMOVE ACTIVE CLASS (OR DISABLE?) START BUTTON WHEN CHANGES ARE MADE ON CONTROL PANEL, ONLY HIGHLIGHT APPLY
        ☑️ ANIMATE CONTROLS/STATS/COLURCODE STATS (FADE IN/OUT)
        ☑️ HIDE OR BLUR/DIM CONTROLS WHEN TIMER IS ACTIVE?
        RESET TIMER IF START BUTTON IS CLICKED?
        ☑️ TIMER ON/OFF
        ☑️ HIGHLIGHT APPLY BUTTONS WHEN CHANGES ARE MADE
            TIMER
        ☑️ START / NEW BUTTON
        ☑️ HIGHLIGHT START BUTTON AFTER CONTROL CHANGES HAVE BEEN APPLIED
        ☑️ ALLOW USER TO SET CUSTOM LINE LENGTH
        ☑️ LEVEL SELECTOR (100, 200, 500 ETC...)
            ☑️ TARGET ARRAY 100
            ☑️ TARGET ARRAY 200
            TARGET ARRAY 500
            TARGET ARRAY JAVASCRIPT SYNTAX
        ☑️ DETECT CAPSLOCK
        CAPS LOCK WARNING MESSAGE
            ☑️ WHEN PAGE LOADS
            AFTER PAGE IS LOADED
        BUILD RANDOM WORDS FROM PROBLEM CHARACTERS / WORDS
    CODE:
        FUNCTIONS:
            ☑️ STYLING CHARACTERS ASSIGN STYLES TO CSS (ADD AND REMOVE CLASS WITH JS)
            ☑️ SET CURSOR POSITION (FORWARD, BACK)
            ☑️ CLEAR INPUT
            ☑️RESET ALL INDEX TRACKERS (FOR START BUTTON - AND APPLY BUTTONS ON CONTROL PANEL ? MAYBE NOT NECESSARY)
            
    PROBLEMS:
        MAKE FONT FAMILY THE SAME FOR INPUT AND BUTTONS TOO (ROBOTO)
        ☑️ WORD COUNTER IS INCREMENTED AT NEW LINE WHEN SPACE IS TYPED ON LAST WORD IN LINE
        REMOVE KEY EVENT LISTENER WHEN TIMER STOPS
        ALLOW CORRECTION OF ANY CHAR IF SPACE HAS NOT BEEN CLICKED, BUT MULTIPLE RED CAHRACTERS OCCUR INTO NEXT WORD
        IF ANY KEY WAS TYPED ON SPACE, NEXT WORD WILL NOT WORK CORRECTLY (RED ON CORRECT)
            REASON: WORD COUNTER IS NOT INCREMENTED
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
        ADD ORANGE BORDER TO SPACE WHEN BACKSPACE IS USED
        STOP MOVING CURSOR WHEN LETTER CHARACTER IS PRESSED INSTEAD OF SPACE AFTER WORD IS TYPED
        ☑️ ADD CURSOR TO ACTIVE LINE
        ☑️ DON'T APPEND TEXT AS SPANS TO NEXT LINE DIV, JUST DISPLAY IT AS PARAGRAPH ?
        ☑️ INCREMENT LINEIDX WHEN LAST WORD IS ALL GREEN AND SPACE IS PRESSED
        ☑️ INCREMENT LINEIDX WHEN SPACE IS PRESSED ON LAST WORD OF LINE
            INITIALISE STRIDX
        DYNAMICALLY GENERATE NEXT LINE + 1 ?
        SHOW ALL TEXT AS ONE BLOCK
*/
