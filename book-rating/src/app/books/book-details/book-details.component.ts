/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  bs = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn')!),
    mergeMap(isbn => this.bs.getSingleBook(isbn))
  );
}

export default BookDetailsComponent;
