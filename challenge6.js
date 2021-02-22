//function getValueByPath(obj, path); // any, obj by the path from the given obj
// Принимает 2 параметра:
//Path -> путь до нужного там значение к примеру info.name таком случае функция должна 
// проверить если у нашего obj  есть ключ info и в нем ключ name , 
// то мы возвращаем значение из этого ключа. (Вложенность может мыть любая к примеру info.data.roles[2])

// function getValueByPath(obj, path) {

//     for ( let path in obj) {
//         if ( obj.hasOwnProperty(path)) {

//     }}
// };


const obj = {
    foo: { bar: 'baz' }
  };

const obj1 = {
    name: 'Ana',
    surname: 'Ceaicovski',
    age: 26,
    parameters: {height: 176, weight: 58}
}

function recLookup(obj, path) {
    let parts = path.split(".");
    if (parts.length==1){
        return obj[parts[0]];
    }
    return recLookup(obj[parts[0]], parts.slice(1).join("."));
}

console.log(recLookup(obj, 'foo.bar'));
console.log(recLookup(obj1, 'parameters.weight'));
console.log(recLookup(obj1, 'parameters.height'));
