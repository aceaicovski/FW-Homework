class Book {

    constructor (title, genre, author, isRead, date) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead || false;
        this.finishedReading = new Date(date);
    }
}


class BookList {
    readBooks = 0;
    unreadBooks = 0;
    nextBook = {};
    currentBook = {};
    lastBook = {};
    listOfAllBooks = [];
    
    
    // constructor () {
    //     this.readBooks = 0;
    //     this.unreadBooks = 0;
    //     this.nextBook = {};
    //     this.currentBook = {};
    //     this.lastBook = {};
    //     this.listOfAllBooks = [];
    // }

    add(...books) {
        this.listOfAllBooks.push(...books);
        for(let i = 0; i < this.listOfAllBooks.length; i++) {
            if (this.listOfAllBooks[i].isRead === true) {
                this.readBooks++;
            } else {
                this.unreadBooks++;
            }
        }
    }

    finishCurrentBook() {
            //We're going to have to modify the state of this thing pretty heavily.
        for (let i = 0; i < this.listOfAllBooks.length; i++){
            if (this.listOfAllBooks[i]) {
                this.listOfAllBooks[i].isRead = true;
                this.listOfAllBooks[i].finishedReading = new Date(Date.now());
                this.currentBook = this.listOfAllBooks[i];
                this.nextBook = this.listOfAllBooks[i + 1];
                for (let j = 0; j < this.listOfAllBooks.length; j++) {
                    if (this.listOfAllBooks[j].isRead === false) {
                        this.lastBook = this.currentBook;
                        // this.nextBook = this.listOfAllBooks[j];
                    }  
                    

                } 
                this.unreadBooks--;  
                this.readBooks++;
                break;
            }
             
        }
        
    }

    reorder() {
        let last = this.listOfAllBooks.shift(this.lastBook);
        this.listOfAllBooks.push(last); 
    }
}

const summerBookList = new BookList();

const book1 = new Book('To Kill a Mockingbird', 'Novel', 'Harper Lee', false, undefined);
const book2 = new Book('The Great Gatsby', 'Novel', 'F. Scott Fitzgerald', false, undefined);
const book3 = new Book('Gone with the Wind', 'Historical Fiction', 'Margaret Mitchell', false, undefined);
const book4 = new Book('Lord of the Flies', 'Allegorical Novel', 'William Golding', false, undefined);
const book5 = new Book('The Lion, the Witch and the Wardrobe (Chronicles of Narnia, #1)', 'Fantasy', 'C.S. Lewis', false, undefined);
// console.log(book1);


summerBookList.add(book1, book2, book3, book4, book5);


summerBookList.finishCurrentBook();
summerBookList.reorder();
console.log(summerBookList);

summerBookList.finishCurrentBook();
summerBookList.reorder();
console.log(summerBookList);


summerBookList.finishCurrentBook();
summerBookList.reorder();
console.log(summerBookList);


summerBookList.finishCurrentBook();
summerBookList.reorder();
console.log(summerBookList);

summerBookList.finishCurrentBook();
summerBookList.reorder();
console.log(summerBookList);



