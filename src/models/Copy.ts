import { Book } from "./Book";

export class Copy {
  private book: Book;
  private isAvailable: boolean = true;

  constructor(book: Book) {
    this.book = book;
  }

  getBook(): Book {
    return this.book;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  setAvailable(available: boolean): void {
    this.isAvailable = available;
  }
}
