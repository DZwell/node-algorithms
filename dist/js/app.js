'use strict';

class Library {
    constructor(title) {
        this.title = title;
        this.shelves = [];

        console.log(this);

        this.addShelf = this.addShelf.bind(this);
        this.findIndexOfInput = this.findIndexOfInput.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    addBook(title, author) {
        this.books.push({
            title,
            author
        });
    }

    addShelf(title) {
        if (this.findIndexOfInput(title) === -1) {
            this.shelves.push({
                title,
                books: [],
                addBook: this.addBook,
                removeBook: this.removeElement
            });
        } else {
            const error = 'A shelf with that name already exists.';

            console.log(error);
            return error;
        }
    }

    // very flawed– just searching shelves
    findIndexOfInput(title, author) {
        const objectType = arguments.length > 1 : 'books' ? 'shelves';


        return this.shelves.findIndex(element => arguments.length > 1 ?
            element.title === title && element.author === author :
            element.title === title
        );
    }

    findShelf(title) {
        return this.shelves[this.findIndexOfInput(title)];
    }

    removeElement(title, author) {
        const objectContainer = arguments.length > 1 ? 'books' : 'shelves';
        this[objectContainer].splice(this.findIndexOfInput, 1);
    }
}

const newLibrary = new Library('Mike\'s Library');

function initLibrary() {
    newLibrary.addShelf('Horror');
    newLibrary.shelves[0].addBook('Test Book', 'Jimmy Jim');
    newLibrary.shelves[0].addBook('Test Book', 'Johnny Jim');
    console.log(newLibrary);
}

initLibrary();

// stringify
function stringifyInput(input) {
    if (typeof input === 'String') {
        console.log(input);
    }

    if (isNaN(input) || typeof input === 'number' || typeof input === 'boolean' || input === null) {
        console.log(`${input}`);
    }

    if (input === null) {
        console.log(`${null}`);
    }

    if (typeof input === Object) {
        console.log('uh oh');
    }

    if (Array.isArray(input)) {

    }
}

stringifyInput({});
