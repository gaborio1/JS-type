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

const card = document.getElementById("card"); // CARD CONTAINED WITHIN SCENE

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
// SOUND
const soundToggle = document.getElementById("sound-toggle");
const soundApply = document.getElementById("sound-apply");
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
const flipButtons = document.getElementsByClassName("flip-button");
// CONTROL PANEL INPUTS/TOGGLE BUTTONS THAT ARE DISABLED DURING TIMER
const disabledDuringTimer = document.getElementsByClassName(
    "disabled-during-timer"
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
let timerOn = true;
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

// TRCACK PROBLEM KEYS (NO DUPLICATES IN SET)
let problemKeysSet = new Set();
const problemKeySpans = document.getElementsByClassName("problem-key-span");
const probKeyWordsArr = [];
let tempProbWordsArr = []; // WORDS THAT CONTAIN BROBLEM KEYS FROM PREVIOUS SESSION

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
        }
        if (element === capitalToggle) {
            capitalOn = true;
        }
        if (element === soundToggle) {
            soundOn = true;
        }
        if (element === timerToggle) {
            timerOn = true;
            console.log("TIMER:", timerOn);
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
            console.log("TIMER:", timerOn);
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
        while (true) {
            if (getStrLength(arr) >= sequenceLength) break;

            let currWord = getRandom(targetArray); // GET RANDOM WORD

            if (punctuationOn) {
                currWord += getRandom(punctMarks); // CONCAT RANDOM PUNCT MARK
            }

            if (capitalOn) {
                currWord = capitaliseWord(currWord); // MAKE FIRST CHAR UPPERCASE
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
    if (problemKeysSet.size) {
        problemKeysSet.forEach((key) => {
            targetArray.forEach((word) => {
                if (word.indexOf(key) > -1) {
                    tempProbWordsArr.push(word);
                }
            });
        });
        targetArray = [...tempProbWordsArr]; // UPDATE TARGET ARRAY WITH FILTERED WORDS ARRAY
    }
}

const handleCapslockChange = () => {
    if (event.getModifierState("CapsLock")) {
        console.log("CAPSLOCK IS ON! - START BUTTON");
        capsLockWarningsOn();
    } else {
        capsLockWarningsOff();
    }
}

// REMOVE RED BACKGROUND FROM PROBLEM KEYS
const removeProblemKeyHighlight = () => {
    for (let i = 0; i < letterKeys.length; i += 1) {
        letterKeys[i].classList.remove("red-background");
        // letterKeys[i].style.color = "red";
    }
}

// DISABLE CONTROL APPLY BUTTONS
const disableApplyButtons = () => {
    difficultyApply.disabled = true;
    lengthApply.disabled = true;
    punctuationApply.disabled = true;
    capitalApply.disabled = true;
    timerApply.disabled = true;
}

// MAKE EACH CHARACTER OF THE STRING A span AND APPEND AS A CHILD ELEMENT TO ITS CONTAINER

// CREATE SPANS FROM wordArrays' ARRAY OF WORDS, JOIN ELEMENS TO ONE STRING WITH SPACES AND THEN SPLIT
// wordArrays[lineIdx] WILL BE INCREMENTED IN EVETLISTENER
const createSpans = (lineIdx, location) => {
    for (const [idx, char] of wordArrays[lineIdx] // ACCESSING IDX JIN FOR OF LOOP
        .join("")
        .split("")
        .entries()) {
        // console.log(idx, char);
        const span = document.createElement("span"); // CREATE ELEMENT
        // SET TEXT CONTENT / CLASS / ID
        span.innerText = char;
        span.className = "active-txt-span";
        span.id = `span-${idx}`;
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
}

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
}

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
}

//🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CORRECT KEY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

//  WORD[0] - WORD[LENGTH-1], ALL CHARACTERS IN WORD EXCLUDING TRAILING SPACE

const correctKeyNotLastSpace = () => {
    // console.log("<<<<<  NOT LAST CHARACER >>>>>");
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

// WORD[LENGTH-1], TRAILING SPACE ALL WORDS EXCEPT LAST WORD

const correctSpaceNotLastWord = () => {
    if (wordIdx < wordArrays[lineIdx].length - 1) {
        // console.log("<<<<< LAST CHARACER !!! >>>>>");
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

// END OF LINE SPACE
const correctEndOfLineSpace = () => {
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
    stringWordsNext = wordArrays[lineIdx + 1].join(" "); // APPEND TEXT AS STRING NOT SPANS !!!
    textSpanContainerNextParagraph.innerText = stringWordsNext;
}

// ALL OTHER SPACES
const correctSpaceNotEndOfLine = () => {

    let currentCharacter = document.getElementById(
        `span-${strIdx - 1}`
    );

    // if (currentCharacter !== null) {
    currentCharacter.classList.remove(
        "background",
        "black-border"
    );
    // }

    nextWord();
    clearTextInput();

}

// COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY

const countSpanColours = () => {
    let lastWordLength = wordArrays[lineIdx][wordIdx - 1].length;
    let charSpans = document.querySelectorAll(".active-txt-span");
    // START LOOP BACKWARDS AND COUNT SPANS WITH GREEN CLASS
    for (let i = strIdx - 2; i >= strIdx - lastWordLength; i -= 1) {
        // PRINT LAST WORD SPANS WITHOUT TRAILING SPACE
        // console.log(charSpans[i]);

        if (charSpans[i] === undefined) {
            console.log("charspans[i] UNDEFINED!!!");
        }

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
}

// DISPLAY COLOUR COUNTER VALUES
const displayColourCounterValues = () => {
    greenCounterSpan.textContent = greenCounter;
    redCounterSpan.textContent = redCounter;
    orangeCounterSpan.textContent = orangeCounter;
}

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
}

// SPACE ON WORD - FIND NEXT SPACE IN STRING AND SET INDEX TO NEXT WORD AFTER SPACE
const findNextWordIndex = () => {
    let nextWordIdx;
    for (let i = strIdx; i < stringWords.length; i += 1) {
        if (stringWords[i] === " ") {
            // console.log("space found at index: ", i);
            nextWordIdx = i + 1;

            let currentCharacter = document.getElementById(
                `span-${strIdx}`
            );
            currentCharacter.classList.add("red-border");
            break;
        }
    }
    return nextWordIdx;
}

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
    // APPEND TEXT AS STRING (INSTEAD OF SPANS )
    stringWordsNext = wordArrays[lineIdx + 1].join(" ");
    textSpanContainerNextParagraph.innerText = stringWordsNext;
}

// SPACE ON WORD
// APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND FROM CURRENT
// ON ALL CHARACTERS BUT LAST
const spaceOnWord = () => {
    let currentCharacter = document.getElementById(
        `span-${strIdx - 1}`
    );

    wrongCounter += 1;

    currentCharacter.classList.remove("background", "black-border");
    const nextCharacter = document.getElementById(`span-${strIdx}`);
    nextCharacter.classList.add("background", "black-border");
    nextWord();
}

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
}

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// HIGHLIGHT START BUTTON
startButton.classList.add("control-apply-active");

// ADD LISTENER
startButton.addEventListener("click", (event) => {

    // TRACK NUMBER OF START BUTTON CLICKS
    startButtonCounter += 1;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DETECT CAPSLOCK 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    handleCapslockChange();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PROBLEM KEYS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    // IF THERE IS ANY PROBLEM KEY,  FILL tempProbWordsArr WITH WORDS THAT CONTAIN PROBLEM KEYS
    findAndApplyProblemKeyWords();
    problemKeysSet.clear(); // RESET PROBLEM KEYS SET AFTER PROBLEM KEYS HAVE BEEN USED FOR NEW SET OF WORDS
    removeProblemKeyHighlight();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CONTROL PANEL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    disableApplyButtons();

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
    if (timerOn) {
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
    // let stringWordsNext = "";
    stringWordsNext = wordArrays[lineIdx + 1].join("");
    textSpanContainerNextParagraph.innerText = stringWordsNext;

    // ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 KEY EVENTS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    const handleKeyEvent = (event) => {
        // const typedKey = event.key;
        typedKey = event.key;
        // console.log("EVENT: KEYUP", event.key);

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
            document.removeEventListener("keydown", handleKeyEvent);
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

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DETECT CAPSLOCK 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SHIFT 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        if (typedKey === "Shift") {
            console.log("SHIFT");
        }

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
                // END OF LINE SPACE


                if (strIdx === stringWords.length - 1) {
                    correctEndOfLineSpace();
                }

                // ONLY ACCESS CURRENTCHAR IF IT IS NOT END OF LINE (IF STATEMENT DOESNT WORK FOR CLASSLIST REMOVE, STILL GET TYPE ERROR )
                // !!! ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at HTMLDocument.handleKeyEvent (script.js:680:33)

                if (strIdx < stringWords.length - 1) {
                    correctSpaceNotEndOfLine();
                }

                wordCounter += 1;

                // console.log("<<< COUNT GREEN KEYS NOW >>>");
                // console.log(
                //     "LAST WORD COMPLETED:",
                //     wordArrays[lineIdx][wordIdx - 1],
                //     "length:",
                //     wordArrays[lineIdx][wordIdx - 1].length,
                //     "strIdx:",
                //     strIdx,
                //     "stringWords length:",
                //     stringWords.length
                // );

                // COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY
                countSpanColours();

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
            if (problemKeysSet.size) {

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
            document.removeEventListener("keydown", handleKeyEvent);
        }
    };

    // ADD HANDLEKEYEVENT FOR KEYUP EVENT ONLY ONCE, REMOVE IT IF START IS CLICKED AGAIN, SEE IF BLOCK BELOW
    document.addEventListener("keydown", handleKeyEvent);

    // CHANGE START BUTTON'S INNER HTML TO: "NEW"
    if (startButtonCounter > 0) {
        startButton.innerText = "🔄 New";
    }

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
        buildWordArrays(wordsArrLength);
        createSpans(lineIdx, textSpanContainerActive);
        stringWords = wordArrays[lineIdx].join("");
        stringWordsNext = wordArrays[lineIdx + 1].join("");
        textSpanContainerNextParagraph.innerText = stringWordsNext;
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
        difficultyApply.disabled = false;
        startButton.classList.remove("control-apply-active");
        startButton.disabled = true;
    });
}

difficultyApply.addEventListener("click", function () {
    difficultyApply.classList.remove("control-apply-active");
    startButton.classList.add("control-apply-active");
    startButton.disabled = false;
    startButton.innerText = "Start";

    clearDataAndDisplay();
    clearArrAndString();

    for (let i = 0, length = difficultyRadios.length; i < length; i++) {
        if (difficultyRadios[i].checked) {
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
            break;
        }
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LINE LENGTH 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DEFAULT LINE LENGTH (30), ALSO HARD CODED IN HTML

// DISPLAY CURRENT VALUE OF SLIDER
slider.onchange = function (event) {
    // console.log("SLIDER VALUE HAS BEEN CHANGED:", slider.value);
    lengthDisplaySpan.textContent = slider.value;
    console.log("slider changed");
    lengthApply.classList.add("control-apply-active");
    lengthApply.disabled = false;
    startButton.classList.remove("control-apply-active");
    startButton.disabled = true;
};

// GET SLIDER FINAL VALUE AND ASSIGN TO SEQUENCE LENGTH
lengthApply.addEventListener("click", function () {
    startButton.classList.add("control-apply-active");
    startButton.disabled = false;
    startButton.innerText = "Start";

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
    punctuationApply.classList.add("control-apply-active");
    punctuationApply.disabled = false;
    startButton.classList.remove("control-apply-active");
    startButton.disabled = true;
};

punctuationToggle.addEventListener("click", handlePunctuationToggle);

// 2. APPLY CHANGES WHEN CLICKED
punctuationApply.addEventListener("click", function () {
    startButton.classList.add("control-apply-active");
    startButton.disabled = false;
    startButton.innerText = "Start";

    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(punctuationToggle);
    punctuationApply.classList.remove("control-apply-active");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CAPITAL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleCapitalToggle = () => {
    toggleButtonStyle(capitalToggle);
    capitalApply.classList.add("control-apply-active");
    capitalApply.disabled = false;
    startButton.classList.remove("control-apply-active");
    startButton.disabled = true;
};

capitalToggle.addEventListener("click", handleCapitalToggle);

capitalApply.addEventListener("click", function () {
    startButton.classList.add("control-apply-active");
    startButton.disabled = false;
    startButton.innerText = "Start";
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(capitalToggle);
    capitalApply.classList.remove("control-apply-active");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TIMER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ONE TIME LISTENER FOR TIMER SETTIMEOUT
const countdown = () => {
    let seconds = 59;
    // seconds = 30;
    const tick = () => {
        const counter = document.getElementById("counter-div");
        seconds -= 1;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        // counter.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
            timerOn = true;
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
            timerOn = false;
            textInput.value = "                 Try Again ➡"; // SET INPUT VALUE
            textInput.readOnly = true; // DISABLE TXT INPUT
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
        }
    };

    tick();
};

const handleTimerToggle = () => {
    toggleButtonStyle(timerToggle);
    timerApply.classList.add("control-apply-active");
    timerApply.disabled = false;
    startButton.classList.remove("control-apply-active");
    startButton.disabled = true;
};

timerToggle.addEventListener("click", handleTimerToggle);

timerApply.addEventListener("click", function () {
    startButton.classList.add("control-apply-active");
    startButton.disabled = false;
    startButton.innerText = "Start";
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(timerToggle);
    timerApply.classList.remove("control-apply-active");
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SOUND 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleSoundToggle = () => {
    toggleButtonStyle(soundToggle);
    soundApply.classList.add("control-apply-active");
    soundApply.disabled = false;
    startButton.classList.remove("control-apply-active");
    startButton.disabled = true;
};

soundToggle.addEventListener("click", handleSoundToggle);

soundApply.addEventListener("click", function () {
    startButton.classList.add("control-apply-active");
    startButton.disabled = false;
    startButton.innerText = "Start";
    clearDataAndDisplay();
    clearArrAndString();
    toggleButtonState(soundToggle);
    soundApply.classList.remove("control-apply-active");
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
        card.classList.toggle("flipped");
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
        ☑️ ORANGE KEYS COUNTER (BACKSPACE)
        COMPLETE WORDS COUNTER
    FEATURES:
        TRACK KEYS TYPED IN REAL TIME ON KEYBOARD?
        WRITE AND FORMAT INFO CARD
        OPTIONAL SOUND
            KEYPRESS
                ☑️  VALID KEYS
                ☑️ WRONG KEY WARNING
            CONTROLS ?
        ☑️ HIDE AND SHOW INFO
        ☑️ DISABLE START BUTTON IF CHANGES ARE MADE TO CONTROLS, ENABLE WHEN APPLY IS CLICKED
        ☑️ DISABLE APPLY BUTTONS BY DEFAULT, ONLY ACTIVATE THEM IF SELECTION IS MADE
            ☑️ DISABLE APPLY BUTTONS WHAN START BUTTON IS CLICKED
                MAKE A VARIABLE FOR A COLLECTION OF ALL APPLY BUTTONS AND DISABLE THEM WITH A LOOP INSTEAD OF ONE BY ONE
        ☑️ DISABLE START BUTTON WHILE TIMER IS ON
            HIDE START BUTTON AND ADD RESTART/REFRESH WHILE TIMER IS ON?
        ☑️ FADE OUT TEXT WHEN TIME IS UP
        MAKE ONE COMMON APPLY BUTTON FOR ALL CONTROLS?
        ☑️ REMOVE ACTIVE CLASS (OR DISABLE?) START BUTTON WHEN CHANGES ARE MADE ON CONTROL PANEL, ONLY HIGHLIGHT APPLY
        ☑️ ANIMATE CONTROLS/STATS/COLURCODE STATS (FADE IN/OUT)
        ☑️ HIDE OR BLUR/DIM CONTROLS WHEN TIMER IS ACTIVE?
        RESET TIMER IF START BUTTON IS CLICKED?
        ☑️ TIMER ON/OFF
        ☑️ HIGHLIGHT APPLY BUTTONS WHEN CHANGES ARE MADE
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
            DISPLAY MESSAGE AS TEXT ELEMENT, NOT PLACEHOLDER OR CONTENT
            ☑️ WHEN PAGE LOADS (WARNING TRIGGERED BY FIRST CLICK OR KEYPRESS)
            ☑️ DURING SESSION
            DISABLE TEXT INPUT WHEN CAPSLOCK IS ON?
        ADD MOST COMMON SENTENCES TO DIFFICULTY
        PROBLEM KEYS
            ☑️ TRACK
            ☑️ DISPLAY (TEMPORARY TEST DIV, HAVE TO FIND PLACE FOR IT IN APP, MAYBE HIDE AND SHOW?)
            ☑️ WHEN START BTN IS CLICKED NEW TEXT GENERATES WORDS WITH PROBLEM KEYS
                (!!! THIS MIGHT LOOK ODD WHEN THERE ARE ONLY A FEW MATCHING WORDS !!!)
                CONCAT TEMPORARY PROBLEM WORDS ARRAY TO TARGET ARRAY TO GET A MIX OF BOTH?

        BUILD RANDOM WORDS FROM PROBLEM CHARACTERS / WORDS
    CODE:
        MAKE SEPARATE JS FILE FOR HELPER FUNCTIONS
        FUNCTIONS:
            ☑️ STYLING CHARACTERS ASSIGN STYLES TO CSS (ADD AND REMOVE CLASS WITH JS)
            ☑️ SET CURSOR POSITION (FORWARD, BACK)
            ☑️ CLEAR INPUT
            ☑️RESET ALL INDEX TRACKERS (FOR START BUTTON - AND APPLY BUTTONS ON CONTROL PANEL ? MAYBE NOT NECESSARY)
            
    PROBLEMS:

        DON'T HIGHLIGT RADIO LABELS AND TOGGLE BUTTONS WHILE TIMER IS ON (WHEN DISABLED)
            ☑️ TOGGLE BUTTONS (:disabled:hover {ORIGINAL FONTWEIGHT})
            ☑️ RADIO LABELS
            SLIDER
            
        ☑️ DISABLE CONTROLS (WITHOUT Z-INDEX) WHILE TIMER IS ON, IT WILL CALUSE A BUG IF CHANGES ARE MADE
            AS START BUTTON HAS TO BE CLICKED AGAIN WHICH ADDS LISTENER AGAIN !!!

        CAPSLOCK MUST NOT ACTIVATE TIMER ?
        CONTROL APPLY BUTTONS DELETES "CLICK START" MESSAGE FROM TXT INPUT
        ☑️ CONSECUTIVE WRONG CHARACTERS HANDLING (DISABLE INPUT AND RELOAD)
        ☑️ CENTER TEXT INPUT CONTENT (LEADING SPACES ARE HARD CODED IN INPUT.VALUE ALSO SEE CSS .form input - line 218)
        ☑️ SPACE DIVS CONSISTENTLY IN WRAPPER (50PX. 25PX)
        ☑️ SIZE DIVS CONSISTENTLY IN WRAPPER (50PX. 25PX)
        ☑️ ADD COMMON CLASS TO FADE ELEMENTS WHILE TIMER IS ON (.fadeout-with-timer)
        USE CSS VARIABLES
            ☑️ APP AND WRAP BORDER
            ☑️ FONT SIZES 24, 32, 64
        ARRANGE CONTROL WRAP CONTENTS (LAYOUT, SPACING)
        ☑️ MAKE FONT FAMILY THE SAME FOR INPUT AND BUTTONS TOO (ROBOTO)
        ☑️ WORD COUNTER IS INCREMENTED AT NEW LINE WHEN SPACE IS TYPED ON LAST WORD IN LINE
        REMOVE KEY EVENT LISTENER WHEN TIMER STOPS
        ALLOW CORRECTION OF ANY CHAR IF SPACE HAS NOT BEEN CLICKED, BUT MULTIPLE RED CAHRACTERS OCCUR INTO NEXT WORD
        IF ANY KEY WAS TYPED ON SPACE, NEXT WORD WILL NOT WORK CORRECTLY (RED ON CORRECT)
            REASON: WORD COUNTER IS NOT INCREMENTED
        TIMER IS NOT WORKING PROPERLY IF START BUTTON IS CLICKED BEFORE TIME RUNS OUT
            ☑️ TEMP SOLUTION: START BUTTON IS NOW DISABLED WHILE TIMER IS ON
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
            ☑️ TIMER
            ☑️ SOUND
        THEN,
        ☑️ HIGHLIGHT START BUTTON
        ☑️ ADD ORANGE BORDER TO SPACE WHEN BACKSPACE IS USED
        STOP MOVING CURSOR WHEN LETTER CHARACTER IS TYPED INSTEAD OF SPACE AFTER WORD IS TYPED
        ☑️ ADD CURSOR TO ACTIVE LINE
        ☑️ DON'T APPEND TEXT AS SPANS TO NEXT LINE DIV, JUST DISPLAY IT AS PARAGRAPH ?
        ☑️ INCREMENT LINEIDX WHEN LAST WORD IS ALL GREEN AND SPACE IS PRESSED
        ☑️ INCREMENT LINEIDX WHEN SPACE IS PRESSED ON LAST WORD OF LINE
            INITIALISE STRIDX
        DYNAMICALLY GENERATE NEXT LINE + 1 ?
        SHOW ALL TEXT AS ONE BLOCK
*/
