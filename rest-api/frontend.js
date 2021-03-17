const book1 = {
    author: 'Harper Lee',
    name: 'To Kill a Mockingbird',
    release: '1960',
    collection: 'To Kill a Mockingbird',
};

const book2 = {
    author: 'Margaret Mitchell',
    name: 'Gone with the Wind',
    release: '1936',
    collection: 'Gone with the Wind',
};

const book3 = {
    author: 'William Golding',
    name: 'Lord of the Flies',
    release: '1954',
    collection: 'Lord of the Flies',
}

const book4 = {
    author: 'Chris Whitaker',
    name: 'We Begin at the End',
    release: '2021',
    collection: 'We Begin at the End',
}

const book5 = {
    author: 'Imbolo Mbue',
    name: 'How Beautiful We Were: A Novel',
    release: '2021',
    collection: 'How Beautiful We Were: A Novel',
};
function getBooks () {fetch ("http://localhost:3000/books", {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));

};

function addBook (book) { fetch ("http://localhost:3000/books", {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

function changeBook (book, id) {fetch (`http://localhost:3000/books/${id}`, {
    method: 'PUT',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

function removeBook (id) {fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
};



addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);
addBook(book5);

getBooks();

removeBook(2);
changeBook(book2, 1);




