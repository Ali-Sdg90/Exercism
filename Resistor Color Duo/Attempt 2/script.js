const decodedValue = (inputColors) => {
    const colors = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9,
    };

    return colors[inputColors[0]] * 10 + colors[inputColors[1]];
};


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    document.getElementById("output").textContent = decodedValue(
        document.getElementById("input-text").value.split("-")
    );
});
