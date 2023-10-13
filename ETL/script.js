const sample = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
};

const transform = (input) => {
    const alphabetNumbers = {};

    for (let charCode = 97; charCode <= 122; charCode++) {
        const char = String.fromCharCode(charCode);
        alphabetNumbers[char] = "";
    }

    for (let i = 0; i <= 10; i++) {
        if (input[i]) {
            for (let j = 0; j < input[i].length; j++) {
                alphabetNumbers[input[i][j].toLowerCase()] = i;
            }
        }
    }

    for (let i in alphabetNumbers) {
        if (alphabetNumbers[i] === "") {
            delete alphabetNumbers[i];
        }
    }

    console.log(alphabetNumbers);
    return alphabetNumbers;
};

// console.log(transform(sample));

const answerInput = document.getElementById("input-text");

answerInput.value = JSON.stringify(sample, null, 2);

document.getElementById("form").addEventListener("submit", () => {
    document.getElementById("output").value = JSON.stringify(
        transform(JSON.parse(answerInput.value)),
        null,
        2
    );
});
