import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, NgFor } from '@angular/common';
import { BookComponent } from '../book/book.component';


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

}
