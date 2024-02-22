const arrOfNums = [1, 5, 100, 10, 3];

console.log(
    // Calculate sum:
    arrOfNums.reduce((prev, currValue, currI, arr) => {
        return prev + currValue;
    }, 0)
);
