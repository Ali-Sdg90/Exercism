class Cipher {
    constructor(key = "") {
        this.keyValue = key;
        this.encodeValue = "";
        this.decodeValue = "";
    }

    encode(input) {
        if (!this.keyValue) {
            this.noKeyGiven(input.length);
        } else if (this.keyValue.length < input.length) {
            this.loopGivenKey(input.length);
        }

        this.encodeValue = "";
        for (let i = 0; i < input.length; i++) {
            let charCode =
                input.charAt(i).charCodeAt(0) +
                (this.key.charAt(i).charCodeAt(0) - 97);

            if (charCode > 122) {
                charCode -= 26;
            }

            this.encodeValue += String.fromCharCode(charCode);
        }

        return this.encodeValue;
    }

    decode(input) {
        if (!this.keyValue) {
            this.noKeyGiven(input.length);
        } else if (this.keyValue.length < input.length) {
            this.loopGivenKey(input.length);
        }

        this.decodeValue = "";
        for (let i = 0; i < input.length; i++) {
            let charCode =
                input.charAt(i).charCodeAt(0) -
                (this.key.charAt(i).charCodeAt(0) - 97);

            if (charCode < 97) {
                charCode += 26;
            }

            this.decodeValue += String.fromCharCode(charCode);
        }

        return this.decodeValue;
    }

    noKeyGiven(inputLength) {
        // console.log("noKeyGiven");

        for (let i = 0; i < inputLength; i++) {
            this.keyValue += String.fromCharCode(
                Math.trunc(Math.random() * 26) + 97
            );
        }
    }

    loopGivenKey(inputLength) {
        // console.log("loopGivenKey");

        const loopNumber = inputLength / this.keyValue.length;
        for (let i = 0; i < loopNumber; i++) {
            this.keyValue += this.keyValue;
        }
    }

    get key() {
        return this.keyValue;
    }
}

// Tests:

const cipher3 = new Cipher();
console.log(cipher3.encode("aaaaaaaaaa") === cipher3.key.substring(0, 10));
console.log(cipher3.decode(cipher3.key.substring(0, 10)) === "aaaaaaaaaa");
const plaintext2 = "abcdefghij";
console.log(cipher3.decode(cipher3.encode(plaintext2)) === plaintext2);

const key2 = "abcdefghij";
const cipher4 = new Cipher(key2);
console.log(cipher4.encode("aaaaaaaaaa") === "abcdefghij");
console.log(cipher4.decode("abcdefghij") === "aaaaaaaaaa");
console.log(cipher4.decode(cipher4.encode("abcdefghij")) === "abcdefghij");
console.log(
    new Cipher("iamapandabear").encode("iamapandabear") === "qayaeaagaciai"
);
console.log(cipher4.encode("zzzzzzzzzz") === "zabcdefghi");
console.log(cipher4.decode("zabcdefghi") === "zzzzzzzzzz");
console.log(new Cipher("abc").encode("iamapandabear") === "iboaqcnecbfcr");
console.log(new Cipher("abc").decode("iboaqcnecbfcr") === "iamapandabear");

// Showcase:

const input = document.getElementById("input-text");
const output = document.getElementById("output");
const submitBtn = document.getElementById("btn");

let test = [];

input.value = `
    const cipher1 = new Cipher();
    test[0] = cipher1.encode("aaaaaaaaaa") === cipher1.key.substring(0, 10);
    test[1] = cipher1.decode(cipher1.key.substring(0, 10)) === "aaaaaaaaaa";
    const plaintext = "abcdefghij";
    test[2] = cipher1.decode(cipher1.encode(plaintext)) === plaintext;

    const key = "abcdefghij";
    const cipher2 = new Cipher(key);
    test[3] = cipher2.encode("aaaaaaaaaa") === "abcdefghij";
    test[4] = cipher2.decode(cipher2.encode("abcdefghij")) === "abcdefghij";
    test[5] =
        new Cipher("iamapandabear").encode("iamapandabear") === "qayaeaagaciai";
    test[6] = cipher2.encode("zzzzzzzzzz") === "zabcdefghi";
    test[7] = cipher2.decode("zabcdefghi") === "zzzzzzzzzz";
    test[8] = new Cipher("abc").encode("iamapandabear") === "iboaqcnecbfcr";
    test[9] = new Cipher("abc").decode("iboaqcnecbfcr") === "iamapandabear";
`;

eval(input.value);

for (let i = 0; i < test.length; i++) {
    output.value += `test[${i}] = ${test[i]}\n`;
}

submitBtn.addEventListener("click", () => {
    test = [];

    try {
        eval(input.value);
        output.value = "";
    } catch (error) {
        output.value = error;
        console.error(error);
    }

    for (let i = 0; i < test.length; i++) {
        output.value += `test[${i}] = ${test[i]}\n`;
    }
});
