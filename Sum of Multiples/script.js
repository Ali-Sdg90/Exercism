const sum = (arr, limit) => {
    let uniqueNumArray = [];
    let sumUniqueNumArray = 0;

    for (let i = 0; i < arr.length; i++) {
        // console.log("=>", arr[i]);
        if (0 !== arr[i]) {
            for (let j = 1; arr[i] * j < limit; j++) {
                let pNumber = arr[i] * j;

                if (!uniqueNumArray.includes(pNumber)) {
                    uniqueNumArray.push(pNumber);
                    sumUniqueNumArray += pNumber;
                    // console.log(pNumber);
                }
            }
        }
    }

    return sumUniqueNumArray;
};

console.log(sum([3, 5], 20) === 78);
console.log(sum([2, 3, 5, 7, 11], 10000) === 39614537);
console.log(sum([0], 1) === 0);

const input = document.getElementById("input-text");
document.getElementById("btn").addEventListener("click", function () {
    // console.log(
    //     JSON.parse(`[${input.value}]`)[0],
    //     JSON.parse(`[${input.value}]`)[1]
    // );
    
    document.getElementById("output").textContent =
        "=> " +
        sum(
            JSON.parse(`[${input.value}]`)[0],
            JSON.parse(`[${input.value}]`)[1]
        );
});
