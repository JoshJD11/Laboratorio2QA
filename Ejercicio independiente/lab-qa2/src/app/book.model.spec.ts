import { mock, instance, when } from 'ts-mockito';
import { Author } from './author';
import { Book } from './book.model';

describe('Book', () => { 
  let author: Author

  beforeEach (() => {
    author = mock<Author>();
  });

  it('should create an instance', () => {
    let mockito = instance(author);
    expect(new Book('Titulo1', mockito , 0.5)).toBeTruthy();
  });
});


/* 

Test name: Equal Books
Objetive: Check if two books are equal or not
Test cases: [[author: "Antoine de Saint-Exupéry", book1: {"El principito", 0.5}, book2: {"El principito", 0.5}]] 
Expected output: true

*/


describe('Equal Books', () => {

  let author:Author;
  let book1:Book;
  let book2:Book;

  beforeEach(() => {
    author = mock<Author>();
    book1 = new Book('El principito', author, 0.5);
    book2 = new Book('El principito', author, 0.5);
  });

  it('Should check if two books are equal and return true', () => {
    when(author.getName()).thenReturn('Antoine de Saint-Exupéry');
    expect(book1.equals(book2)).toBeTruthy();

  });
});


/* 

Test name: Not Equal Books
Objetive: Check if two books are equal or not
Test cases: [[author: "Antoine de Saint-Exupéry", book1: {"El principito", 0.5}, book2: {"Ciudadela", 0.3}]] 
Expected output: false

*/


describe('Not Equal Books', () => {

  let author:Author;
  let book1:Book;
  let book2:Book;

  beforeEach(() => {
    author = mock<Author>();
    let mockito = instance(author);
    book1 = new Book('El principito', mockito, 0.5);
    book2 = new Book('Ciudadela', mockito, 0.3);
  });

  it('Should check if two books are equal and return false', () => {
    when(author.getName()).thenReturn('Antoine de Saint-Exupéry');
    expect(book1.equals(book2)).toBeFalsy();

  })
});

