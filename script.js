// IMPORT WORDS ARRAYS
// import common100 from './words.js';
import {
    common100,
    common200,
    jsReserved,
    jsObjPropMeth,
    punctMarks,
    keysLevel_1,
    keysLevel_2,
    keysLevel_3,
    keysLevel_4,
    keysLevel_5,
    keysLevel_6,
    keysLevel_7,
    keysLevel_8,
    keysLevel_9,
    keyLevelsArray,
} from "./words.js";

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ELEMENT VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const card = document.getElementById("card--main"); // CARD CONTAINED WITHIN SCENE

const container = document.getElementById("container");
const controlsContainer = document.getElementById("controls-container");
const statsContainerLeft = document.getElementById("stats-container__left");
const statsContainerRight = document.getElementById("stats-container__rigth");
const colourCodeContainer = document.getElementById("colour-code-container");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   CONTROL PANEL   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DIFFICULTY
const difficultyApply = document.getElementById("diffuculty-apply");
const difficultyRadios = document.getElementsByClassName("difficulty-radio");
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
// ENTER
const enterToggle = document.getElementById("enter-toggle");
const enterApply = document.getElementById("enter-apply");
// SOUND
const soundToggle = document.getElementById("sound-toggle");
const soundApply = document.getElementById("sound-apply");
// COLOUR THEME
const colourThemeElements = document.getElementsByClassName("colour-theme");
const themeToggle = document.getElementById("theme-toggle");
const themeApply = document.getElementById("theme-apply");
// ALL RADIOS
// const radios = document.getElementsByClassName("radio");
// const timerRadios = document.getElementsByClassName("timer-radio");
// TIMER
const timerToggle = document.getElementById("timer-toggle");
const timerApply = document.getElementById("timer-apply");
// ELEMENTS THAT FADE WHILE TIMER IS ON
const fadeWithTimerElements =
    document.getElementsByClassName("fadeout-with-timer");
// FLIP BUTTON (APP/INFO)
const flipButtons = document.getElementsByClassName("flip-button--main");
// CONTROL PANEL INPUTS/TOGGLE BUTTONS THAT ARE DISABLED DURING TIMER
const disabledDuringTimer = document.getElementsByClassName(
    "disabled-during-timer"
);
const instructionsContainer = document.getElementById("instructions-container");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   BEGINNER CONTROL PANEL   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ALL LEVEL BUTTONS
const levelButtons = document.getElementsByClassName("level-button");
// INDIVIDUAL LEVEL BUTTONS
const level_1 = document.getElementById("level-1");
const level_2 = document.getElementById("level-2");
const level_3 = document.getElementById("level-3");
const level_4 = document.getElementById("level-4");
const level_5 = document.getElementById("level-5");
const level_6 = document.getElementById("level-6");
const level_7 = document.getElementById("level-7");
const level_8 = document.getElementById("level-8");
const level_9 = document.getElementById("level-9");
// LEVEL BUTTON STATE BOOLEANS
let level_1_On = false;
let level_2_On = false;
let level_3_On = false;
let level_4_On = false;
let level_5_On = false;
let level_6_On = false;
let level_7_On = false;
let level_8_On = false;
let level_9_On = false;
// let level_10_On = false;
// let level_11_On = false;

const levelsApply = document.getElementById("levels-apply");

const beginnerShowButton = document.getElementById(
    "beginner-control-show-button"
);
const beginnerHideButton = document.getElementById(
    "beginner-control-hide-button"
);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   TEXT FIELDS   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ACTIVE SPAN
const textSpanContainerActive = document.getElementById("text-span-active");
// NEXT SPAN
const textSpanContainerNext = document.getElementById("text-span-next");
// !!! textSpanContainerNext IS NOW textSpanContainerNextParagraph !!!
const textSpanContainerNextParagraph =
    document.getElementById("text-span-next-p");
// TEXT INPUT
const textInput = document.getElementById("input");
// START BUTTON
const startButton = document.getElementById("start-button");
// REFRESH ICON
const refreshIcon = document.getElementById("refresh-icon");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   STATS / KEYBOARD   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// SPEEDOMETER DISPLAY SPAN
const speedSpan = document.getElementById("speed-span");
// GREEN / RED COUNTER SPANS
const greenCounterSpan = document.getElementById("green-counter-span");
const redCounterSpan = document.getElementById("red-counter-span");
const orangeCounterSpan = document.getElementById("orange-counter-span");
const keystrokesSpan = document.getElementById("keystrokes-span");
const accuracySpan = document.getElementById("accuracy-span");
// KEYBOARD
const keyboard = document.getElementById("keyboard");
const letterKeys = document.getElementsByClassName("key--letter");

// MESSAGE DIV
const messageDiv = document.getElementById("message-div");

// CAPSLOCK
const capsLockKey = document.getElementById("capslock-key");

// TEXTCONTAINER
// DISABLED
// const textContainer = document.querySelector(".text-container");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LOGIC VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

let startButtonCounter = 0;
// DEFAULT COMMON 100 WORDS
let targetArray = [...common100];
// DEFAULT LINE LENGTH
let sequenceLength = 30;
// let sequenceLength = 10;
// DEFAULT HARD CODED ARRAY LENGTH (NUMBER OF LINES GENERATED WITH START BUTTON)
const wordsArrLength = 20;
// ARRAY OF WORDARRAYS (LINES)
let wordArrays = [];
// STRING BASED ON CURRENT LINE
let stringWords = "";
// STRINGWORDS NEXT
let stringWordsNext = "";
// CURSOR TRACKERS
let lineIdx = 0;
let wordIdx = 0;
let strIdx = 0;
let charIdx = 0;
// DEFAULT CONTROL SETTINGS
let punctuationOn = false;
let capitalOn = false;
let enterOn = false;
// DISABLED
let timerOn = true;
// let timerOn = false;
let soundOn = true;

let keyStrokeCounter = 0;
// TEST: COUNT ALL COMPLETED WORDS (BOTH CORRECT AND INCORRECT)
let wordCounter = 0;
let greenCounter = 0;
let redCounter = 0;
// NOT IN USE YET
let orangeCounter = 0;
let accuracy = 0;

// TRACK CONSECUTIVE WRONG KEYS
let wrongCounter = 0;
const maxMistakes = 5;

// TRACK PROBLEM KEYS (NO DUPLICATES IN SET)
let problemKeysSet = new Set();
const problemKeySpans = document.getElementsByClassName("problem-key-span");
const probKeyWordsArr = [];
let tempProbWordsArr = []; // WORDS THAT CONTAIN BROBLEM KEYS FROM PREVIOUS SESSION
// BEGINNER STATUS
let beginnerOn = false;
// COLOUR THEME
let darkThemeOn = false;
// CAPSLOCK STATUS

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 FUNCTIONS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// CURSOR POSITION
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

// CLEAR INPUT FIELD
const clearTextInput = () => {
    textInput.value = "";
    // AFTER WORD IS COMPLETED CLEAR PLACEHOLDER TOO, ITS HARDCODED IN HTML
    textInput.placeholder = "";
};

// PICK RANDOM ELEMENT FROM ARRAY (USED WITH TARGET ARRAY AND PUNCTUATION MARKS ARRAY)
const getRandomFromArr = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
};

// GENERATE RANDOM NUMBER FOR RANDOM BEGINNER WORD LENGTHS
const getRandomIdxLessThanNum = (num) => {
    return Math.floor(Math.random() * num);
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
    // if (element !== themeToggle) {
    //     element.disabled = true;
    // }
};

// TOGGLE BOOLEAN BUTTON STATE BASED ON CLASS ONLY IF BEGINNER LEVEL IS NOT SELECTED
const toggleButtonState = (element) => {
    // console.log(element);
    if (!beginnerOn) {
        if (element.classList.contains("toggle-on")) {
            if (element === punctuationToggle) {
                punctuationOn = true;
            }
            if (element === capitalToggle) {
                capitalOn = true;
            }
            if (element === soundToggle) {
                soundOn = true;
            }
            // if (element === timerToggle && !beginnerOn) {
            if (element === timerToggle) {
                timerOn = true;
            }
            if (element === enterToggle) {
                enterOn = true;
            }
            if (element === themeToggle) {
                darkThemeOn = true;
            }
        } else {
            if (element === punctuationToggle) {
                punctuationOn = false;
            }
            if (element === capitalToggle) {
                capitalOn = false;
            }
            if (element === soundToggle) {
                soundOn = false;
            }
            if (element === timerToggle) {
                timerOn = false;
            }
            if (element === enterToggle) {
                enterOn = false;
            }
            if (element === themeToggle) {
                darkThemeOn = false;
            }
        }
    }
};

// UPPERCASE FIRST LETTER IN WORD
const capitaliseWord = (str) => {
    const lettersArr = str.split("");
    lettersArr[0] = lettersArr[0].toUpperCase();
    return lettersArr.join("");
};

// GET CURRENT LENGTH OF WORDS STRINGED TOGETHER INCLUDING SPACES IN BETWEEN WHEN BUILDING WORDSARRAY
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
const buildWordArrays = (numOfLines) => {
    // console.log("TARGET ARRAY FROM BUILDARRAYS:", targetArray);
    for (let i = 0; i < numOfLines; i += 1) {
        let arr = [];

        // ALLOW EXTRA SPACE FOR ENTER KEY AT THE END OF LINE
        if (enterOn && sequenceLength > 44) {
            sequenceLength = 44;
        }

        while (true) {
            if (getStrLength(arr) >= sequenceLength) break;

            let currWord = getRandomFromArr(targetArray); // GET RANDOM WORD

            if (punctuationOn) {
                currWord += getRandomFromArr(punctMarks); // CONCAT RANDOM PUNCT MARK
            }

            if (capitalOn) {
                currWord = capitaliseWord(currWord); // MAKE FIRST CHAR UPPERCASE
            }

            currWord += " ";
            // console.log("<<<< SPACE ADDED >>>");
            arr.push(currWord);
        }
        // NEW++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // REPLACE TRAILING SPACE WITH ENTER SIGN ON LAST WORD OF ARRAY
        if (enterOn) {
            arr[arr.length - 1] =
                arr[arr.length - 1].substring(
                    0,
                    arr[arr.length - 1].length - 1
                ) + "⏎";

            // console.log(arr);
        }
        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
    textSpanContainerNextParagraph.innerHTML = "";
};

// CLEAR TEXT FIELDS ACTIVE / NEXT, INPUT, AND INITIALISE WORDARRAYS
const clearDataAndDisplay = () => {
    clearTextFields();
    clearTextInput();
    clearIdxTrackers();
    clearArrAndString();
};

const calcAccuracy = () => {
    return (100 / (greenCounter + redCounter)) * greenCounter;
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

// REMOVE ALL COLOUR CLASSES FROM ACCURACY
const resetAccSpanColours = () => {
    accuracySpan.classList.remove(
        "green",
        "light-green",
        "yellow-green",
        "yellow",
        "gold",
        "orange",
        "orange-red",
        "red"
    );
};

// ADD COLOUR CLASS BASED ON CURRENT ACC VALUE
const colourAccuracySpan = () => {
    if (accuracy <= 87) {
        accuracySpan.classList.add("red");
    }

    if (accuracy > 87 && accuracy <= 89) {
        accuracySpan.classList.add("orange-red");
    }

    if (accuracy > 89 && accuracy <= 91) {
        accuracySpan.classList.add("orange");
    }

    if (accuracy > 91 && accuracy <= 93) {
        accuracySpan.classList.add("gold");
    }

    if (accuracy > 93 && accuracy <= 95) {
        accuracySpan.classList.add("yellow");
    }

    if (accuracy > 95 && accuracy <= 97) {
        accuracySpan.classList.add("yellow-green");
    }

    if (accuracy > 97 && accuracy < 100) {
        accuracySpan.classList.add("light-green");
    }

    if (accuracy === 100) {
        accuracySpan.classList.add("green");
    }
};

const playSound = (soundFile, volume) => {
    const sound = new Howl({
        src: [`sounds/${soundFile}`],
        volume: volume,
    });
    sound.play();
};

//  DETECT CAPSLOCK CHANGE
// SOURCE: https://www.educative.io/answers/how-to-detect-the-caps-lock-status-in-javascript
// The browser treats caps lock on as keydown and caps lock off as keyup, so we need to bind both keydown and keyup to detect a change in caps lock.
const capsLockWarningsOn = () => {
    capsLockKey.style.background = "red";
    capsLockKey.classList.add("blink");
    messageDiv.textContent = "CAPSLOCK IS ON";
};

const capsLockWarningsOff = () => {
    capsLockKey.style.background = "none";
    // capsLockKey.style.background = "#333"; // BLACK KEYS, NOT IN USE
    capsLockKey.classList.remove("blink");
    messageDiv.textContent = "";
};

const doc = document.getElementById("container");

const testCapsLock = (event) => {
    if (event.code === "CapsLock") {
        let isCapsLockOn = event.getModifierState("CapsLock");
        if (isCapsLockOn) {
            // console.log("Caps Lock turned on");
            capsLockWarningsOn();
        } else {
            // console.log("Caps Lock turned off");
            capsLockWarningsOff();
        }
    }
};
doc.addEventListener("keyup", testCapsLock);
doc.addEventListener("keydown", testCapsLock);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON FUNCTIONS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// FIND PROBLEM KEY WORDS IN CURRENT TARGET ARRAY / UPDATE TARGET ARRAY WITH PROBLEM WORDS ONLY
const findAndApplyProblemKeyWords = () => {
    if (problemKeysSet.size > 0) {
        problemKeysSet.forEach((key) => {
            // !!! HAVE TO RESET TARGET ARRAY BECAUSE IT WILL HAVE A FILTERED STATE FROM BEFORE
            // targetArray.forEach((word) => {
            common100.forEach((word) => {
                if (word.indexOf(key) > -1) {
                    // console.log("WORD FOUND", word);
                    tempProbWordsArr.push(word);
                }
            });
        });
        targetArray = [...tempProbWordsArr]; // UPDATE TARGET ARRAY WITH FILTERED WORDS ARRAY

        // tempProbWordsArr = []; // RESET TEMP PROB WORDS ARRAY ???
    } else {
        // !!! TEMP FIX, THIS SHOULD BE SET TO PREVIOUSLY SET VALUE !!!
        // console.log("NO PROBLEM KEYS IN SET");
        if (!beginnerOn) {
            targetArray = [...common100];
        }
        // targetArray = [...common100];
    }

    // console.log("<<<<< PROBLEM KEYS SET >>>>>", problemKeysSet);
    // console.log("<<<<< TEMP PROB WORDS >>>>>", tempProbWordsArr);
    // console.log("TARGET ARRAY:", targetArray);
};

const handleCapslockChange = () => {
    if (event.getModifierState("CapsLock")) {
        // console.log("CAPSLOCK IS ON! - START BUTTON");
        capsLockWarningsOn();
    } else {
        capsLockWarningsOff();
    }
};

// REMOVE RED BACKGROUND FROM PROBLEM KEYS
const removeProblemKeyHighlight = () => {
    for (let i = 0; i < letterKeys.length; i += 1) {
        letterKeys[i].classList.remove("red-background");
        // letterKeys[i].style.color = "red";
    }
};

// DISABLE CONTROL APPLY BUTTONS (DISABLED)

// const disableApplyButtons = () => {
//     difficultyApply.disabled = true;
//     punctuationApply.disabled = true;
//     capitalApply.disabled = true;
//     enterApply.disabled = true;
//     timerApply.disabled = true;
//     lengthApply.disabled = true;
//     soundApply.disabled = true;
//     themeApply.disabled = true;
// };

// MAKE EACH CHARACTER OF THE STRING A span AND APPEND AS A CHILD ELEMENT TO ITS CONTAINER

// CREATE SPANS FROM wordArrays' ARRAY OF WORDS, JOIN ELEMENS TO ONE STRING WITH SPACES AND THEN SPLIT
// wordArrays[lineIdx] WILL BE INCREMENTED IN EVETLISTENER
const createSpans = (lineIdx, location) => {
    for (const [idx, char] of wordArrays[lineIdx] // ACCESSING IDX IN FOR OF LOOP

        .join("")
        .split("")
        .entries()) {
        // console.log(idx, char);
        const span = document.createElement("span"); // CREATE ELEMENT
        // SET TEXT CONTENT / CLASS / ID
        span.innerText = char;
        span.className = "active-txt-span";
        // ADD ACTIVE CLASS TO ENTER TO FOR STYLING PURPOSES
        if (char === "⏎") {
            // console.log("ADD ENTER-ON CLASS TO LAST SPAN");
            span.className = "active-txt-span active-txt-span--enter";
        }

        // ASSINGN DIFFERENT ID BASED ON LOCATION
        span.id =
            location === textSpanContainerActive
                ? `span-${idx}`
                : `span--next-${idx}`;

        // span.id = `span-${idx}`;

        location.appendChild(span); // APPEND TO PARENT DIV
    }
    // THIS SELECTS LAST SPACE OF ACTIVE LINE WITH DARK THEME / ENTER OFF /

    // if (darkThemeOn && !enterOn && location === textSpanContainerActive) {
    //     console.log("ADD COLOUR THEME CLASS TO LAST SPAN");
    //     const charSpans = document.querySelectorAll(".active-txt-span");
    //     console.log(charSpans[charSpans.length - 1]);
    //     charSpans[charSpans.length - 1].classList.add("colour-theme");
    // }
};

// KEY EVENT START LOGS
const logKeyEventStart = () => {
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
};

// KEY EVENT END LOGS
const logKeyEventEnd = () => {
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
};

// BACKSPACE
let typedKey = "";
const handleBackspace = () => {
    if (typedKey === "Backspace" && charIdx > 0) {
        // console.log("BACKSPACE");

        orangeCounter += 1;
        prevChar();

        const currentCharacter = document.getElementById(`span-${strIdx}`);
        // console.log("CURRENT CHAR ORANGE", currentCharacter);

        // ADD ORANGE BORDER TO BACKSPACE'D SPACE  !!! HAVE TO CHECK TEXTCONTENT !!!
        if (currentCharacter.innerText === " ") {
            currentCharacter.classList.add("orange-border");
        }

        if (strIdx === stringWords.length - 1) {
            currentCharacter.classList.add("orange-border");
        }

        currentCharacter.classList.add("orange", "background", "black-border");

        currentCharacter.classList.remove("red", "green");

        const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
        nextCharacter.classList.remove(
            "background",
            "black-border",
            "red-border"
        );
    }
};

//🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CORRECT KEY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

//  WORD[0] - WORD[LENGTH-1], ALL CHARACTERS IN WORD EXCLUDING TRAILING SPACE

const correctKeyNotLastSpace = () => {
    // console.log("<<<<<  NOT LAST CHARACER >>>>>");
    let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
    nextCharacter.classList.add("background", "black-border");
    let currentCharacter = document.getElementById(`span-${strIdx}`);
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
};

// WORD[LENGTH-1], TRAILING SPACE ALL WORDS EXCEPT LAST WORD

const correctSpaceNotLastWord = () => {
    if (wordIdx < wordArrays[lineIdx].length - 1) {
        // console.log("<<<<< LAST CHARACER !!! >>>>>");
        let nextCharacter = document.getElementById(`span-${strIdx + 1}`);

        // REMOVE RED BORDER FROM SPACE IF CORRECTED
        let currentCharacter = document.getElementById(`span-${strIdx}`);
        currentCharacter.classList.remove("red-border", "orange-border");
        // MOVE CURSOR FORWARD
        nextCharacter.classList.add("background", "black-border");
        strIdx += 1;
    }
};

// END OF LINE SPACE
const correctEndOfLineSpace = () => {
    // console.log("<<<<< END OF LINE SPACE >>>>> STRINGIDX", strIdx);
    // console.log("<<<<< END OF LINE SPACE >>>>> WORDIDX", wordIdx);
    // console.log("<<<<< END OF LINE SPACE >>>>> WORD", wordArrays[lineIdx][wordIdx]);

    // 1. HAVE TO COUNT COLOURS IN LAST WORD BEFORE NEXTLINE() TO BE ABLE TO CHECK CURRENT LINE SPANS
    countSpanColoursInLastWord();
    // 2. ALSO, UPDATE COLOUR COUNTER VALUES
    displayColourCounterValues();
    // 3. NOW, MOVE ON TO NEXT LINE
    nextLine();
    wordCounter += 1;
    // console.log("WORD COUNTER TEST:", wordCounter);
    textSpanContainerActive.innerHTML = ""; // DELETE SPANS FROM ACTIVE DIV
    createSpans(lineIdx, textSpanContainerActive); // APPEND SPANS CREATED FROM NEXT LINE
    // ADD CURSOR TO FIRST CHAR IN LINE
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    stringWords = wordArrays[lineIdx].join(""); // UPDATE STRWORDS
    // DELETE CONTENT / APPEND NEXT LINE TO TEXTSPAN NEXT DIV
    textSpanContainerNextParagraph.innerHTML = "";
    // APPEND TEXT AS STRING NOT SPANS !!!
    // stringWordsNext = wordArrays[lineIdx + 1].join(" ");
    // textSpanContainerNextParagraph.innerText = stringWordsNext;
    createSpans(lineIdx + 1, textSpanContainerNextParagraph);
};

// ALL OTHER SPACES
const correctSpaceNotEndOfLine = () => {
    // console.log("ERROR, THIS FUNCTION SHOULD NOT RUN AT END OF LINE");

    // ONLY GET PREVIOUS CHAR IF ITS NOT FIRST CHAR AS IT WILL BE NULL
    // CONDITION WILL INTRODUCE ANOTHER BUG, ALL KEYS WILL GO RED
    // if (strIdx > 0) {
    let currentCharacter = document.getElementById(`span-${strIdx - 1}`);
    currentCharacter.classList.remove("background", "black-border");
    // }

    // let currentCharacter = document.getElementById(`span-${strIdx - 1}`);
    // console.log("CURRENT CHARACTER", currentCharacter, typeof currentCharacter);

    // console.log("correctSpaceNotEndOfLine", currentCharacter);

    // currentCharacter.classList.remove("background", "black-border");

    nextWord();
    clearTextInput();
};

// COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY

const countSpanColours = () => {
    // console.log("countSpanColours", "-CHAR IDX", charIdx);
    let lastWordLength = wordArrays[lineIdx][wordIdx - 1].length;
    let charSpans = document.querySelectorAll(".active-txt-span");
    // START LOOP BACKWARDS AND COUNT SPANS WITH GREEN CLASS
    for (let i = strIdx - 2; i >= strIdx - lastWordLength; i -= 1) {
        // PRINT LAST WORD SPANS WITHOUT TRAILING SPACE
        // console.log(charSpans[i]);

        // if (charSpans[i] === undefined) {
        //     console.log("charspans[i] UNDEFINED!!!");
        // }

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

    // console.log("<<< green:", greenCounter, "red:", redCounter, "orange", orangeCouner);
};

// THIS FUNCTION HAS TO RUN IN correctEndOfLineSpace() BEFORE nextline()
// IT ONLY COUNTS COLOURS IN LAST WORD IN LINE
const countSpanColoursInLastWord = () => {
    // console.log("HELLO FROM  COUNTSPANCOLOURSLASTSPACE");
    let currentWordLength = wordArrays[lineIdx][wordIdx].length;
    // console.log("CURRENT WORD LENGTH", currentWordLength);
    let charSpans = document.querySelectorAll(".active-txt-span");
    // START LOOP BACKWARDS AND COUNT SPANS WITH GREEN CLASS
    // WE ARE STILL ON CURRENT WORD VS LAST WORD IN countSpanColours() ABOVE
    for (let i = strIdx - 1; i >= strIdx - currentWordLength + 1; i -= 1) {
        // PRINT LAST WORD SPANS WITHOUT TRAILING SPACE
        // console.log(charSpans[i]);

        // if (charSpans[i] === undefined) {
        //     console.log("charspans[i] UNDEFINED!!!");
        // }

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
};

// DISPLAY COLOUR COUNTER VALUES
const displayColourCounterValues = () => {
    greenCounterSpan.textContent = greenCounter;
    redCounterSpan.textContent = redCounter;
    orangeCounterSpan.textContent = orangeCounter;
};

// HIGHLIGHT PROBLEM KEYS ON KEYBOARD
const highlightProblemKeys = () => {
    problemKeysSet.forEach((key) => {
        // console.log(key);
        // !!! WITHOUT THIS CONDITION CURSOR WILL NOT MOVE FORWARD INTO NEXT WORD, IT WILL STAY ON SPACE !!!
        if (key !== undefined) {
            for (let i = 0; i < letterKeys.length; i += 1) {
                if (letterKeys[i].innerText === key.toUpperCase()) {
                    // !!! RED CLASS DOES NOT OVERWRITE CSS COLOUR !!!
                    letterKeys[i].classList.add("red-background");
                    // letterKeys[i].style.color = "red";
                }
            }
        }
    });
};

// SPACE ON WORD - FIND NEXT SPACE IN STRING AND SET INDEX TO NEXT WORD AFTER SPACE
const findNextWordIndex = () => {
    let nextWordIdx;
    for (let i = strIdx; i < stringWords.length; i += 1) {
        if (stringWords[i] === " ") {
            // console.log("space found at index: ", i);
            nextWordIdx = i + 1;

            let currentCharacter = document.getElementById(`span-${strIdx}`);
            currentCharacter.classList.add("red-border");
            break;
        }
    }
    return nextWordIdx;
};

// SPACE ON LAST WORD
const spaceOnLastWord = () => {
    // console.log("<<<<< SPACE ON LAST WORD, NEW LINE! >>>>>");

    wrongCounter += 1;
    nextLine();

    textSpanContainerActive.innerHTML = ""; // DELETE SPANS FROM ACTIVE DIV
    createSpans(lineIdx, textSpanContainerActive); // APPEND SPANS CREATED FROM NEXT LINE
    // ADD CURSOR TO FIRST CHAR IN LINE
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    stringWords = wordArrays[lineIdx].join(""); // UPDATE STRWORDS

    textSpanContainerNextParagraph.innerHTML = ""; // DELETE CONTENT
    // stringWordsNext = wordArrays[lineIdx + 1].join(" ");
    // textSpanContainerNextParagraph.innerText = stringWordsNext;
    createSpans(lineIdx + 1, textSpanContainerNextParagraph);
};

// SPACE ON WORD
// APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND FROM CURRENT
// ON ALL CHARACTERS BUT LAST
const spaceOnWord = () => {
    let currentCharacter = document.getElementById(`span-${strIdx - 1}`);

    wrongCounter += 1;

    console.log("<<<<< UNCAUGHT TYPE ERROR spaceOnWord()>>>>>");
    // ERROR: script.js:720 Uncaught TypeError: Cannot read properties of null (reading 'classList') at correctSpaceNotEndOfLine (script.js:720:22)
    currentCharacter.classList.remove("background", "black-border");
    const nextCharacter = document.getElementById(`span-${strIdx}`);
    nextCharacter.classList.add("background", "black-border");
    nextWord();
};

// END MESSEAGE SEQUENCE (MESSAGES - RELOAD)
const reloadSequence = () => {
    textInput.readOnly = true;
    // THIS HAS TO STAY INSIDE KEY EVENTS AS handleKeyEvent WILL BE NOT RECOGNISED
    // document.removeEventListener("keydown", handleKeyEvent);
    textInput.value = "     ❌   Don't play silly games!  ❌";

    setTimeout(function () {
        textInput.value = "         ⬅️   Correct mistakes!   ⬅️";
    }, 1500);

    setTimeout(function () {
        // textInput.value = "     ☠️   YOU ARE TERMINATED!  ☠️";
        textInput.value = "      ☠️   You are terminated!  ☠️";

        if (soundOn) {
            playSound("mixkit-distant-war-explosions-1696.wav", 0.9);
        }
    }, 3000);

    setTimeout(function () {
        location.reload();
    }, 5000);
};

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ALWAYS CENTER APP VERTICALLY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// SOURCE: https://stackoverflow.com/questions/15615552/get-div-height-with-plain-javascript

// APP CONTAINER HEIGHT
const appHeight = document.getElementById("container").clientHeight;
// console.log("CONTAINER HEIGHT", appHeight);
// GET WINDOW HEIGHT
let viewportHeight = window.innerHeight;
// INITIALISE MARGIN TOP
let marginTop = 0;

// CALC MARGIN TOP
const calcMarginTop = () => {
    return (viewportHeight - appHeight) / 2;
};

// SET MARGIN TOP IF APP HEIGHT IS SMALLER THAN WINDOW HEIGHT
const setMarginTop = function () {
    viewportHeight = window.innerHeight;
    // console.log(viewportHeight);
    if (viewportHeight > appHeight) {
        marginTop = calcMarginTop();
        // console.log("MARGIN TOP:", marginTop);
        // BOTH CARD SIDES
        container.style.marginTop = `${marginTop}px`;
        instructionsContainer.style.marginTop = `${marginTop}px`;
    }
};

// LISTENER EVENTS
window.addEventListener("resize", setMarginTop);
window.addEventListener("load", setMarginTop);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PAGE LOAD 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

startButton.classList.add("control-apply-active"); // HIGHLIGHT START BUTTON
textInput.disabled = true;

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ADD LISTENER
startButton.addEventListener("click", (event) => {
    // if (beginnerOn) {
    //     messageDiv.textContent = "BEGINNER LEVEL";
    //     messageDiv.style.background = "rgba(0, 0, 255, 0.507)";
    // }

    // console.log("<<<<< PROBLEM KEYS SET >>>>>", problemKeysSet);
    // console.log("<<<<< TEMP PROB WORDS >>>>>", tempProbWordsArr);
    // console.log("START TARGET ARRAY:", targetArray);

    startButtonCounter += 1; // TRACK NUMBER OF START BUTTON CLICKS

    // console.log("START BUTTON", startButtonCounter);

    if (beginnerOn) {
        timerOn = false;
        // console.log("TIMER ON", timerOn);
    }

    textInput.disabled = false;

    levelsApply.disabled = true;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DETECT CAPSLOCK 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    handleCapslockChange();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PROBLEM KEYS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    // !!! THIS CONDITION IS NOT WORKING PROPERLY !!!
    // HAVE TO CLEAR PROB KEYS SET WITH HIDE BEGINNER BUTTON
    if (!beginnerOn) {
        // IF THERE IS ANY PROBLEM KEY,  FILL tempProbWordsArr WITH WORDS THAT CONTAIN PROBLEM KEYS
        findAndApplyProblemKeyWords();
        problemKeysSet.clear(); // RESET PROBLEM KEYS SET AFTER PROBLEM KEYS HAVE BEEN USED FOR NEW SET OF WORDS

        tempProbWordsArr = []; // RESET TEMPORARY ARRAY
        // targetArray = [...common100];
        removeProblemKeyHighlight();
    }
    problemKeysSet.clear();
    removeProblemKeyHighlight();
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CONTROL PANEL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    // DISABLED
    // disableApplyButtons();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 STATISTICS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    resetAccSpanColours(); // RESET ACCURACY COUNTER COLOUR

    wordCounter = 0;

    // RESET ACCURACY COUNTERS / DISPLAYS , KEYSTROKE COUNTER
    speedSpan.textContent = 0;
    resetAccuracyCounters();
    resetAccuracyDisplays();
    keyStrokeCounter = 0;
    keystrokesSpan.textContent = 0;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 INPUT ROW 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    textInput.readOnly = false; // ALLOW USER INPUT TO BE TYPED
    // SET CURSOR TO INPUT BOX  AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
    // SETS CURSOR AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
    // txtInput.setSelectionRange(0, 0);
    textInput.focus();

    // ADD LISTENER TO INPUT FOR TIMER IF 1 MIN TIMER IS SELECTED

    // !!! IF TIMERON IS SET TO FALSE AT 0 SECONDS THIS WILL NOT RUN !!!
    // !!! TIMERON IS INDEPENDENT FROM CONTROL SETTING (BUTTON STATUS) !!!

    // INSTEAD OF TIMERON, CHECK IS BUTTON IS ACTIVE AND IF IT IS, SET TIMERON TO TRUE
    // if (timerToggle.classList.contains("control-apply-active") && !beginnerOn) {
    if (timerOn && !beginnerOn) {
        // timerOn = true;
        textInput.addEventListener("keydown", startCountdown);
        // console.log("EVENT LISTENER ADDED TEXT INPUT FOR TIMER");
    }

    // REMOVE HIGHLIGHT START BUTTON
    startButton.classList.remove("control-apply-active");
    // CHANGE PLACEHOLDER TO "START TYPING"
    textInput.placeholder = "Start typing or customise text";
    clearIdxTrackers();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TEXT FIELDS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    textSpanContainerNextParagraph.classList.remove("totalFadeOut"); // SHOW NEXT LINE
    clearTextFields(); // CLEAR ALL STRING DATA FROM TEXT FIELDS AND EMPTY ARRAYS
    buildWordArrays(wordsArrLength);

    // CREATE TEXT STRING FROM RANDOM WORDS UP TO sequenceLength IN LENGTH
    // CREATE STRING OF WORDS WITH SPACES
    stringWords = wordArrays[lineIdx].join("");
    // console.log("STRINGWORDS:", stringWords);

    // POPULATE ACTIVE TEXT CONTAINER WITH SPANS
    createSpans(lineIdx, textSpanContainerActive);

    // INITIALISE TEXTSPANCONTAINER NEXT

    // APPEND AS STRING:
    // stringWordsNext = wordArrays[lineIdx + 1].join("");
    // textSpanContainerNextParagraph.innerText = stringWordsNext;

    createSpans(lineIdx + 1, textSpanContainerNextParagraph);

    // ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    // console.log("WORDARRAYS", wordArrays);

    // NEW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // let charSpans = document.querySelectorAll(".active-txt-span");
    // const enterSpan = charSpans[charSpans.length - 1];
    // console.log("ENTER SPAN:", enterSpan);
    // // enterSpan.innerText = "↩️";
    // // enterSpan.innerText = "↩︎";
    // enterSpan.innerText = "⏎";

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 KEY EVENTS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    const handleKeyEvent = (event) => {
        // const typedKey = event.key;
        typedKey = event.key;
        // console.log("EVENT: KEYDOWN", event.key);

        // TRACK TYPED KEY ON KEYBOARD (100MS FLASH)
        for (let i = 0; i < letterKeys.length; i += 1) {
            if (typedKey.toUpperCase() === letterKeys[i].innerText) {
                letterKeys[i].classList.add("dark-gold-background");
                setTimeout(function () {
                    letterKeys[i].classList.remove("dark-gold-background");
                }, 100);
            }
        }

        // MORE THAN 5 MISTAKES: GOODBYE MESSAGE SEQUENCE
        if (wrongCounter >= maxMistakes) {
            reloadSequence();
            // document.removeEventListener("keydown", handleKeyEvent);
            textInput.removeEventListener("keydown", handleKeyEvent);
        }

        //NOT USED
        // console.log("event.code:", event.code)

        // ONLY KEEP TRACK OF KEYSTROKES WHILE CLOCK IS RUNNING
        if (timerOn) {
            if (typedKey !== "CapsLock") {
                keyStrokeCounter += 1;
            }
            // console.log("KEYSTROKE COUNTER:", keyStrokeCounter);
            keystrokesSpan.textContent = keyStrokeCounter;
        }

        // DISABLE CONTROLS BY HIDING IT BEHIND MAIN CONTAINER WHILE TIMER IS ON WITH FIRST KEYPRESS
        // !!! THIS ONLY RUNS IF TIMER IS ON !!!
        if (keyStrokeCounter === 1) {
            for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
                fadeWithTimerElements[i].classList.add("fadeOut");
            }
        }

        // ENABLE CONTROLS WHEN TIME IS UP
        if (!timerOn) {
            // console.log("<<<<< TIMER OFF >>>>>");
            for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
                fadeWithTimerElements[i].classList.remove("fadeOut");
            }
        }

        // logKeyEventStart();

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ENTER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        // if (typedKey === "Enter") {
        //     console.log("ENTER");
        // }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SHIFT 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        // if (typedKey === "Shift") {
        //     console.log("SHIFT");
        // }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BACKSPACE 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        handleBackspace();

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CORRECT KEY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        if (typedKey === wordArrays[lineIdx][wordIdx][charIdx]) {
            // console.log(
            //     "CORRECT KEY!",
            //     "typed:",
            //     typedKey,
            //     "actual:",
            //     wordArrays[lineIdx][wordIdx][charIdx]
            // );

            if (soundOn) {
                playSound("mixkit-single-key-press-in-a-laptop-2541.wav", 1);
            }

            wrongCounter = 0;

            //  WORD[0] - WORD[LENGTH-1], ALL CHARACTERS IN WORD EXCLUDING TRAILING SPACE
            if (charIdx < wordArrays[lineIdx][wordIdx].length - 1) {
                correctKeyNotLastSpace();
            }

            // WORD[LENGTH-1], TRAILING SPACE ALL WORDS EXCEPT LAST WORD
            else if (charIdx === wordArrays[lineIdx][wordIdx].length - 1) {
                correctSpaceNotLastWord();
            }

            // REMOVE CURSOR FROM SPACE
            if (typedKey === " ") {
                // console.log("CORRECT KEY - SPACE");

                // END OF LINE SPACE

                if (strIdx === stringWords.length - 1) {
                    // console.log("ENTER SPAN, SPACE TYPED");
                    correctEndOfLineSpace();
                }

                // if (strIdx === stringWords.length - 1) {
                //     correctEndOfLineSpace();
                // }

                // ONLY ACCESS CURRENTCHAR IF IT IS NOT END OF LINE (IF STATEMENT DOESNT WORK FOR CLASSLIST REMOVE, STILL GET TYPE ERROR )
                // !!! ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at HTMLDocument.handleKeyEvent (script.js:680:33)

                if (strIdx < stringWords.length - 1) {
                    correctSpaceNotEndOfLine();
                }

                // COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY
                countSpanColours();

                wordCounter += 1;

                // COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY
                // countSpanColours();

                // DISPLAY COLOUR COUNTER VALUES
                displayColourCounterValues();

                // CALC AND DISPLAY ACCURACY  accuracy = (100 / (greenCounter + redCounter)) * greenCounter;
                accuracy = calcAccuracy();
                resetAccSpanColours();
                colourAccuracySpan();
                accuracySpan.textContent = `${Math.floor(accuracy)}`;
            }
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 WRONG KEY OR SHIFT FOR CAPITAL LETTERS 🀰🀰🀰🀰🀰🀰🀰🀰🀰
        else if (
            typedKey !== wordArrays[lineIdx][wordIdx][charIdx] &&
            typedKey !== " " &&
            typedKey !== "Shift" &&
            typedKey !== "Backspace" &&
            typedKey !== "CapsLock"
        ) {
            // console.log(
            //     "WRONG KEY!",
            //     "typed:",
            //     typedKey,
            //     "actual:",
            //     wordArrays[lineIdx][wordIdx][charIdx]
            // );

            // NEW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            if (typedKey === "Enter" && enterOn) {
                // console.log("ENTER TYPED");
                if (strIdx === stringWords.length - 1) {
                    // console.log(
                    //     "ENTER TYPED - END OF LINE",
                    //     stringWords.length - 1,
                    //     "/",
                    //     strIdx,
                    //     "LINE COMPLETED!"
                    // );

                    if (soundOn) {
                        playSound(
                            "mixkit-single-key-press-in-a-laptop-2541.wav",
                            1
                        );
                    }

                    wrongCounter = 0;

                    //  WORD[0] - WORD[LENGTH-1], ALL CHARACTERS IN WORD EXCLUDING TRAILING SPACE
                    if (charIdx < wordArrays[lineIdx][wordIdx].length - 1) {
                        correctKeyNotLastSpace();
                    }

                    // WORD[LENGTH-1], TRAILING SPACE ALL WORDS EXCEPT LAST WORD
                    else if (
                        charIdx ===
                        wordArrays[lineIdx][wordIdx].length - 1
                    ) {
                        correctSpaceNotLastWord();
                    }

                    // REMOVE CURSOR FROM SPACE
                    // if (typedKey === " ") {
                    // END OF LINE SPACE

                    if (strIdx === stringWords.length - 1) {
                        correctEndOfLineSpace();
                    }

                    // ONLY ACCESS CURRENTCHAR IF IT IS NOT END OF LINE (IF STATEMENT DOESNT WORK FOR CLASSLIST REMOVE, STILL GET TYPE ERROR )
                    // !!! ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at HTMLDocument.handleKeyEvent (script.js:680:33)

                    if (strIdx < stringWords.length - 1) {
                        correctSpaceNotEndOfLine();
                    }

                    // COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY
                    countSpanColours();

                    wordCounter += 1;

                    // COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY
                    // countSpanColours();

                    // DISPLAY COLOUR COUNTER VALUES
                    displayColourCounterValues();

                    // CALC AND DISPLAY ACCURACY  accuracy = (100 / (greenCounter + redCounter)) * greenCounter;
                    accuracy = calcAccuracy();
                    resetAccSpanColours();
                    colourAccuracySpan();
                    accuracySpan.textContent = `${Math.floor(accuracy)}`;
                    // }
                }
            }

            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            wrongCounter += 1;

            // UPDATE PROBLEM KEY SET
            if (
                wordArrays[lineIdx][wordIdx][charIdx] !== " " && // SPACE
                wordArrays[lineIdx][wordIdx][charIdx] !== undefined // CHARACTER IN NEXT WORD (WORD IDX HAS NOT BEEN INCREMENTED)
            ) {
                problemKeysSet.add(wordArrays[lineIdx][wordIdx][charIdx]);
            }

            // console.log("<<<<< PROBLEM KEYS SET >>>>>", problemKeysSet);

            // IF PROBLEMKEYS SET HAS LENGTH LOOP OVER problemKeysSet AND FIND CORRESPONDING problem-key-span FOR EACH ELEMENT
            if (problemKeysSet.size > 0) {
                // TEST DIV CURRENTLY DISABLED:
                // problemKeysSet.forEach((key) => {
                //     // console.log(key);
                //     for (let i = 0; i < problemKeySpans.length; i += 1) {
                //         if (problemKeySpans[i].innerText === key) {
                //             // !!! RED CLASS DOES NOT OVERWRITE CSS COLOUR !!!
                //             // problemKeySpans[i].classList.add("red", "red-background");
                //             problemKeySpans[i].style.color = "red";
                //         }
                //     }
                // });

                // HIGHLIGHT PROBLEM KEYS ON KEYBOARD
                highlightProblemKeys();
            }

            if (soundOn) {
                playSound("mixkit-message-pop-alert-2354.mp3", 0.25);
            }

            let currentCharacter = document.getElementById(`span-${strIdx}`);
            let nextCharacter = document.getElementById(`span-${strIdx + 1}`);

            if (nextCharacter !== null) {
                currentCharacter.classList.add("red");
            }

            // ONLY ACCESS NEXT CHAR IF IT IS NOT THE END OF LINE SPACE
            if (strIdx < stringWords.length - 1) {
                nextCharacter.classList.add("background", "black-border");
            }

            if (nextCharacter !== null) {
                currentCharacter.classList.remove("background", "black-border");
            }

            if (stringWords[strIdx] === " ") {
                // console.log("<<<<< ADD RED BORDER TO SPACE >>>>>");
                currentCharacter.classList.add("red-border");
            }

            nextChar();
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 SPACE ON WORD (WRONG CHAR AND SPACE) 🀰🀰🀰🀰🀰🀰🀰🀰🀰
        else if (
            typedKey !== wordArrays[lineIdx][wordIdx][charIdx] &&
            typedKey === " "
        ) {
            // console.log("<<<<< SPACE ON WORD, SKIP TO NEXT WORD >>>>>");
            // console.log("current word:", wordArrays[lineIdx][wordIdx]);

            if (soundOn) {
                playSound("mixkit-message-pop-alert-2354.mp3", 0.25);
            }

            redCounter += wordArrays[lineIdx][wordIdx].length; // INCREMENT RED COUNTER WITH WORD'S LENGTH

            accuracy = calcAccuracy(); // CALC ACCURACY AGAIN
            colourAccuracySpan(); // AND UPDATE COUNTER
            accuracySpan.textContent = `${Math.floor(accuracy)}%`;

            // JUMP IDX TO THE NEXT WORD IN STRING
            if (charIdx < wordArrays[lineIdx][wordIdx].length) {
                // console.log("STRING IDX TO JUMP TO NEXT WORD IN STRING!");

                // SKIP TO NEXT WORD IN STRING (FIND NEXT SPACE IN STRING AND SET INDEX TO NEXT WORD AFTER SPACE)
                strIdx = findNextWordIndex(); // UPDATE STRIDX WITH RETURN VALUE OF findNextWordIndex
                clearTextInput();
            }

            // ======= SPACE ON LAST WORD (WRONG CHAR AND SPACE) ==========
            if (wordIdx === wordArrays[lineIdx].length - 1) {
                spaceOnLastWord();
            }

            // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND FROM CURRENT
            // ON ALL CHARACTERS BUT LAST
            if (strIdx < stringWords.length) {
                spaceOnWord();
            }
        }

        // logKeyEventEnd();

        // MORE THAN 5 MISTAKES: GOODBYE MESSAGE SEQUENCE
        if (wrongCounter >= maxMistakes) {
            reloadSequence();
            // document.removeEventListener("keydown", handleKeyEvent);
            textInput.removeEventListener("keydown", handleKeyEvent);
        }
    };

    // ADD HANDLEKEYEVENT FOR KEYUP EVENT ONLY ONCE, REMOVE IT IF START IS CLICKED AGAIN, SEE IF BLOCK BELOW
    // document.addEventListener("keydown", handleKeyEvent);
    textInput.addEventListener("keydown", handleKeyEvent);

    // CHANGE START BUTTON'S INNER HTML TO: "NEW"
    if (startButtonCounter > 0) {
        startButton.innerText = "🔄 New";
    }

    // IF START BUTTON CLICKED AGAIN, RESET EVERYTHING AND GENERATE NEW DATA
    if (startButtonCounter > 1) {
        // REMOVE LISTENER
        // document.removeEventListener("keydown", handleKeyEvent);
        textInput.removeEventListener("keydown", handleKeyEvent);
        // console.log("EVENT LISTENER REMOVED FROM DOCUMENT FOR KEYUP");

        // RESET
        clearTextFields();
        clearTextInput();
        clearIdxTrackers();
        clearArrAndString();
        // INITIALISE
        buildWordArrays(wordsArrLength);
        createSpans(lineIdx, textSpanContainerActive);

        stringWords = wordArrays[lineIdx].join("");

        // stringWordsNext = wordArrays[lineIdx + 1].join("");
        // textSpanContainerNextParagraph.innerText = stringWordsNext;
        createSpans(lineIdx + 1, textSpanContainerNextParagraph);
        textInput.placeholder = "Start typing or customise text";
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CONTROL PANEL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const enableStartButton = () => {
    startButton.classList.add("control-apply-active");
    startButton.disabled = false;
    startButton.innerText = "Start";
};

const disableStartButton = () => {
    startButton.classList.remove("control-apply-active");
    startButton.disabled = true;
};

const applyButtons = document.getElementsByClassName("apply-button");

const allChangesApplied = () => {
    let allApplied = true;
    for (let i = 0; i < applyButtons.length; i += 1) {
        if (applyButtons[i].classList.contains("control-apply-active")) {
            allApplied = false;
            break;
        }
    }
    return allApplied;
};

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DIFFICULTY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// MAKE APPLY BUTTON ACTIVE IF SELECTION IS MADE
for (let i = 0, length = difficultyRadios.length; i < length; i++) {
    difficultyRadios[i].addEventListener("click", function () {
        difficultyApply.classList.add("control-apply-active");
        difficultyApply.disabled = false;
        startButton.classList.remove("control-apply-active");
        if (allChangesApplied()) {
            enableStartButton();
        }
    });
}

difficultyApply.addEventListener("click", function () {
    difficultyApply.classList.remove("control-apply-active");
    difficultyApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
    }
    clearDataAndDisplay();
    clearArrAndString();

    for (let i = 0, length = difficultyRadios.length; i < length; i++) {
        if (difficultyRadios[i].checked) {
            if (difficultyRadios[i].value === "100") {
                targetArray = [...common100];
            }
            if (difficultyRadios[i].value === "200") {
                targetArray = [...common200, ...common100];
            }
            if (difficultyRadios[i].value === "JavaScript") {
                targetArray = [...jsReserved, ...jsObjPropMeth];
            }
            break;
        }
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LINE LENGTH 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DEFAULT LINE LENGTH (30), ALSO HARD CODED IN HTML

// DISPLAY CURRENT VALUE OF SLIDER
slider.onchange = function (event) {
    lengthDisplaySpan.textContent = slider.value;
    lengthApply.classList.add("control-apply-active");
    lengthApply.disabled = false;
    disableStartButton();
};

// GET SLIDER FINAL VALUE AND ASSIGN TO SEQUENCE LENGTH
lengthApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    sequenceLength = slider.value;
    lengthApply.classList.remove("control-apply-active");
    lengthApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PUNCTUATION 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// 1. ONLY TOGGLE STYLE
const handlePunctuationToggle = () => {
    toggleButtonStyle(punctuationToggle);
    punctuationApply.classList.add("control-apply-active");
    punctuationApply.disabled = false;
    disableStartButton();
};

punctuationToggle.addEventListener("click", handlePunctuationToggle);

// 2. APPLY CHANGES WHEN CLICKED
punctuationApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(punctuationToggle);
    punctuationApply.classList.remove("control-apply-active");
    punctuationApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
    }
    punctuationToggle.disabled = false;
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CAPITAL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleCapitalToggle = () => {
    toggleButtonStyle(capitalToggle);
    capitalApply.classList.add("control-apply-active");
    capitalApply.disabled = false;
    disableStartButton();
};

capitalToggle.addEventListener("click", handleCapitalToggle);

capitalApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(capitalToggle);
    capitalApply.classList.remove("control-apply-active");
    capitalApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
    }
    capitalToggle.disabled = false;
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ENTER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleEnterToggle = () => {
    toggleButtonStyle(enterToggle);
    enterApply.classList.add("control-apply-active");
    enterApply.disabled = false;
    disableStartButton();
};

enterToggle.addEventListener("click", handleEnterToggle);

enterApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(enterToggle);
    enterApply.classList.remove("control-apply-active");
    enterApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
    }
    enterToggle.disabled = false;
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TIMER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ONE TIME LISTENER FOR TIMER SETTIMEOUT
const countdown = () => {
    let seconds = 60;
    // seconds = 10;
    const tick = () => {
        const counter = document.getElementById("counter-div");
        seconds -= 1;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        // counter.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
            timerOn = true;
            // console.log("TIMER ON:", timerOn);
        }

        let finalSpeed = 0;

        // CALCULATE CURRENT AVE SPEED EVERY SECOND
        if (Number.isInteger(seconds / 1)) {
            let currentSpeed = (60 / (60 - seconds)) * wordCounter;
            // speedSpan.innerText = currentSpeed.toFixed(1);
            speedSpan.innerText = Math.floor(currentSpeed); // ROUND DOWN SPEED TO NEAREST INTEGER
            finalSpeed = currentSpeed;
        }

        // FADE IN CONTROLS AT 2 SECOND MARK
        if (seconds === 2) {
            for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
                fadeWithTimerElements[i].classList.add("fadeIn");
                fadeWithTimerElements[i].classList.remove("fadeOut");
            }
        }

        if (seconds === 0) {
            // console.log("times up");
            // document.removeEventListener("keydown", handleKeyEvent);

            // ???????????????????

            // timerOn = false;

            // ???????????????????

            textInput.value = "                 Try Again ➡"; // SET INPUT VALUE
            // textInput.readOnly = true; // DISABLE TXT INPUT
            textInput.disabled = true; // DISABLE TXT INPUT
            speedSpan.innerText = finalSpeed;
            startButton.disabled = false;
            startButton.classList.add("control-apply-active");
            startButton.innerText = "Start";
            // CLEAR TEXT AFTER 2 SECONDS, SYNC CLEARTEXFIELDS WITH ANIMATION DURATION (FADE OUT AND THEN CLEAR)
            setTimeout(clearTextFields, 2000);
            // textSpanContainerActive.classList.add("fadeOut");
            textSpanContainerNextParagraph.classList.add("totalFadeOut");
            const activeTextSpans =
                document.getElementsByClassName("active-txt-span");
            for (let i = 0; i < activeTextSpans.length; i += 1) {
                activeTextSpans[i].classList.add("totalFadeOut");
            }
            textInput.removeEventListener("keydown", startCountdown);
            const totalKeystrokes = keyStrokeCounter;
            keystrokesSpan.textContent = totalKeystrokes;
            // ENABLE CONTROL INPUTS/TOGGLES
            for (let i = 0; i < disabledDuringTimer.length; i += 1) {
                disabledDuringTimer[i].disabled = false;
            }

            // timerOn = false;
            // console.log("TIMER ON:", timerOn);
            // document.removeEventListener("keydown", handleKeyEvent);
        }
    };

    tick();
};

const handleTimerToggle = () => {
    toggleButtonStyle(timerToggle);
    timerApply.classList.add("control-apply-active");
    timerApply.disabled = false;
    disableStartButton();
};

timerToggle.addEventListener("click", handleTimerToggle);

timerApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(timerToggle);
    timerApply.classList.remove("control-apply-active");
    timerApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
    }
    timerToggle.disabled = false;
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SOUND 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleSoundToggle = () => {
    toggleButtonStyle(soundToggle);
    soundApply.classList.add("control-apply-active");
    soundApply.disabled = false;
    disableStartButton();
};

soundToggle.addEventListener("click", handleSoundToggle);

soundApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(soundToggle);
    soundApply.classList.remove("control-apply-active");
    soundApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
    }
    soundToggle.disabled = false;
});

// ONE OFF FUNCTION RUNS ON FIRST KEYPRESS
const startCountdown = () => {
    // alert('Thanks for clicking!');
    // console.log("REMOVE LISTENER NOW!");
    countdown();
    textInput.removeEventListener("keydown", startCountdown);
    // console.log("EVENT LISTENER REMOVED FROM TEXT INPUT FOR TIMER");
    startButton.disabled = true;

    // DISABLE CONTROL INPUTS/TOGGLES
    for (let i = 0; i < disabledDuringTimer.length; i += 1) {
        disabledDuringTimer[i].disabled = true;
    }
};

// FLIP APP/INFO
//SOURCE: https://codepen.io/desandro/pen/LmWoWe

for (let i = 0; i < flipButtons.length; i += 1) {
    flipButtons[i].addEventListener("click", function () {
        // console.log("CARD FLIPPED");
        card.classList.toggle("flipped");
        instructionsContainer.scrollTop = 0;
        // NOT WORKING:
        // instructionsContainer.scrollIntoView();
    });
}

const controlFlipButtons = document.getElementsByClassName(
    "flip-button--controls"
);
const controlsCard = document.getElementById("card--controls");
for (let i = 0; i < controlFlipButtons.length; i += 1) {
    controlFlipButtons[i].addEventListener("click", function () {
        controlsCard.classList.toggle("flipped");
        // console.log("CONTROL FLIP BUTTON CLICKED");
    });
}

// CLICK ANYWHERE TO CLOSE INSTRUCTIONS
instructionsContainer.addEventListener("click", function () {
    // console.log("CONTAINER CLICKED");
    card.classList.toggle("flipped");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 COLOUR THEME 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleThemeToggle = () => {
    toggleButtonStyle(themeToggle);
    toggleButtonState(themeToggle);
    for (let i = 0; i < colourThemeElements.length; i += 1) {
        if (darkThemeOn) {
            colourThemeElements[i].classList.add("dark-theme");
        } else {
            colourThemeElements[i].classList.remove("dark-theme");
        }
    }
};

themeToggle.addEventListener("click", handleThemeToggle);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BEGINNER CONTROLS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ARRAY FOR THE CURRENTLY SELECTED KEYS
let selectedBeginerKeys = [];

// ARRAY FOR RANDOMLY GENERATED WORDS
let randomKeyWordsArray = [];

// ADD EVT LISTENER TO ALL LEVEL BUTTONS
for (let i = 0; i < levelButtons.length; i += 1) {
    levelButtons[i].addEventListener("click", function () {
        // console.log("CLICKED", levelButtons[i]);

        // console.log(this);
        // console.log(this.innerText);
        // console.log(this.id);

        disableStartButton();
        clearDataAndDisplay();

        toggleLevelButtonStyle(this);
        // console.log(levelButtons);

        // 1. CHECK IF AT LEAST ONE LEVEL IS SELECTED
        let selectionMade = false; // RESET TO FALSE BEFORE LOOP
        for (let i = 0; i < levelButtons.length; i += 1) {
            if (levelButtons[i].classList.contains("control-apply-active")) {
                // console.log("FOUND", levelButtons[i]);
                selectionMade = true;
                break;
            }
        }

        // console.log("SELECTION MADE:", selectionMade);

        // 2. ONLY ACTIVATE APPLY IF AT LEAST ONE LEVEL IS SELECTED
        if (selectionMade) {
            levelsApply.classList.add("control-apply-active");
            levelsApply.disabled = false;
        } else {
            levelsApply.classList.remove("control-apply-active");
            levelsApply.disabled = true;
        }

        // RESET SELECTED BEGINNER KEYS ARRAY, IT WILL BE UPDATED WITH APPLY BUTTON
        selectedBeginerKeys = [];
    });
}

// TOGGLE LEVEL BUTTON STYLE, CLASSES ARE NOW USED TO STYLE
const toggleLevelButtonStyle = (element) => {
    if (element.classList.contains("toggle-on")) {
        element.classList.remove("toggle-on");
        element.classList.add("toggle-off");
        element.classList.remove("control-apply-active");
    } else {
        element.classList.remove("toggle-off");
        element.classList.add("toggle-on");
        element.classList.add("control-apply-active");
    }
};

// TOGGLE BOOLEAN BUTTON STATE BASED ON CLASS
// !!! LOOP OVER ALL LEVEL BUTTONS AND PLUG EACH BUTTON INTO THIS FUNCTION WHEN APPLY IS CLICKED BELOW (1504)!!!
const toggleLevelButtonState = (element) => {
    // console.log(element);
    if (element.classList.contains("toggle-on")) {
        if (element === level_1) {
            level_1_On = true;
        }
        if (element === level_2) {
            level_2_On = true;
        }
        if (element === level_3) {
            level_3_On = true;
        }
        if (element === level_4) {
            level_4_On = true;
        }
        if (element === level_5) {
            level_5_On = true;
        }
        if (element === level_6) {
            level_6_On = true;
        }
        if (element === level_7) {
            level_7_On = true;
        }
        if (element === level_8) {
            level_8_On = true;
        }
        if (element === level_9) {
            level_9_On = true;
        }
    } else {
        if (element === level_1) {
            level_1_On = false;
        }
        if (element === level_2) {
            level_2_On = false;
        }
        if (element === level_3) {
            level_3_On = false;
        }
        if (element === level_4) {
            level_4_On = false;
        }
        if (element === level_5) {
            level_5_On = false;
        }
        if (element === level_6) {
            level_6_On = false;
        }
        if (element === level_7) {
            level_7_On = false;
        }
        if (element === level_8) {
            level_8_On = false;
        }
        if (element === level_9) {
            level_9_On = false;
        }
    }
};

// 2. APPLY CHANGES TO ALL LEVELS WHEN APPLY CLICKED
levelsApply.addEventListener("click", function () {
    randomKeyWordsArray = []; // RESET TO AVOID DUPLICATES IF APPLY IS CLICKED AGAIN
    selectedBeginerKeys = []; // RESET TO AVOID DUPLICATES
    enableStartButton();
    levelsApply.disabled = true;

    levelsApply.classList.remove("control-apply-active");
    // THIS WILL UPDATE LEVEL STATES ARRAY
    for (let i = 0; i < levelButtons.length; i += 1) {
        toggleLevelButtonState(levelButtons[i]);
    }

    // LEVEL BUTTON STATES ARRAY IS USED TO LOOP THROUGH ALL BOOLEANS
    let levelStateArray = [
        level_1_On,
        level_2_On,
        level_3_On,
        level_4_On,
        level_5_On,
        level_6_On,
        level_7_On,
        level_8_On,
        level_9_On,
    ];

    // console.log(levelStateArray);

    // UPDATE TARGET ARRAY WITH RANDOM WORDS(RANDOM LENGTH 1-6) MADE FROM SELECTED LEVELS

    // LOOP THROUGH levelStateArray AND IF CURRENT VALUE IS TRUE, CONCAT CORRESPONDING LEVEL KEY ARRAY TO selectedBeginerKeys

    // 1. FIND ALL SELECTED KEYS IN GROUPS
    for (let i = 0; i < levelStateArray.length; i += 1) {
        if (levelStateArray[i]) {
            selectedBeginerKeys = selectedBeginerKeys.concat(keyLevelsArray[i]);
        }
    }

    // 2. GENERATE WORDS USING ONLY THOSE SELECTED KEYS
    const generateWords = (numOfWords) => {
        for (let i = 0; i < numOfWords; i += 1) {
            let randomWord = "";
            let length = getRandomIdxLessThanNum(6);
            while (randomWord.length <= length) {
                randomWord += getRandomFromArr(selectedBeginerKeys);
            }
            randomKeyWordsArray.push(randomWord);
        }
    };

    generateWords(500);
    // console.log("RANDOM KEY WORDS ARRAY:", randomKeyWordsArray);

    // 3. UPDATE TARGET ARRAY WITH randomKeyWordsArray
    targetArray = [...randomKeyWordsArray];
});

// SHOW BEGINNER LEVELS
beginnerShowButton.addEventListener("click", function () {
    beginnerOn = true;

    timerOn = false;
    // console.log("BEGINNER LEVEL", beginnerOn);
    // console.log("TIMERON:", timerOn);

    // if (beginnerOn) {
    //     messageDiv.textContent = "BEGINNER LEVEL";
    //     messageDiv.style.background = "rgba(0, 0, 255, 0.507)";
    // }

    targetArray = [];
    /*
        CHECK IF ANY LEVEL IS SELECTED, IF SO,
            A. ACTIVATE APPLY TO RE - SUBMIT SETTINGS ??? OR
            B. ACTIVATE START BUTTON ???
    */
    let preSelectedLevels = false;
    for (let i = 0; i < levelButtons.length; i += 1) {
        if (levelButtons[i].classList.contains("control-apply-active")) {
            preSelectedLevels = true;
            break;
        }
    }
    if (preSelectedLevels) {
        // console.log("PRE SELECTED LEVELS");
        levelsApply.disabled = false;
        levelsApply.classList.add("control-apply-active");
    }

    startButton.disabled = true;
    startButton.classList.remove("control-apply-active");
    textInput.disabled = true;
    clearDataAndDisplay();
    clearArrAndString();
});

// HIDE BEGINNER LEVELS
beginnerHideButton.addEventListener("click", function () {
    beginnerOn = false;

    if (timerToggle.innerText === "On") {
        timerOn = true;
    }

    // console.log("BEGINNER LEVEL", beginnerOn);
    // console.log("TIMERON:", timerOn);

    // if (!beginnerOn) {
    //     messageDiv.textContent = "PRACTICE LEVEL";
    //     messageDiv.style.background = "rgba(255, 0, 0, 0.521)";
    // }

    problemKeysSet.clear();
    targetArray = [];
    // !!! THIS WILL OVERWRITE SETTINGS !!!
    // ONLY SET TO TRUE IF BUTTON STATE IS TRUE
    // !!! DO THE SAME WITH ALL TOGGLE BUTTONS !!!
    // if (timerToggle.classList.contains("control-apply-active")) {

    // timerOn = true;
    startButton.disabled = false;
    startButton.classList.add("control-apply-active");
    textInput.disabled = true;
    clearDataAndDisplay();
    clearArrAndString();
    // !!! TEMP FIX, HAS TO RETURN TO THE LAST DIFFICULTY SELECTED !!!
    targetArray = [...common100];
});

// INSTRUCTIONS CONTAINER HOVER : CURSOR TOOLTIP
// SOURCE: https://codepen.io/paulvddool/pen/mROEGa
const cursorTooltip = document.getElementById("instructions-cursor-tooltip");

const trackCursor = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorTooltip.style.left = x - 100 + "px";
    cursorTooltip.style.top = y - 50 + "px";
};

instructionsContainer.addEventListener("mouseover", trackCursor);

/*

CURRENT:

    BRANCH control-panel--light-1

        KEEP BACKGROUND ON APPLY BUTTONS ?


        MAKE HIDE INFO BUTTON STICKY ?


    STYLE BEGINNER LEVEL
        LIGHT
        DARK

    BRANCH dark-theme-1:

        GREYSCALE FILTER IS TOO MUCH ON START BUTTON
            MAKE CLASS FOR ELEMENTS THAT NEED FILTERING

        ADD COLOUR-THEME CLASS TO EVERY ELEMENT AFFECTED ???

        ACCURACY SPAN COLOUR CODES NOT WORKING WITH NEW SPAN COLOUR (CSS: .accuracy-span.dark-theme)

    
    FEATURES:
        ADD TOOLTIP TO CURSOR ON INSTRUCTIONS CARD ("CLICK ANYWHERE TO CLOSE")

        DISPLAY MESSAGES IN MESSAGE DIV
            ☑️ CHANGE MESSAGE DIV COLOR TO GREY OR ORANGE?
            CAPSLOCK WARNING


        ADD NUMERIC CHARACTERS

        GREEN WORDS COUNTER

        COMPLETE WORDS COUNTER

        ADD ENTER KEY
            BEGINNER 
            ☑️ ADVANCED 

        TRACK KEYS TYPED IN REAL TIME ON KEYBOARD?
            ☑️ LETTER KEYS
            ENTER
            NUMBERS
       
        ☑️ WRITE AND FORMAT INFO CARD
            ADD MORE CONTENT
        
        MAKE ONE COMMON APPLY BUTTON FOR ALL CONTROLS?
        
        RESET TIMER IF START BUTTON IS CLICKED?
        
        DISPLAY MESSAGE AS TEXT ELEMENT, NOT PLACEHOLDER OR CONTENT
            
        ADD MOST COMMON SENTENCES TO DIFFICULTY
        PROBLEM KEYS
        DYNAMICALLY GENERATE NEXT LINE + 1 ?
        SHOW ALL TEXT AS ONE BLOCK ?
       
            
    PROBLEMS:


        INCLUDE ENTER KEY IN REAL TIME HIGHLIGHT

        REFACTOR
            FUNCTIONS
            IF / ELSE BLOCKS
            CSS CLASSES
                COMMON CLASS FOR
                    TOGGLE BUTTONS (control-toggle-button) DOES NOT INCLUDE INFO, BEGINNER
                    APPLY BUTTONS

    
        END OF LINE ERROR: Uncaught TypeError: Cannot read properties of undefined (reading 'classList')
                at countSpanColours (script.js:721:26)
                at HTMLInputElement.handleKeyEvent (script.js:1092:17)
        END OF LINE ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at correctSpaceNotEndOfLine (script.js:693:22)at HTMLInputElement.handleKeyEvent (script.js:1081:21)
          
        ☑️ RESET TARGET ARRAY AFTER CLEARING PROBLEMKEYSET BECAUSE IT WILL BE IN A FILTERED STATE (findAndApplyProblemKeyWords)
        LOOK INTO PROBLEMKEYWORDS AGAIN (AFTER COMPLETING PROBLEMKEYWORDS WITH NO ERROR, TARGET ARRAY SHOULD UPDATE TO DEFAULT)
        !!! THIS IS A TEMPORARY FIX, HAS TO USE CURRENTLY SELECTED DIFFICULTY ARRAY !!!
        WHEN START BUTTON CLICKED CHECK WHAT THE CURRENT SELECTON IS ON THE RADIOS, USE MATCHING ARRAY FOR TARGET
        DO NOT ACTIVATE START BUTTON UNTIL ALL THE APPLY BUTTONS HAVE BEEN CLICKED
        (WHEN ONE CLICKED, CHECK IF ANY OTHERS HAVE ACTIVE CLASS, IF YES, DO NOT ACTIVATE START BUTTON)
        REMOVE FADE CLASS FROM RED PANEL WHEN BLUE PANEL IS HIDDEN (THIS IS A BUG, TRY TO FIX TIMER ISSUE)
        HANDLE CONTROL PANEL SETTINGS WHEN SWITCHING PANELS (RESET ALL SETTINGS PROBABLY THE BEST)
            DIFFICULTY
            PUNCTUATION 
            CAPITAL LETTERS
            LINE LENGTH 
            TIMER
            SOUND
        LINE LENGTH SLIDER SHOULD NOT HIGHLIGHT ON HOVER WHILE TIMER IS ON
        WHEN BEGINNER PANEL COMES ON, CHECK IF ANY LEVELS PRE-SELECTED FROM PREVIOUS SESSION (LINE 1614)
            ☑️ HIGHLIGHT APPLY BUTTON TO RE-SUBMIT ???
            OR RESET ALL SETTINGS ???
       
        DON'T HIGHLIGT RADIO LABELS AND TOGGLE BUTTONS WHILE TIMER IS ON (WHEN DISABLED)
            ☑️ TOGGLE BUTTONS (:disabled:hover {ORIGINAL FONTWEIGHT})
            ☑️ RADIO LABELS
            SLIDER
      
        CAPSLOCK MUST NOT ACTIVATE TIMER ?
        CONTROL APPLY BUTTONS DELETES "CLICK START" MESSAGE FROM TXT INPUT
        
        ADD EVENTLISTENER TO CONTROL OPTIONS WHEN PAGE LOADS? BEFORE START BUTTON IS CLICKED?
        REMOVE EVENTLISTENER WHEN APPLY CHANGES AS START BUTTON WILL ADD IT AGAIN !!!
        
        STOP MOVING CURSOR WHEN LETTER CHARACTER IS TYPED INSTEAD OF SPACE AFTER WORD IS TYPED ?
        NOTES:
            !!! WHEN TIMER HAS ENDED FIRST START BUTTON PRESS WILL GENERATE POBLEM KEY WORDS ONLY, SECOND CLICK WILL USE COMMON100 !!!
       
    
        DO NOT DISABLE START BUTTON / RESET DATA WITH SOUND ON/OFF

*/
