import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BookList } from './features/books/components/book-list/book-list';
import { List } from './features/books/pages/list/list';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';

@Component({
  imports: [RouterOutlet, FormsModule, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Bookstore');
  isDisplay = true;

}
