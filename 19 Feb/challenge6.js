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

function getValueByPath(obj, path) {
    let propsArr = path.split('.'); 
    for (let i = 0; i < propsArr.length; i++) {
            if (obj.hasOwnProperty(propsArr[i])) {
              obj = obj[propsArr[i]];
        }
    }
 return obj;
};


const obj = {
    foo: { bar: 'baz' }
  };

  const obj1 = {
    name: 'Ana',
    surname: 'Ceaicovski',
    age: 26,
    info: {
        height: 176, 
        weight: 58,
        hobbies: {
            singing: 'songs',
            painting: 'pictures',
            dancing: 'disco'
        }
    }
}


console.log(getValueByPath(obj, 'foo.bar'));
console.log(getValueByPath(obj1, 'info.weight'));
console.log(getValueByPath(obj1, 'info.hobbies.painting'));
