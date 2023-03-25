// IMPORT WORDS ARRAYS
// import common100 from './words.js';
import {
    common100,
    common200,
    jsReserved,
    bigrams,
    trigrams,
    quadrigrams,
    jsObjPropMeth,
    punctMarks,
    topRow,
    bottomRow,
    homeRow,
    // keysLevel_1,
    // keysLevel_2,
    // keysLevel_3,
    // keysLevel_4,
    // keysLevel_5,
    // keysLevel_6,
    // keysLevel_7,
    // keysLevel_8,
    // keysLevel_9,
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
const punctuationToggleBeginner = document.getElementById(
    "punctuation-toggle__beginner"
);
const punctuationApplyBegineer = document.getElementById(
    "punctuation-apply__beginner"
);
// CAPITAL
const capitalToggle = document.getElementById("capital-toggle");
const capitalApply = document.getElementById("capital-apply");
const capitalToggleBeginner = document.getElementById(
    "capital-toggle__beginner"
);
const capitalApplyBeginner = document.getElementById("capital-apply__beginner");
// ENTER
const enterToggle = document.getElementById("enter-toggle");
const enterApply = document.getElementById("enter-apply");
const enterToggleBeginner = document.getElementById("enter-toggle__beginner");
const enterApplyBeginner = document.getElementById("enter-apply__beginner");
// SOUND
const soundToggle = document.getElementById("sound-toggle");
const soundApply = document.getElementById("sound-apply");
// COLOUR THEME
const colourThemeElements = document.getElementsByClassName("colour-theme");
const themeToggle = document.getElementById("theme-toggle");
const themeApply = document.getElementById("theme-apply");

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
const levelButtons = document.getElementsByClassName("btn--level");
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
const startButton = document.getElementById("btn--start");
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

// .key--letter IS NOW BEING REPLACED BY .key--tracked, THIS CLASS WILL BE ADDED TO NUMERIC KEYS
// const letterKeys = document.getElementsByClassName("key--letter");
const letterKeys = document.getElementsByClassName("key--tracked");

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
// let targetArray = [...jsReserved];
// let targetArray = [];
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
let timerRunning = false;
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
    // if (!beginnerOn) {
    if (element.classList.contains("toggle-on")) {
        //     if (element === punctuationToggle) {
        //         punctuationOn = true;
        //     }
        //     if (element === punctuationToggleBeginner) {
        //         punctuationOn = true;
        //     }
        //     if (element === capitalToggle) {
        //         capitalOn = true;
        //     }
        //     if (element === capitalToggleBeginner) {
        //         capitalOn = true;
        //     }
        //     if (element === soundToggle) {
        //         soundOn = true;
        //     }
        //     // if (element === timerToggle && !beginnerOn) {
        //     if (element === timerToggle) {
        //         timerOn = true;
        //     }
        //     if (element === enterToggle) {
        //         enterOn = true;
        //     }
        //     if (element === enterToggleBeginner) {
        //         enterOn = true;
        //     }
        //     if (element === themeToggle) {
        //         darkThemeOn = true;
        //     }
        // } else {
        //     if (element === punctuationToggle) {
        //         punctuationOn = false;
        //     }
        //     if (element === punctuationToggleBeginner) {
        //         punctuationOn = false;
        //     }
        //     if (element === capitalToggle) {
        //         capitalOn = false;
        //     }
        //     if (element === capitalToggleBeginner) {
        //         capitalOn = false;
        //     }
        //     if (element === soundToggle) {
        //         soundOn = false;
        //     }
        //     if (element === timerToggle) {
        //         timerOn = false;
        //     }
        //     if (element === enterToggle) {
        //         enterOn = false;
        //     }
        //     if (element === enterToggleBeginner) {
        //         enterOn = false;
        //     }
        //     if (element === themeToggle) {
        //         darkThemeOn = false;
        //     }
        // }

        // !!! BUG: SWITCH() WILL ENABLE ENTERON IF OTHER TOGGLES ARE SWITCHED ON !!!

        switch (element) {
            case punctuationToggle:
                punctuationOn = true;
                break;
            case punctuationToggleBeginner:
                punctuationOn = true;
                break;
            case capitalToggle:
                capitalOn = true;
                break;
            case capitalToggleBeginner:
                capitalOn = true;
                break;
            case soundToggle:
                soundOn = true;
                break;
            case timerToggle:
                timerOn = true;
                break;
            case enterToggle:
                enterOn = true;
                break;
            case enterToggleBeginner:
                enterOn = true;
                break;
            case themeToggle:
                darkThemeOn = true;
        }
    } else {
        switch (element) {
            case punctuationToggle:
                punctuationOn = false;
                break;
            case punctuationToggleBeginner:
                punctuationOn = false;
                break;
            case capitalToggle:
                capitalOn = false;
                break;
            case capitalToggleBeginner:
                capitalOn = false;
                break;
            case soundToggle:
                soundOn = false;
                break;
            case timerToggle:
                timerOn = false;
                break;
            case enterToggle:
                enterOn = false;
                break;
            case enterToggleBeginner:
                enterOn = false;
                break;
            case themeToggle:
                darkThemeOn = false;
        }
    }
    // }
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
    // console.log("BUILD TARGET ARRAY", targetArray);
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

            arr.push(currWord);
        }

        // REPLACE TRAILING SPACE WITH ENTER SIGN ON LAST WORD OF ARRAY
        if (enterOn) {
            arr[arr.length - 1] =
                arr[arr.length - 1].substring(
                    0,
                    arr[arr.length - 1].length - 1
                ) + "⏎";
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
    } else if (accuracy > 87 && accuracy <= 89) {
        accuracySpan.classList.add("orange-red");
    } else if (accuracy > 89 && accuracy <= 91) {
        accuracySpan.classList.add("orange");
    } else if (accuracy > 91 && accuracy <= 93) {
        accuracySpan.classList.add("gold");
    } else if (accuracy > 93 && accuracy <= 95) {
        accuracySpan.classList.add("yellow");
    } else if (accuracy > 95 && accuracy <= 97) {
        accuracySpan.classList.add("yellow-green");
    } else if (accuracy > 97 && accuracy < 100) {
        accuracySpan.classList.add("light-green");
    } else {
        accuracySpan.classList.add("green"); // 100%
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

// SET DIFFICULTY LEVEL BASED ON RADIOS STATE
const setDifficultyLevel = () => {
    for (let i = 0, length = difficultyRadios.length; i < length; i++) {
        if (difficultyRadios[i].checked) {
            if (difficultyRadios[i].value === "100") {
                targetArray = [...common100];
            } else if (difficultyRadios[i].value === "200") {
                targetArray = [...common200, ...common100];
            } else {
                targetArray = [...jsReserved, ...jsObjPropMeth];
            }
            break;
        }
    }
};

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON FUNCTIONS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// FIND PROBLEM KEY WORDS IN CURRENT TARGET ARRAY / UPDATE TARGET ARRAY WITH PROBLEM WORDS ONLY
const findAndApplyProblemKeyWords = () => {
    if (problemKeysSet.size > 0) {
        problemKeysSet.forEach((key) => {
            common100.forEach((word) => {
                if (word.indexOf(key) > -1) {
                    tempProbWordsArr.push(word);
                }
            });
        });
        targetArray = [...tempProbWordsArr]; // UPDATE TARGET ARRAY WITH FILTERED WORDS ARRAY
    } else {
        // FIND WHICH LEVEL IS SELECTED AND UPDATE TARGET ARRAY ACCORDINGLY
        if (!beginnerOn) {
            setDifficultyLevel();
        }
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

        // console.log(idx, char);
        .join("")
        .split("")
        .entries()) {
        const span = document.createElement("span"); // CREATE ELEMENT
        // SET TEXT CONTENT / CLASS / ID
        span.innerText = char;
        span.className = "active-txt-span";
        // ADD ACTIVE CLASS TO ENTER TO FOR STYLING PURPOSES
        if (char === "⏎") {
            span.className = "active-txt-span active-txt-span--enter";
        }

        // ASSINGN DIFFERENT ID BASED ON LOCATION
        span.id =
            location === textSpanContainerActive
                ? `span-${idx}`
                : `span--next-${idx}`;

        location.appendChild(span); // APPEND TO PARENT DIV
    }
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
    // APPEND TEXT AS SPANS !!!
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

    nextWord();
    clearTextInput();
};

// COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY

const countSpanColours = () => {
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
        // !!! WITHOUT THIS CONDITION CURSOR WILL NOT MOVE FORWARD INTO NEXT WORD, IT WILL STAY ON SPACE !!!
        if (key !== undefined) {
            for (let i = 0; i < letterKeys.length; i += 1) {
                if (letterKeys[i].innerText === key.toUpperCase()) {
                    letterKeys[i].classList.add("red-background");
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

startButton.classList.add("apply--active"); // HIGHLIGHT START BUTTON
textInput.disabled = true;

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ADD LISTENER
startButton.addEventListener("click", (event) => {
    // RESET WRONG COUNTER
    wrongCounter = 0;

    // console.log("<<<<< PROBLEM KEYS SET >>>>>", problemKeysSet);
    // console.log("<<<<< TEMP PROB WORDS >>>>>", tempProbWordsArr);
    // console.log("START TARGET ARRAY:", targetArray);

    startButtonCounter += 1; // TRACK NUMBER OF START BUTTON CLICKS

    // console.log("START BUTTON", startButtonCounter);

    if (beginnerOn) {
        timerOn = false;
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
    // if (timerToggle.classList.contains("apply--active") && !beginnerOn) {
    if (timerOn && !beginnerOn) {
        textInput.addEventListener("keydown", startCountdown);
        // console.log("EVENT LISTENER ADDED TEXT INPUT FOR TIMER");
    }

    // REMOVE HIGHLIGHT START BUTTON
    startButton.classList.remove("apply--active");
    // CHANGE PLACEHOLDER TO "START TYPING"
    textInput.placeholder = "Start typing or customise text";
    clearIdxTrackers();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TEXT FIELDS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    textSpanContainerActive.classList.remove("totalFadeOut"); // SHOW NEXT LINE
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

    // APPEND AS SPANS:
    createSpans(lineIdx + 1, textSpanContainerNextParagraph);

    // ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 KEY EVENTS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    const handleKeyEvent = (event) => {
        // const typedKey = event.key;
        typedKey = event.key;
        // console.log("EVENT: KEYDOWN", event.key);

        // TRACK TYPED KEY ON KEYBOARD (100MS FLASH)
        for (let i = 0; i < letterKeys.length; i += 1) {
            // console.log(typedKey);

            // ENTER KEY IS HANDLED SEPARATELY AS ITS TEXT CONTENT IS "RETURN" VS "ENTER" !
            const enterKey = document.getElementById("key--enter");

            if (typedKey.toUpperCase() === letterKeys[i].innerText) {
                // CLASS COLOUR: rgba(0, 128, 0, 0.304)
                letterKeys[i].classList.add("green-background__keyboard");

                setTimeout(function () {
                    letterKeys[i].classList.remove(
                        "green-background__keyboard"
                    );
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

        // ONLY KEEP TRACK OF KEYSTROKES WHILE CLOCK IS RUNNING (NOW DISABLED, KEYSTROKES ARE ALWAYS COUNTED)
        // if (timerOn) {
        // +++++++++++++++++++++++++++++++++++++++++++++

        // if (timerRunning) {
        if (typedKey !== "CapsLock") {
            keyStrokeCounter += 1;
        }
        // +++++++++++++++++++++++++++++++++++++++++++++

        // console.log("KEYSTROKE COUNTER:", keyStrokeCounter);
        keystrokesSpan.textContent = keyStrokeCounter;
        // }

        // DISABLE CONTROLS BY HIDING IT BEHIND MAIN CONTAINER WHILE TIMER IS ON WITH FIRST KEYPRESS
        // !!! THIS ONLY RUNS IF TIMER IS ON !!!
        // if (keyStrokeCounter === 1) {
        //     for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
        //         fadeWithTimerElements[i].classList.add("fadeOut");
        //         // document.querySelector(".body").classList.add("timer-style__body");
        //         // container.classList.add("timer-style__container");
        //     }
        // }

        // ENABLE CONTROLS WHEN TIME IS UP
        // +++++++++++++++++++++++++++++++++++++++++++++
        // if (!timerOn) {
        // if (!timerRunning) {
        //     // console.log("<<<<< TIMER OFF >>>>>");
        //     for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
        //         fadeWithTimerElements[i].classList.remove("fadeOut");
        //         // document.querySelector(".body").classList.remove("timer-style__body");
        //         // container.classList.remove("timer-style__container");
        //     }
        // }
        // +++++++++++++++++++++++++++++++++++++++++++++

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

            wrongCounter += 1;

            // UPDATE PROBLEM KEY SET
            if (
                wordArrays[lineIdx][wordIdx][charIdx] !== " " && // SPACE
                wordArrays[lineIdx][wordIdx][charIdx] !== undefined // CHARACTER IN NEXT WORD (WORD IDX HAS NOT BEEN INCREMENTED)
            ) {
                problemKeysSet.add(wordArrays[lineIdx][wordIdx][charIdx]);
            }

            // IF PROBLEMKEYS SET HAS LENGTH LOOP OVER problemKeysSet AND FIND CORRESPONDING problem-key-span FOR EACH ELEMENT
            if (problemKeysSet.size > 0) {
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

        createSpans(lineIdx + 1, textSpanContainerNextParagraph);
        textInput.placeholder = "Start typing or customise text";
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CONTROL PANEL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const enableStartButton = () => {
    startButton.classList.add("apply--active");
    startButton.disabled = false;
    startButton.innerText = "Start";
};

const disableStartButton = () => {
    startButton.classList.remove("apply--active");
    startButton.disabled = true;
};

const applyButtons = document.getElementsByClassName("btn--apply");

const allChangesApplied = () => {
    let allApplied = true;
    for (let i = 0; i < applyButtons.length; i += 1) {
        if (applyButtons[i].classList.contains("apply--active")) {
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
        // console.log(this);
        // console.log(targetArray);
        difficultyApply.classList.add("apply--active");
        difficultyApply.disabled = false;
        startButton.classList.remove("apply--active");
        disableStartButton();
        messageDiv.textContent = "Apply changes!";
        // if (allChangesApplied()) {
        //     enableStartButton();
        // }
    });
}

difficultyApply.addEventListener("click", function () {
    difficultyApply.classList.remove("apply--active");
    difficultyApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    clearDataAndDisplay();
    clearArrAndString();

    setDifficultyLevel();
    // console.log("DIFFICULTY SELECTED", targetArray);
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BEGINNER GRAMS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const disableRowsControls = () => {
    for (let i = 0, length = rowRadios.length; i < length; i++) {
        rowRadios[i].checked = false;
    }
    rowsApply.disabled = true;
    rowsApply.classList.remove("apply--active");
};

const disableGramsControls = () => {
    for (let i = 0, length = gramRadios.length; i < length; i++) {
        gramRadios[i].checked = false;
    }
    gramsApply.disabled = true;
    gramsApply.classList.remove("apply--active");
};

const gramRadios = document.getElementsByClassName("gram-radio");
const gramsApply = document.getElementById("grams-apply");

// MAKE APPLY BUTTON ACTIVE IF SELECTION IS MADE
for (let i = 0, length = gramRadios.length; i < length; i++) {
    gramRadios[i].addEventListener("click", function () {
        gramsApply.classList.add("apply--active");
        gramsApply.disabled = false;
        startButton.classList.remove("apply--active");
        disableStartButton();
        clearDataAndDisplay();
        messageDiv.textContent = "Apply changes!";

        if (allChangesApplied()) {
            enableStartButton();
        }
        // DISABLE ROWS
        disableRowsControls();
        // DISABLE LEVELS AND LEVELS APPLY
        for (let i = 0; i < levelButtons.length; i += 1) {
            levelButtons[i].classList.remove("apply--active", "toggle-on");
        }
        levelsApply.disabled = true;
        levelsApply.classList.remove("apply--active", "toggle-on");
    });
}

gramsApply.addEventListener("click", function () {
    // ENABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
    for (let i = 0; i < beginnerToggles.length; i += 1) {
        beginnerToggles[i].disabled = false;
    }

    gramsApply.classList.remove("apply--active");
    gramsApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    clearDataAndDisplay();
    clearArrAndString();

    for (let i = 0, length = gramRadios.length; i < length; i++) {
        if (gramRadios[i].checked) {
            if (gramRadios[i].value === "2") {
                targetArray = [...bigrams];
            } else if (gramRadios[i].value === "3") {
                targetArray = [...trigrams];
            } else {
                targetArray = [...quadrigrams]; // "4"
            }
            // break;
        }
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BEGINNER ROWS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const rowRadios = document.getElementsByClassName("row-radio");
const rowsApply = document.getElementById("rows-apply");

// MAKE APPLY BUTTON ACTIVE IF SELECTION IS MADE
for (let i = 0, length = rowRadios.length; i < length; i++) {
    rowRadios[i].addEventListener("click", function () {
        rowsApply.classList.add("apply--active");
        rowsApply.disabled = false;
        startButton.classList.remove("apply--active");
        disableStartButton();
        clearDataAndDisplay();
        messageDiv.textContent = "Apply changes!";

        if (allChangesApplied()) {
            enableStartButton();
        }
        // DISABLE GRAMS
        disableGramsControls();
        // DISABLE LEVELS AND LEVELS APPLY
        for (let i = 0; i < levelButtons.length; i += 1) {
            levelButtons[i].classList.remove("apply--active", "toggle-on");
        }
        levelsApply.disabled = true;
        levelsApply.classList.remove("apply--active", "toggle-on");
    });
}

rowsApply.addEventListener("click", function () {
    // ENABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
    for (let i = 0; i < beginnerToggles.length; i += 1) {
        beginnerToggles[i].disabled = false;
    }

    rowsApply.classList.remove("apply--active");
    rowsApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    clearDataAndDisplay();
    clearArrAndString();

    for (let i = 0, length = rowRadios.length; i < length; i++) {
        if (rowRadios[i].checked) {
            if (rowRadios[i].value === "top") {
                targetArray = [...topRow];
            } else if (rowRadios[i].value === "home") {
                targetArray = [...homeRow];
            } else {
                targetArray = [...bottomRow]; // "bottom"
            }
            // break;
        }
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LINE LENGTH 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DEFAULT LINE LENGTH (30), ALSO HARD CODED IN HTML

// DISPLAY CURRENT VALUE OF SLIDER
slider.onchange = function (event) {
    lengthDisplaySpan.textContent = slider.value;
    lengthApply.classList.add("apply--active");
    lengthApply.disabled = false;
    disableStartButton();
    messageDiv.textContent = "Apply changes!";
};

// GET SLIDER FINAL VALUE AND ASSIGN TO SEQUENCE LENGTH
lengthApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    sequenceLength = slider.value;
    lengthApply.classList.remove("apply--active");
    lengthApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PUNCTUATION 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// SELECT BOTH ADVANCED AND BEGINNER
// const punctuationToggles = document.getElementsByClassName("btn--toggle__punctuation");
// console.log(punctuationToggles);

// 1. ONLY TOGGLE STYLE
const handlePunctuationToggle = () => {
    // console.log("PUNCTUATION TOGGLE");
    toggleButtonStyle(punctuationToggle);
    // 1. TOGGLE CLASS
    punctuationApply.classList.toggle("apply--active");
    // 2. SET STATUS BASED ON CLASS
    punctuationApply.disabled = punctuationApply.classList.contains(
        "apply--active"
    )
        ? false
        : true;

    startButton.disabled = allChangesApplied() ? false : true;

    messageDiv.textContent = "Apply changes!";
};

punctuationToggle.addEventListener("click", handlePunctuationToggle);

// for (let i = 0; i < punctuationToggles.length; i += 1) {
//     punctuationToggles[i].addEventListener("click", handlePunctuationToggle);
// }

// 2. APPLY CHANGES WHEN CLICKED
punctuationApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(punctuationToggle);
    punctuationApply.classList.remove("apply--active");
    punctuationApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    punctuationToggle.disabled = false;
});

// BEGINNER LEVEL

const handlePunctuationToggleBeginner = () => {
    // console.log("BEGINNER PUNCTUATION TOGGLE");
    toggleButtonStyle(punctuationToggleBeginner);
    punctuationApplyBegineer.classList.toggle("apply--active");
    punctuationApplyBegineer.disabled =
        punctuationApplyBegineer.classList.contains("apply--active")
            ? false
            : true;

    startButton.disabled = allChangesApplied() ? false : true;

    messageDiv.textContent = "Apply changes!";
};

punctuationToggleBeginner.addEventListener(
    "click",
    handlePunctuationToggleBeginner
);

punctuationApplyBegineer.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(punctuationToggleBeginner);
    punctuationApplyBegineer.classList.remove("apply--active");
    punctuationApplyBegineer.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    punctuationToggleBeginner.disabled = false;
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CAPITAL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleCapitalToggle = () => {
    toggleButtonStyle(capitalToggle);
    capitalApply.classList.toggle("apply--active");
    capitalApply.disabled = capitalApply.classList.contains("apply--active")
        ? false
        : true;

    startButton.disabled = allChangesApplied() ? false : true;

    messageDiv.textContent = "Apply changes!";
};

capitalToggle.addEventListener("click", handleCapitalToggle);

capitalApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(capitalToggle);
    capitalApply.classList.remove("apply--active");
    capitalApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    capitalToggle.disabled = false;
});

// BEGINNER LEVEL

const handleCapitalToggleBeginner = () => {
    toggleButtonStyle(capitalToggleBeginner);
    capitalApplyBeginner.classList.toggle("apply--active");
    capitalApplyBeginner.disabled = capitalApplyBeginner.classList.contains(
        "apply--active"
    )
        ? false
        : true;

    startButton.disabled = allChangesApplied() ? false : true;

    messageDiv.textContent = "Apply changes!";
};

capitalToggleBeginner.addEventListener("click", handleCapitalToggleBeginner);

capitalApplyBeginner.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(capitalToggleBeginner);
    capitalApplyBeginner.classList.remove("apply--active");
    capitalApplyBeginner.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    capitalToggleBeginner.disabled = false;
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ENTER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleEnterToggle = () => {
    toggleButtonStyle(enterToggle);
    enterApply.classList.toggle("apply--active");
    enterApply.disabled = enterApply.classList.contains("apply--active")
        ? false
        : true;

    startButton.disabled = allChangesApplied() ? false : true;

    messageDiv.textContent = "Apply changes!";
};

enterToggle.addEventListener("click", handleEnterToggle);

enterApply.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(enterToggle);
    enterApply.classList.remove("apply--active");
    enterApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    enterToggle.disabled = false;
});

// BEGINNER LEVEL

const handleEnterToggleBeginner = () => {
    toggleButtonStyle(enterToggleBeginner);
    enterApplyBeginner.classList.toggle("apply--active");
    enterApplyBeginner.disabled = enterApplyBeginner.classList.contains(
        "apply--active"
    )
        ? false
        : true;

    startButton.disabled = allChangesApplied() ? false : true;

    messageDiv.textContent = "Apply changes!";
};

enterToggleBeginner.addEventListener("click", handleEnterToggleBeginner);

enterApplyBeginner.addEventListener("click", function () {
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(enterToggleBeginner);
    enterApplyBeginner.classList.remove("apply--active");
    enterApplyBeginner.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
    }
    enterToggleBeginner.disabled = false;
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TIMER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ONE TIME LISTENER FOR TIMER SETTIMEOUT
const countdown = () => {
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
        fadeWithTimerElements[i].classList.remove("fadeIn");
        fadeWithTimerElements[i].classList.add("fadeOut");
    }
    document.querySelector(".body").classList.add("timer-style__body");
    container.classList.add("timer-style__container");
    messageDiv.classList.add("timer-style__message-div");
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    let seconds = 60;
    // seconds = 10;
    // seconds = 5;
    const tick = () => {
        const counter = document.getElementById("counter-div");
        seconds -= 1;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        // counter.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
            // timerOn = true;
            timerRunning = true;
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
                // document.querySelector(".body").classList.remove("timer-style__body");
                // container.classList.remove("timer-style__container");
            }
        }

        // if (seconds === 1) {
        //     textSpanContainerNextParagraph.classList.add("totalFadeOut");
        //     textSpanContainerActive.classList.add("totalFadeOut");
        // }

        if (seconds === 0) {
            // console.log("times up");
            // document.removeEventListener("keydown", handleKeyEvent);
            timerRunning = false;

            textInput.value = "                 Try Again ➡"; // SET INPUT VALUE
            // textInput.readOnly = true; // DISABLE TXT INPUT
            textInput.disabled = true; // DISABLE TXT INPUT
            speedSpan.innerText = finalSpeed;
            startButton.disabled = false;
            startButton.classList.add("apply--active");
            startButton.innerText = "Start";
            // CLEAR TEXT AFTER 1750 SECONDS, SYNC CLEARTEXFIELDS WITH ANIMATION DURATION (FADE OUT 1500 AND THEN CLEAR)
            setTimeout(clearTextFields, 1750);
            // textSpanContainerActive.classList.add("fadeOut");

            // THIS IS NOT NECESSARY, ADD CLASS TO BOTH LINES AT ONCE SEE BELOW:
            // const activeTextSpans =
            //     document.getElementsByClassName("active-txt-span");
            // for (let i = 0; i < activeTextSpans.length; i += 1) {
            //     activeTextSpans[i].classList.add("totalFadeOut");
            // }

            textSpanContainerNextParagraph.classList.add("totalFadeOut");
            textSpanContainerActive.classList.add("totalFadeOut");

            document
                .querySelector(".body")
                .classList.remove("timer-style__body");
            container.classList.remove("timer-style__container");
            messageDiv.classList.remove("timer-style__message-div");

            textInput.removeEventListener("keydown", startCountdown);
            const totalKeystrokes = keyStrokeCounter;
            keystrokesSpan.textContent = totalKeystrokes;
            // ENABLE CONTROL INPUTS/TOGGLES
            for (let i = 0; i < disabledDuringTimer.length; i += 1) {
                disabledDuringTimer[i].disabled = false;
            }

            // document.removeEventListener("keydown", handleKeyEvent);
        }
    };

    tick();
};

const handleTimerToggle = () => {
    // console.log("TIMER TOGGLE", enterOn);
    toggleButtonStyle(timerToggle);
    timerApply.classList.toggle("apply--active");
    timerApply.disabled = timerApply.classList.contains("apply--active")
        ? false
        : true;

    startButton.disabled = allChangesApplied() ? false : true;

    messageDiv.textContent = "Apply changes!";
};

timerToggle.addEventListener("click", handleTimerToggle);

timerApply.addEventListener("click", function () {
    // console.log("TIMER APPLY START", enterOn);
    clearDataAndDisplay();
    // console.log("TIMER APPLY", enterOn);
    clearArrAndString();
    // console.log("TIMER APPLY", enterOn);
    toggleButtonState(timerToggle);
    // console.log("TIMER APPLY", enterOn);
    timerApply.classList.remove("apply--active");
    timerApply.disabled = true;
    if (allChangesApplied()) {
        // console.log("TIMER APPLY", enterOn);
        enableStartButton();
        messageDiv.textContent = "";
        // console.log("TIMER APPLY", enterOn);
    }
    timerToggle.disabled = false;
    // console.log("TIMER APPLY END", enterOn);
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SOUND 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleSoundToggle = () => {
    toggleButtonStyle(soundToggle);
    soundApply.classList.toggle("apply--active");
    soundApply.disabled = soundApply.classList.contains("apply--active")
        ? false
        : true;

    messageDiv.textContent = "Apply changes!";

    // DO NOT DISABLE START BUTTON WHEN TURNING SOUND ON / OFF
    // startButton.disabled = allChangesApplied()
    //     ? false
    //     : true;
};

soundToggle.addEventListener("click", handleSoundToggle);

soundApply.addEventListener("click", function () {
    // clearDataAndDisplay();
    // clearArrAndString();
    toggleButtonState(soundToggle);
    soundApply.classList.remove("apply--active");
    soundApply.disabled = true;
    if (allChangesApplied()) {
        enableStartButton();
        messageDiv.textContent = "";
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

// CLICK ANYWHERE TO CLOSE INSTRUCTIONS (DISABLED)
// instructionsContainer.addEventListener("click", function () {
//     card.classList.toggle("flipped");
// });

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

// ONLY ENABLE LEVELS APPLY IF AT LEAST ONE GROUP IS SELECTED
const enableLevelsApply = () => {
    // 1. CHECK IF AT LEAST ONE LEVEL IS SELECTED
    let selectionMade = false; // RESET TO FALSE BEFORE LOOP
    for (let i = 0; i < levelButtons.length; i += 1) {
        if (levelButtons[i].classList.contains("apply--active")) {
            selectionMade = true;
            break;
        }
    }

    // 2. ONLY ACTIVATE APPLY IF AT LEAST ONE LEVEL IS SELECTED
    if (selectionMade) {
        levelsApply.classList.add("apply--active");
        levelsApply.disabled = false;
    } else {
        levelsApply.classList.remove("apply--active");
        levelsApply.disabled = true;
    }
};

// ARRAY FOR THE CURRENTLY SELECTED KEYS
let selectedBeginerKeys = [];

// ARRAY FOR RANDOMLY GENERATED WORDS
let randomKeyWordsArray = [];

// ALL 3 TOGGLE BUTTONS (PUNCTUATION, CAPITAL AND ENTER)
const beginnerToggles = document.getElementsByClassName(
    "btn--toggle__beginner"
);

// CHOOSE SELECTION TYPE (RANDOM (ONE AT A TIME) OR INCLUSIVE (UP TO SELECTED))
// INCLUSIVE UP TO SELECTION IS NOW DEFAULT
let inclusiveSelected = true;

const selectInclusiveToggle = document.getElementById(
    "btn--toggle__selection-type"
);
selectInclusiveToggle.addEventListener("click", function () {
    levelsApply.disabled = true;

    // RESET ALL BUTTONS (REMOVE CONTROL-APPLY-ACTIVE AND TOGGLE ON CLASSES)
    for (let i = 0; i < levelButtons.length; i += 1) {
        levelButtons[i].classList.remove("toggle-on", "apply--active");
    }

    disableStartButton();
    clearDataAndDisplay();

    selectInclusiveToggle.classList.toggle("toggle-on");
    if (selectInclusiveToggle.classList.contains("toggle-on")) {
        inclusiveSelected = false;
        selectInclusiveToggle.innerText = "Random";
        // console.log(inclusiveSelected);
    } else {
        inclusiveSelected = true;
        selectInclusiveToggle.innerText = "Through";
        // console.log(inclusiveSelected);
    }
});

// console.log("INCLUSIVE SELECTED");
for (let i = 0; i < levelButtons.length; i += 1) {
    // console.log(this);
    // console.log(this.innerText);
    // console.log(this.id);

    // console.log("CLICKED", levelButtons[i], "index:", i);
    levelButtons[i].addEventListener("click", function () {
        // INCLUSIVE SELECTED
        if (inclusiveSelected) {
            // REMOVE CLASSES FIRST
            for (let i = 0; i < levelButtons.length; i += 1) {
                levelButtons[i].classList.remove(
                    "toggle-on",
                    "toggle-off",
                    "apply--active"
                );
            }

            // LOOP THROUGH LEVELBUTTOONS AND ACTIVATE THEM UP TO INDEX OF SELECTED LEVEL
            for (let j = 0; j <= i; j += 1) {
                // console.log("INCLUSIVE SELECTION:", levelButtons[j]);
                levelButtons[j].classList.add("apply--active", "toggle-on");
            }

            disableStartButton();
            clearDataAndDisplay();
            enableLevelsApply();

            messageDiv.textContent = "Apply changes!";

            // 1. CHECK IF AT LEAST ONE LEVEL IS SELECTED
            let selectionMade = false; // RESET TO FALSE BEFORE LOOP
            for (let i = 0; i < levelButtons.length; i += 1) {
                if (levelButtons[i].classList.contains("apply--active")) {
                    // console.log("FOUND", levelButtons[i]);
                    selectionMade = true;
                    break;
                }
            }

            // console.log("SELECTION MADE:", selectionMade);

            // 2. ONLY ACTIVATE APPLY IF AT LEAST ONE LEVEL IS SELECTED
            if (selectionMade) {
                levelsApply.classList.add("apply--active");
                levelsApply.disabled = false;
            } else {
                levelsApply.classList.remove("apply--active");
                levelsApply.disabled = true;
            }

            // RESET SELECTED BEGINNER KEYS ARRAY, IT WILL BE UPDATED WITH APPLY BUTTON
            selectedBeginerKeys = [];
        }
        // INDIVIDUALLY SELECT (ONE BY ONE, ANY ORDER)
        else {
            disableStartButton();
            clearDataAndDisplay();
            messageDiv.textContent = "Apply changes!";

            toggleLevelButtonStyle(this);
            // console.log(levelButtons);

            enableLevelsApply();

            // ONLY DISPLAY MESSAGE IF CHANGES HAVE BEEN MADE (APPLY BUTTON IS ACTIVE)
            if (levelsApply.classList.contains("apply--active")) {
                messageDiv.textContent = "Apply changes!";
            } else {
                messageDiv.textContent = "";
            }

            // RESET SELECTED BEGINNER KEYS ARRAY, IT WILL BE UPDATED WITH APPLY BUTTON
            selectedBeginerKeys = [];
        }
        // DISABLE RADIOS
        disableGramsControls();
        disableRowsControls();
    });
}

// TOGGLE LEVEL BUTTON STYLE, CLASSES ARE NOW USED TO STYLE
const toggleLevelButtonStyle = (element) => {
    if (element.classList.contains("toggle-on")) {
        element.classList.remove("toggle-on");
        element.classList.add("toggle-off");
        element.classList.remove("apply--active");
    } else {
        element.classList.remove("toggle-off");
        element.classList.add("toggle-on");
        element.classList.add("apply--active");
    }
};

// TOGGLE BOOLEAN BUTTON STATE BASED ON CLASS
// !!! LOOP OVER ALL LEVEL BUTTONS AND PLUG EACH BUTTON INTO THIS FUNCTION WHEN APPLY IS CLICKED BELOW (1504)!!!
const toggleLevelButtonState = (element) => {
    // console.log(element);
    if (element.classList.contains("toggle-on")) {
        switch (element) {
            case level_1:
                level_1_On = true;
                break;
            case level_2:
                level_2_On = true;
                break;
            case level_3:
                level_3_On = true;
                break;
            case level_4:
                level_4_On = true;
                break;
            case level_5:
                level_5_On = true;
                break;
            case level_6:
                level_6_On = true;
                break;
            case level_7:
                level_7_On = true;
                break;
            case level_8:
                level_8_On = true;
                break;
            case level_9:
                level_9_On = true;
        }
    } else {
        switch (element) {
            case level_1:
                level_1_On = false;
                break;
            case level_2:
                level_2_On = false;
                break;
            case level_3:
                level_3_On = false;
                break;
            case level_4:
                level_4_On = false;
                break;
            case level_5:
                level_5_On = false;
                break;
            case level_6:
                level_6_On = false;
                break;
            case level_7:
                level_7_On = false;
                break;
            case level_8:
                level_8_On = false;
                break;
            case level_9:
                level_9_On = false;
        }
    }
};

// 2. APPLY CHANGES TO ALL LEVELS WHEN APPLY CLICKED
levelsApply.addEventListener("click", function () {
    // ENABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
    for (let i = 0; i < beginnerToggles.length; i += 1) {
        beginnerToggles[i].disabled = false;
    }

    randomKeyWordsArray = []; // RESET TO AVOID DUPLICATES IF APPLY IS CLICKED AGAIN
    selectedBeginerKeys = []; // RESET TO AVOID DUPLICATES
    enableStartButton();
    levelsApply.disabled = true;

    levelsApply.classList.remove("apply--active");
    // THIS WILL UPDATE LEVEL STATES ARRAY
    for (let i = 0; i < levelButtons.length; i += 1) {
        toggleLevelButtonState(levelButtons[i]);
    }

    messageDiv.textContent = "";

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

    // +++++++++++++++++++++++++++++++++++++++++++++
    // MAKING SURE TIMERON IS FALSE IN BEGINNER
    if (timerToggle.classList.contains("toggle-on") && beginnerOn) {
        timerOn = false;
    }
    // +++++++++++++++++++++++++++++++++++++++++++++

    // DISABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
    for (let i = 0; i < beginnerToggles.length; i += 1) {
        beginnerToggles[i].disabled = true;
    }

    // RESET ALL MODIFIER TOGGLES TO OFF
    punctuationOn = false;
    punctuationToggleBeginner.classList.remove("toggle-on");
    punctuationToggleBeginner.classList.add("toggle-off");
    punctuationToggleBeginner.innerText = "Off";

    capitalOn = false;
    capitalToggleBeginner.classList.remove("toggle-on");
    capitalToggleBeginner.classList.add("toggle-off");
    capitalToggleBeginner.innerText = "Off";

    enterOn = false;
    enterToggleBeginner.classList.remove("toggle-on");
    enterToggleBeginner.classList.add("toggle-off");
    enterToggleBeginner.innerText = "Off";

    targetArray = [];

    /*
        CHECK IF ANY LEVEL IS SELECTED, IF SO,
            A. ACTIVATE APPLY TO RE - SUBMIT SETTINGS ??? OR
            B. ACTIVATE START BUTTON ???
    */
    let preSelectedLevels = false;
    for (let i = 0; i < levelButtons.length; i += 1) {
        if (levelButtons[i].classList.contains("apply--active")) {
            preSelectedLevels = true;
            break;
        }
    }
    if (preSelectedLevels) {
        // console.log("PRE SELECTED LEVELS");
        levelsApply.disabled = false;
        levelsApply.classList.add("apply--active");
    }

    startButton.disabled = true;
    startButton.classList.remove("apply--active");
    textInput.disabled = true;
    clearDataAndDisplay();
    clearArrAndString();
});

// HIDE BEGINNER LEVELS
beginnerHideButton.addEventListener("click", function () {
    beginnerOn = false;

    // RESTORE / ACTIVATE ADVACED LEVEL CONTROL SETTINGS

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 DIFFICULTY 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    // TEMP FIX: RESET TO COMMON 100
    difficultyRadios[0].checked = true;
    // !!! TEMP FIX, HAS TO RETURN TO THE LAST DIFFICULTY SELECTED !!!
    targetArray = [...common100];
    // !!! NOT WORKING WHEN OTHER RADIOS HAVE BEEN SET IN BEGINNER !!!
    // setDifficultyLevel();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 PUNCTUATION 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    punctuationOn = punctuationToggle.classList.contains("toggle-on")
        ? true
        : false;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 CAPITAL 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    capitalOn = capitalToggle.classList.contains("toggle-on") ? true : false;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 ENTER 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    enterOn = enterToggle.classList.contains("toggle-on") ? true : false;

    // +++++++++++++++++++++++++++++++++++++++++++++
    // if (timerToggle.innerText === "On") {
    if (timerToggle.classList.contains("toggle-on")) {
        timerOn = true;
    }
    // +++++++++++++++++++++++++++++++++++++++++++++

    problemKeysSet.clear();

    startButton.disabled = false;

    startButton.classList.add("apply--active");
    textInput.disabled = true;
    clearDataAndDisplay();
    clearArrAndString();

    // DISABLE RADIOS IN BEGINNER CARD
    for (let i = 0, length = gramRadios.length; i < length; i++) {
        gramRadios[i].checked = false;
    }
    gramsApply.disabled = true;
    gramsApply.classList.remove("apply--active");

    for (let i = 0, length = rowRadios.length; i < length; i++) {
        rowRadios[i].checked = false;
    }
    rowsApply.disabled = true;
    rowsApply.classList.remove("apply--active");
});

// JS NOT IN USE, POSITION IS NOW STICKY IN CSS

// INSTRUCTIONS CONTAINER HOVER : CURSOR TOOLTIP
// SOURCE: https://codepen.io/paulvddool/pen/mROEGa
// const cursorTooltip = document.getElementById("instructions-cursor-tooltip");

// const trackCursor = (e) => {
//     let x = e.clientX;
//     let y = e.clientY;
//     cursorTooltip.style.left = x + "px";
//     cursorTooltip.style.top = y + "px";
// };

// instructionsContainer.addEventListener("mouseover", trackCursor);

/*

CURRENT BRANCH: none
    MAKE TIMER DISABLED BY DEFAULT???
    ☑️ MAKE STYLE CHANGES BASED ON timerRunning INSTEAD OF timerOn
    ☑️ BEGINNER: DO NOT ACTIVATE START BUTTON WITH PUNCT/CAPITAL/ENTER APPLY UNTIL LEVEL HAS BEEN SELECTED!

    CSS VARIABLES
        CONTAINER HEIGHT
        COLOURS

    RESTORE DIFFICULTY LEVEL SETTING WHEN COMING BACK FROM BEGINNER ? (NOT WORKING)
    TRY RESETTING LEVEL TO COMMON100 - LINE 2317


     !!! WRITE A FUNCTION FOR THESE !!! (disableGrams(), disableRows()) !!!

    DISABLE ALL OTHER OPTIONS
        for (let i = 0, length = gramRadios.length; i < length; i++) {
            gramRadios[i].checked = false;
        }
        gramsApply.disabled = true;
        gramsApply.classList.remove("apply--active");

        for (let i = 0, length = rowRadios.length; i < length; i++) {
            rowRadios[i].checked = false;
        }
        rowsApply.disabled = true;
        rowsApply.classList.remove("apply--active");



    ADD COLOUR-THEME CLASS TO EVERY ELEMENT AFFECTED ???

     ACCURACY SPAN COLOUR CODES NOT WORKING WITH NEW SPAN COLOUR (CSS: .accuracy-span.dark-theme)

    
    FEATURES:
        CONNECT BEGINNER CONTROLS TO JAVASCRIPT
            ☑️ PUNCTUATION
            ☑️ CAPITAL
            ☑️ ENTER
        (DISABLED)ADD TOOLTIP TO CURSOR ON INSTRUCTIONS CARD ("CLICK ANYWHERE TO CLOSE")
        DISPLAY MESSAGES IN MESSAGE DIV
            ☑️ CHANGE MESSAGE DIV COLOR TO GREY OR ORANGE?
            CAPSLOCK WARNING

        ADD NUMERIC CHARACTERS

        GREEN WORDS COUNTER
        COMPLETE WORDS COUNTER
        TRACK KEYS TYPED IN REAL TIME ON KEYBOARD?
            ☑️ LETTER KEYS
            ENTER
            NUMBERS
       
        ☑️ WRITE AND FORMAT INFO CARD
            ADD MORE CONTENT
        
        MAKE ONE COMMON APPLY BUTTON FOR ALL CONTROLS?
        RESET TIMER IF START BUTTON IS CLICKED? 
        DISPLAY MESSAGE AS TEXT ELEMENT, NOT PLACEHOLDER OR CONTENT
            ☑️ CAPSLOCK WARNIING
        ADD MOST COMMON SENTENCES TO DIFFICULTY
        ☑️ PROBLEM KEYS
        DYNAMICALLY GENERATE NEXT LINE + 1 ?
        SHOW ALL TEXT AS ONE BLOCK ?

        INCLUDE ENTER KEY IN REAL TIME HIGHLIGHT ?
       
            
    PROBLEMS:
        ☑️ RESET WRONG KEY COUNTER WITH START !!! IT IS KEEPING TRACK OF IT FROM PREVIOUS SESSION !!!

        LINE:2339 HOW TO HANDLE APPLY BUTTONS WHEN SWITCHING BETWEEN ADV/BEGINNER ???

        ENTER AND SPACE KEYS TRIGGER CARD FLIP AFTER FLIP BUTTON IS CLICKED (FOCUS???)
               
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
        
        STOP MOVING CURSOR WHEN LETTER CHARACTER IS TYPED INSTEAD OF SPACE AFTER WORD IS TYPED ?
        NOTES:
            !!! WHEN TIMER HAS ENDED FIRST START BUTTON PRESS WILL GENERATE POBLEM KEY WORDS ONLY, SECOND CLICK WILL USE COMMON100 !!!


        🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CHRIS' IDEAS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        MAKE DIFFICULTY LEVEL OPTIONS SIMPLER
            EASY
            MEDIUM
            HARD

            EASY: RANDOM 100
            MEDIUM: RANDOM 200 OR 500
            HARD: INCLUDE RANDOM SENTENCES

        CHANGE THE NUMBER OF CONSECUTIVE ERRORS ALLOWED
            EASY:15
            MEDIUM:10
            HARD:5

        WHEN MAX NUM OF ERRORS HAVE BEEN MADE:
            DO NOT RESET COUNTERS
            DO NOR RELOAD PAGE
            MOVE CURSOR BACK TO FIRST RED KEY
            CONTINUE SESSSION AS NORMAL AND REVEAL STATS AT THE END

        GET RID OF APPLY BUTTONS

        USE "HOW TO" INSTEAD OF "INFO"


        MACBOOK 25/3/23 15:31
       
*/
