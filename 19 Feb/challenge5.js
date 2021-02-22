// function intersections(objA, objB); // object, return common keys between objA and objB

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

const objC = {
    name: 'Ana',
    surname: 'Ceaicovski',
    age: 26,
    height: 176
}
// This function doesn't work for nested objects

function aWithouB(objA, objB) {
        const obj1Length = Object.keys(objA).length; 
        const obj2Length = Object.keys(objB).length; 
  
        if (obj1Length === obj2Length) { 
            return Object.keys(objA).every( 
                key => objB.hasOwnProperty(key) 
                    && objB[key] === objA[key]); 
        } 
        return false;
}

console.log(aWithouB(objA, objB));
console.log(aWithouB(objA, objC));
console.log(aWithouB(objB, objC));