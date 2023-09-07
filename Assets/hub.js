const tableHeaders = document.querySelectorAll(".table div");

let randHeaderColor = [];

for (let i = 0; i < 3; i++) {
    randHeaderColor.push(Math.random() * 29 + 53);
}

tableHeaders.forEach(
    (header) =>
        (header.style.background = `rgb(${randHeaderColor[0]},${randHeaderColor[1]},${randHeaderColor[2]})`)
);
