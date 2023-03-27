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

/*true:
    abcdefghijklmnopqrstuvwxyz
    the quick brown fox jumps over the lazy dog
    the_quick_brown_fox_jumps_over_the_lazy_dog
    the 1 quick brown fox jumps over the 2 lazy dogs
    Five quacking Zephyrs jolt my wax bed.
*/
/*false:
    " "
    a quick movement of the enemy will jeopardize five gunboats
    five boxing wizards jump quickly at it
    7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog
    the quick brown fox jumps over with lazy FX
*/

const input = document.getElementById("input");
const btn = document
    .getElementById("btn")
    .addEventListener("click", function () {
        document.getElementById("output").textContent =
            "=> " + isPangram(input.value);
        console.log(isPangram(input.value));
    });
