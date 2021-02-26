

const starWarsApiUrl = 'https://swapi.dev/api/people';

const getStarWarsPeople = (cb) => {
  fetch(starWarsApiUrl)
  .then(res => res.json())
  .then(cb); ///=> console.log(cb))  --- also shows in console the object from APIgit status;
}


const output = document.querySelector('#info');

getStarWarsPeople((res) => {
  //console.log(res);
  const firstPerson = res.results[0].name;
  const totalNumber = res.results.length;

  output.innerHTML = `The total number of persons: ${totalNumber} <br/> The name of the first person on the list: ${firstPerson}`;
});