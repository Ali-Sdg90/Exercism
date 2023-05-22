const isLeap = (year) => {
    let isLeap = false;
    if (year % 4 === 0) isLeap = true;
    if (year % 100 === 0) isLeap = false;
    if (year % 400 === 0) isLeap = true;
    return isLeap;
};

const input = document.getElementById("input");
const btn = document
    .getElementById("btn")
    .addEventListener("click", function () {
        document.getElementById("output").textContent =
            "=> " + isLeap(input.value);
        console.log(isLeap(input.value));
    });
