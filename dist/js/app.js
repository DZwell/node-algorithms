'use strict';

class Library {
    constructor(title) {
        this.title = title;
        this.shelves = [];

        this.addShelf = this.addShelf.bind(this);
        this.findIndexOfInput = this.findIndexOfInput.bind(this);
        this.removeShelf = this.removeShelf.bind(this);
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
                removeBook: this.removeBook
            });
        } else {
            console.log('A shelf with that name already exists.');
        }
    }

    findIndexOfInput(title, author) {
        return this.shelves.findIndex(element => arguments.length > 1 ?
            element.title === title && element.author === author :
            element.title === title
        );
    }

    removeBook(title, author) {
        this.books.splice(this.books.findIndex(element => element.title === title && element.author === author), 1);
    }

    removeShelf(name) {
        this.shelves.splice(this.findIndexOfInput(name), 1);
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
