// function findMax(arrayOfNumbers)
// 	Gasiti cel mai mare nr dintr-un masiv M de numere

const arr = [1, 12, 36, 4, 5428, 57, 6 ,27, 8, 9, 110];

//First variant
function findMax (arr) {
    let max = arr[0];
    arr.forEach((el, i) => {
        if (arr[i] > max) {
            max = arr[i];
        }
    });
    console.log(max);
}

findMax(arr);

//Second variant
console.log(Math.max(...arr));