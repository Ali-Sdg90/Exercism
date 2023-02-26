export const decodedValue = (inputColors) => {
    const colors = [
        "black",
        "brown",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet",
        "grey",
        "white",
    ];

    let output = "";
    for (let inputColor = 0; inputColor < 2; inputColor++) {
        for (let colorNumber in colors) {
            if (colors[colorNumber] === inputColors[inputColor]) {
                output += colorNumber;
                break;
            }
        }
    }
    return Number(output);
};
