// function aWithouB(objA, objB); // return object a without keys existing in object B

const objA = {
    name: 'Ana',
    surname: 'Ceaicovski',
    age: 26,
    height: 176
}

const objB = {
    age: 26,
    height: 176
}

function aWithouB(objA, objB) {
      let result = {};
      let keys = Object.keys(objB);
      for (let key in objA) {
        if (!keys.includes(key)) {
          result[key] = objA[key];
        }
      }
      return result;
    }

console.log(aWithouB(objA, objB));