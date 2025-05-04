import { instance, mock, when } from 'ts-mockito';
import { Author } from './author';
import { Book } from './book.model';
import { Library } from './library.model';


describe('Library', () => {
  it('should create an instance', () => {
    expect(new Library()).toBeTruthy();
  });
});


/* 

Test name: FindBook1
Objetive: Check if a book is in a Library or not
Test cases: [[bookName: "El principito", author: "Antoine de Saint-Exuspéry", rating: 0.5]]
Expected output: true

*/


describe('FindBook1', () => {

  let library:Library;
  let book:Book;
  let author:Author;

  beforeEach(() => {
    library = new Library();
    author = mock<Author>();
    let mockito = instance(author);
    book = new Book('El principito', mockito, 0.5);
    library.addBook(book);
  });

  it('Should check if a book is in the library and return true', () => {
    when(author.getName()).thenReturn('Antoine de Saint-Exupéry');
    expect(library.contains(book)).toBeTruthy();
  });

});


/* 

Test name: FindBook2
Objetive: Check if a book is in a Library or not
Test cases: [[bookName: "El principito", author: "Antoine de Saint-Exuspéry", rating: 0.5]] 
Expected output: false

*/

describe('FindBook2', () => {

  let library:Library;
  let book:Book;
  let author:Author;

  beforeEach(() => {
    library = new Library();
    author = mock<Author>();
    let mockito = instance(author);
    book = new Book('El principito', mockito, 0.5);
  });

  it('Check if a book is in the library and return false', () => {
    when(author.getName()).thenReturn('Antoine de Saint-Exupéry');
    expect(library.contains(book)).toBeFalsy();
  });

});

