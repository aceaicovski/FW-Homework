// Хоумворк:
// 1. Write a function to check whether input is an array or not without using isArray
// 2. Clone an array without using JSON.stringify()
// 3. Create a function that will create an array made of length elements; fill elements with their indexes
// 4. Create a function that will return last even element of the array
// 5. Write a function that will flatten an array without using flat()
// 6. Write a function to shuffle an array


//////////////////////   Exercise 1  /////////////////////////
let arr = [
    "Саша", "Vlad","Olga", "Nicolae", "Katherine", 
    "Julian", "Ecaterina", "Anna", "Ana" , "Alexandr"
    ];

let arr1 = [1, 2, 3, 5, 7, 9];

const obj = {
    name: 'Ana',
    surname: 'Ceaicovschi'
}

//function isAnArray(value) {
    //1st option
    //  if (Object.prototype.toString.call(value) === '[object Array]') {
    //     return true; 
    //  } return false;
//2nd option
//     if (value instanceof Array) {
//       return `The given value is an Array`;
//     } else {
//         return `The given value is not an Array`;
//     }
//}


// console.log(isAnArray(23));
// console.log(isAnArray('23'));
// console.log(isAnArray(arr));
// console.log(isAnArray(obj));




///////////////////////// Exercise 2 /////////////////////////
////  2. Clone an array without using JSON.stringify()////////

//function cloneArr(arr) {
    // 1st variant
    // let newArr = [...arr];
    // return newArr;
    // 2nd variant
//    let newArr = arr.slice();
//    return newArr;
//}

//console.log(cloneArr(arr));




///////////////////  Exercise 3  ////////////////////////////////
//3. Create a function that will create an array made of length elements; fill elements with their indexes///

//function lengthArray(n) {
//1st variant
//     let arr = [];   
//     for (let i = 1; i <= n; i++) {
//       arr.push(i);
//     };
//    return arr;

//2nd variant
//    return Array.from({length: n}, (_, i) => i + 1);
// }


// console.log(lengthArray(10));
// console.log(lengthArray(6));
// console.log(lengthArray(12));




///////////////////  Exercise 4  /////////////////////////////////////////
//4. Create a function that will return last even element of the array////

// function lastEvenElement(arr) {
//     return arr.reverse().find((item) => (item % 2 == 0));
// }

// console.log(lastEvenElement([1, 3, 5, 6, 7]));
// console.log(lastEvenElement(arr1));




//////////////// Exercise 5  //////////////////////////////////////////////
///5. Write a function that will flatten an array without using flat()/////

//1st option
// let newArr = arr => [].concat(...arr); ----> ///works for unidimensional arrays

//2nd option ---> works for multidimensional arrays
// function flattenArray(arr) {   
//         const store = [...arr];
//         const result = [];
//         while (store.length) {
//           const item = store.pop();
//           Array.isArray(item) ? store.push(...item) : result.push(item);
        
//         }
//         return result.reverse();
// }


// let arr2 = [1, 2, [3, [4, 4]], 5, 6];

//  console.log(flattenArray(arr2));



/////////////////////////Exercise 6 /////////////////////////////////////
// 6. Write a function to shuffle an array
//1st variant 
/* function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
 }*/

//  function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

// shuffleArray(arr);
// console.log(arr);
