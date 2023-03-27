const isPangram = (sentence) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    sentence = sentence.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < sentence.length; j++) {
            if (sentence.charAt(j) == alphabet.charAt(i)) {
                alphabet = alphabet.replace(alphabet.charAt(i), "-");
            }
        }
    }
    if (alphabet == "--------------------------") {
        return true;
    } else {
        return false;
    }
};