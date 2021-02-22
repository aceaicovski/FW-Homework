// function isEqual(objA, objB); // boolean, if objA have same values as objA

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

function isEqual(objA, objB) {
//1st
        // if (JSON.stringify(objA) === JSON.stringify(objB)) {
        //     return true;
        // } else {
        //     return false;
        // }
//2nd
        for(var key in objA){
            if(objA.hasOwnProperty(key)){
                if(objA[key] !== objB[key]){
                    return false;
                }
            }
        }
        for(var key in objB){
            if(objB.hasOwnProperty(key)){
                if(objA[key] !== objB[key]){
                    return false;
                }
            }
        }
        return true;
    
};

console.log(isEqual(objA, objB));
console.log(isEqual(objB, objC));
console.log(isEqual(objA, objC));