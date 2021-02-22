// getter

// get info() {
//     return 'Hello this is' + this.name + ' I am ' + this.age;
// }

// // setter

// set addRole(role) {
//     this.roles.push(role);
// }


///function isAObject(value); // boolean, try with null


const obj = {
    name: 'Ana',
    surname: 'Ceaicovski',
    age: 26
};

const string = 'Dumitru';

function isAObject(value) {
    if (typeof value === 'object' && value !== null) {
        return 'The value is an object';
    } else {
        return 'The value is not an object';
    }
}

console.log(isAObject(obj));
console.log(isAObject(string));

// function isObject(val) {
//     if (val === null) { return false;}
//     return ( (typeof val === 'function') || (typeof val === 'object') );
// }