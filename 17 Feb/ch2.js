// function findMin(arrayOfNumbers)
// 	Gasiti cel mai mic nr dintr-un masiv M de numere

const arr = [0, 1, 12, 36, 4, 5428, 57, 6 ,27, 8, 9, 110];

//First variant
function findMin (arr) {
    let min = arr[0];
    arr.forEach((el, i) => {
        if (arr[i] > min) {
            max = arr[i];
        }
    });
    console.log(min);
}

findMin(arr);

//Second variant
console.log(Math.min(...arr));