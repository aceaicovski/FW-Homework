/// 2. Write a function that receives a random nr of string arguments and 
//returns a story generated with the help of these arguments and other custom text.


function myStory(...args) {
    let components = Array.prototype.slice.call(args);
    return components.join(" ");
  }

  console.log(myStory('Hello', 'World!!!', 'My', 'name', 'is', 'Ana.'));

  