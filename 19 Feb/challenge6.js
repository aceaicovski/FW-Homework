//function getValueByPath(obj, path); // any, obj by the path from the given obj
// Принимает 2 параметра:
//Path -> путь до нужного там значение к примеру info.name таком случае функция должна 
// проверить если у нашего obj  есть ключ info и в нем ключ name , 
// то мы возвращаем значение из этого ключа. (Вложенность может мыть любая к примеру info.data.roles[2])

<<<<<<< HEAD:19 Feb/challenge6.js
=======
// function getValueByPath(obj, path) {

//     for ( let path in obj) {
//         if ( obj.hasOwnProperty(path)) {

//     }}
// };

>>>>>>> ee94452d52974b4aa874cfd2c875084b603b5fac:challenge6.js

const obj = {
    foo: { bar: 'baz' }
  };

const obj1 = {
    name: 'Ana',
    surname: 'Ceaicovski',
    age: 26,
    parameters: {height: 176, weight: 58}
}

function getValueByPath(obj, path) {
    let parts = path.split(".");
    if (parts.length == 1){
        return obj[parts[0]];
    }
    return getValueByPath(obj[parts[0]], parts.slice(1).join("."));
}

<<<<<<< HEAD:19 Feb/challenge6.js
console.log(getValueByPath(obj, 'foo.bar'));
console.log(getValueByPath(obj1, 'parameters.weight'));
console.log(getValueByPath(obj1, 'parameters.height'));
=======
console.log(recLookup(obj, 'foo.bar'));
console.log(recLookup(obj1, 'parameters.weight'));
console.log(recLookup(obj1, 'parameters.height'));
>>>>>>> ee94452d52974b4aa874cfd2c875084b603b5fac:challenge6.js
