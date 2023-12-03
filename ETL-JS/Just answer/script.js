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

    return alphabetNumbers;
};