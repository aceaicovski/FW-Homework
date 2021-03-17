const express = require('express');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const books = [
  {
    id: 1,
    author: 'Jane Austen',
    name: 'Pride and Prejudice',
    release: '1813',
    collection: 'Pride and Prejudice'
  },
  {
    id: 2,
    author: 'F. Scott Fitzgerald',
    name: 'The Great Gatsby',
    release: '1813',
    collection: 'The Great Gatsby',
  },
];



router.get('/books', function (req, res) {
    return res.send(books).status(200).end();
}); // shows the array books by the address localhost:3000/books

router.get('/books/:id', function (req, res){   ///to add status 404 Not found
    console.log(req.params);
    const book = books.find(function(book){
      return book.id === Number(req.params.id);
    });
    console.log({ book });
    return res.send(book).status(200).end();
});

router.post('/books', function (req, res){
  for (var i = 0; i < books.length; i++) {
    if (books[i].name === req.body.name) {
      return res.status(403).send({ error: `Such a book already exists` }).end();
    }
  };

  const book = {
    id: 0,
    author: req.body.author,
    name: req.body.name,
    release: JSON.stringify(new Date(req.body.release).getFullYear()),
    collection: req.body.collection,
  };
  
  books.push(book);
  book.id = books.indexOf(book) + 1;
  return res.send(book).status(200).end();
}); /// Works both status 200 and 400

router.put('/books/:id', function (req, res){ ///status 400 works if introduce a "string", 404 works if book id is not found within the books
  if (!Number(req.params.id) || Number(req.params.id) <= 0) {
    return res.status(400).send({ error: `${req.params.id} is not a valid id` }).end();
  };
  const book = books.find(function(book) {
    if (book.id === Number(req.params.id)) {
      book.author = req.body.author,
      book.name = req.body.name,
      book.release = JSON.stringify(new Date(req.body.release).getFullYear()),
      book.collection = req.body.collection,
      res.send(book).status(200).end();
    } else {
      return res.status(404).send({ error: `The book with id ${req.params.id} does not exist` }).end();
    }
  });
});

router.delete('/books/:id', function (req, res) {
  
  const book = books.findIndex((book) => book.id === Number(req.params.id));
  if (book === -1) {
    return res.send({ deleted: true }).status(200).end();
  }
  books.splice(book, 1);
  // book.id = books.indexOf(book) + 1;  === to try to make id's below to update
  return res.send({ deleted: true }).status(200).end();
  
});


// router.delete('/books?id[]=1&id[]=2', function (req, res) {
  
//   // const book = books.findIndex((book) => book.id === Number(req.params.id));
//   // if (book === -1) {
//   //   return res.send({ deleted: true }).status(200).end();
//   // }
//   // books.splice(book, 1);
//   // return res.send({ deleted: true }).status(200).end();
// });



app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});