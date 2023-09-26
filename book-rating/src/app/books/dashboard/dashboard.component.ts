import { JsonPipe, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';

import { BookCreateComponent } from '../book-create/book-create.component';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';


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
  cd = inject(ChangeDetectorRef);

  constructor() {
    // setTimeout(() => {
    //   this.books = [];
    //   this.cd.detectChanges(); // in purer Verzweiflung!!
    // }, 3000)
  }

  books: Book[] = [
    {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    },
    {
      isbn: '111',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    },
    {
      isbn: '222',
      title: 'jQuery',
      description: 'Veraltetes Buch',
      rating: 1
    }
  ];

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
