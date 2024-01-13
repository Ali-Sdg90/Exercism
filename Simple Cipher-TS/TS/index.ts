interface CipherInterface {
    encodeValue: string;
    decodeValue: string;
}

export class SimpleCipher implements CipherInterface {
    keyValue: string;
    encodeValue: string;
    decodeValue: string;

    constructor(key?: string) {
        this.keyValue = key || this.createRandomKey();
        this.encodeValue = "";
        this.decodeValue = "";
    }

    encode(input: string) {
        this.checkInput(input);

        this.encodeValue = "";
        for (let i = 0; i < input.length; i++) {
            let charCode =
                input.charAt(i).charCodeAt(0) +
                (this.keyValue.charAt(i).charCodeAt(0) - 97);

            if (charCode > 122) {
                charCode -= 26;
            }

            this.encodeValue += String.fromCharCode(charCode);
        }

        return this.encodeValue;
    }

    decode(input: string) {
        this.checkInput(input);

        this.decodeValue = "";
        for (let i = 0; i < input.length; i++) {
            let charCode =
                input.charAt(i).charCodeAt(0) -
                (this.keyValue.charAt(i).charCodeAt(0) - 97);

            if (charCode < 97) {
                charCode += 26;
            }

            this.decodeValue += String.fromCharCode(charCode);
        }

        return this.decodeValue;
    }

    checkInput(input: string) {
        if (!this.keyValue) {
            this.noKeyGiven(input.length);
        } else if (this.keyValue.length < input.length) {
            this.loopGivenKey(input.length);
        }
    }

    createRandomKey(): string {
        let key = "";
        for (let i = 0; i < 100; i++) {
            key += this.randomLetter();
        }
        return key;
    }

    randomLetter(): string {
        const i = Math.floor(Math.random() * 26);
        return String.fromCharCode(97 + i);
    }

    noKeyGiven(inputLength: number) {
        const minLength = Math.max(inputLength, 100);

        while (this.keyValue.length < minLength) {
            this.keyValue += String.fromCharCode(
                Math.trunc(Math.random() * 26) + 97
            );
        }
    }

    loopGivenKey(inputLength: number) {
        while (this.keyValue.length < inputLength) {
            this.keyValue += this.keyValue;
        }
        this.keyValue = this.keyValue.substring(0, inputLength);
    }

    get key() {
        return this.keyValue;
    }
}
