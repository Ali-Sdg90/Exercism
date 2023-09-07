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
