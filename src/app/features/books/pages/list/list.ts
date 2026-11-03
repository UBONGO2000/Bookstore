import { Component } from '@angular/core';
import { BookList } from '../../components/book-list/book-list';

@Component({
  imports: [BookList],
  selector: 'app-list',
  styleUrl: './list.scss',
  templateUrl: './list.html',
})
export class List {

  // books = []; // depuis l'api

  // selectBook(book : any){
  //   //
  // }

  messageStatut : boolean =false;

  incresLike(newStatus : boolean){
      this.messageStatut = newStatus;
  }


}
