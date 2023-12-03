interface SampleType {
    [key: number]: string[];
}

interface OutputType {
    [key: string]: number;
}

const sample: SampleType = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
};

const transform = (input: SampleType) => {
    const alphabetNumbers: OutputType = {};

    for (let charCode = 97; charCode <= 122; charCode++) {
        const char = String.fromCharCode(charCode);
        alphabetNumbers[char] = 0;
    }

    for (let i = 0; i <= 10; i++) {
        if (input[i]) {
            for (let j = 0; j < input[i].length; j++) {
                alphabetNumbers[input[i][j].toLowerCase()] = i;
            }
        }
    }

    for (let i in alphabetNumbers) {
        if (alphabetNumbers[i] === 0) {
            delete alphabetNumbers[i];
        }
    }

    console.log(alphabetNumbers);
    return alphabetNumbers;
};

// console.log(transform(sample));

const answerInput: HTMLInputElement | null = document.getElementById(
    "input-text"
) as HTMLInputElement;
const output: HTMLInputElement | null = document.getElementById(
    "output"
) as HTMLInputElement;
const form: HTMLElement | null = document.getElementById("form");

answerInput.value = JSON.stringify(sample, null, 2);

if (form) {
    form.addEventListener("submit", () => {
        output.value = JSON.stringify(
            transform(JSON.parse(answerInput.value)),
            null,
            2
        );
    });
}
