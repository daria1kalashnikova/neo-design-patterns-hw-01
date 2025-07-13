import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";

export class Book extends AbstractBook {
  private author: Author;

  constructor(title: string, year: number, author: Author) {
    super(title, year);
    this.author = author;
    author.addBook(this);
  }

  getAuthor(): Author {
    return this.author;
  }

  getDescription(): string {
    return `Book: ${this.title}, Year: ${
      this.year
    }, Author: ${this.author.getName()}`;
  }
}
