import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, NgFor } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    JsonPipe, BookComponent, NgFor
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  br = inject(BookRatingService);


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

  // "Alte Stil"
  // constructor(private br: BookRatingService) { }

  doRateDown(book: Book) {
    console.log('DOWN!')
    console.table(book);
  }

  doRateUp(book: Book) {
    console.log('UP!')
    console.table(book);
  }

}
