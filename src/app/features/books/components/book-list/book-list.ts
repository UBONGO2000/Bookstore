import { Component, input, output, signal } from '@angular/core';
import { Book } from '../../../../shared/models/book';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
@Component({
  imports: [CurrencyPipe, MatTableModule, MatIconModule, MatButtonModule],
  selector: 'app-book-list',
  styleUrl: './book-list.scss',
  templateUrl: './book-list.html',
})
export class BookList {

 books = input<Book[]>([]);
  book = output<Book>();

  columns: string[] = ['title', 'authorName', 'genre', 'price', 'published', 'actions'];

  selectBook(book: Book) {
    this.book.emit(book);
  }

  editBook(book: Book) {
    console.log('Edit book:', book);
  }

  deleteBook(book: Book) {
    console.log('Delete book:', book);
  }
}
