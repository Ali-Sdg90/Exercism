export class Cipher {
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
