package org.shush;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    public void displayBook() {
        System.out.println(bookRepository.getBookName());
    }
}