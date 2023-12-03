// Author constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

// Method to get book information
Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log("---------------------");
};

// Creating instances of Author and Book
const author1 = new Author("J.K. Rowling", 1965, "British");
const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 19.99);

const author2 = new Author("George Orwell", 1903, "British");
const book2 = new Book("1984", author2, "Dystopian Fiction", 14.99);

const author3 = new Author("Harper Lee", 1926, "American");
const book3 = new Book("To Kill a Mockingbird", author3, "Fiction", 12.99);

// Displaying book details
book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
