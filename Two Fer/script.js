const twoFer = (name) => {
    if (name) {
        return `One for ${name}, one for me.`;
    } else {
        return "One for you, one for me.";
    }
};

const input = document.getElementById("input-text");
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("output").textContent = "=> " + twoFer(input.value);
    console.log(twoFer(input.value));
});
