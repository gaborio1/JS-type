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
