import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating = 1;
  readonly maxRating = 5;

  // optimale performance bei OnPush
  rateUp(book: Book): Book {
    if (book.rating >= this.maxRating) {
      return book;
    }

    return {
      ...book,
      rating: book.rating + 1
    }
  }


  rateDown(book: Book): Book {
    const rating =  Math.max(this.minRating, book.rating - 1);

    return {
      ...book,
      rating
    };
  }
}
