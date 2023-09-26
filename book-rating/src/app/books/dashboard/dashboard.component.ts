import { JsonPipe, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';

import { BookCreateComponent } from '../book-create/book-create.component';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    JsonPipe, BookComponent, NgFor, BookCreateComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  br = inject(BookRatingService);
  bs = inject(BookStoreService);

  books: Book[] = [];

  constructor() {
    this.bs.getAllBooks().subscribe(books => this.books = books);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = { ...book, rating: Math.min(book.rating + 1, 5) };
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
