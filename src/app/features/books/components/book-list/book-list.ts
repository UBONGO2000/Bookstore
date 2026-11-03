import { Component, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-book-list',
  styleUrl: './book-list.scss',
  templateUrl: './book-list.html',
})
export class BookList {

  books = input<any[]>([]);
  book = output<any>();

  selectBook(book: any){
    this.book.emit(book);
  }



}
