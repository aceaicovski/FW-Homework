// function isEmptyObject(obj);// make sure works when nonObject used.

// function isEmptyObject(obj) {

// };

const objA = {
    name: 'Ana',
    surname: 'Ceaicovski',
    age: 26,
    height: 176
}
const x ={};
const y = 2;

function isEmpty(obj) {
      for (var prop in obj) {
          return false;
      }
      return true;
    }

    console.log(isEmpty(objA));
    console.log(isEmpty(x));
    console.log(isEmpty(y));