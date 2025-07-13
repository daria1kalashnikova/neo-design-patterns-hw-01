# Homework Assignment on the Fundamentals of Object-Oriented Programming

This task models a small system similar to those developers encounter in real-world projects. It provides hands-on experience in applying key OOP principles — encapsulation, composition, inheritance, and polymorphism — within a coherent, real-life context.

## Task Description

Implement a library model that supports the following object types: books, authors, physical copies, readers, and the library itself as an aggregator. The main goal is to design the domain model using core OOP concepts in TypeScript.

## Expected Functionality

### Main Classes:

- **`Author`** stores the author's name and a list of books they've written.
- **`Book`** implements `AbstractBook`, containing a title, publication year, and author.
- **`EBook`** implements `AbstractBook`, adding a `url`field.
- **`Copy`** contains a reference to a book and an `isAvailable`flag.
- **`Reader`** has a uniqueий `id`, a name, and a list of borrowed copies.
- **`Library`** provides methods to:
  - add books, authors, copies, and readers
  - get available copies
  - search for books by author
- **`BorrowService`** is a separate service responsible for lending a book copy to a reader:`borrow(reader: Reader, copy: Copy)`.
