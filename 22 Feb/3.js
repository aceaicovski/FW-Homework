///3. Extend the default values functionality (for function parameters) to set to default not only 
//the undefined values but also the null values (but not other falsy values)

function defaultValues (a, b = 2, c = 3) {
  
    b = typeof b === 'null' ?  b : 2;
    c = typeof c === 'null' ?  c : 3;

// if (b === 'null') {
//     b = b;
//   } else {
//     b = 2;
//   }
//   if (c === 'null') {
//     c = c;
//   } else {
//     c = 2;
//   }
    return a + b + c;
}

console.log(defaultValues(1, 2, 3));
console.log(defaultValues(1));
console.log(defaultValues(3, null, null));