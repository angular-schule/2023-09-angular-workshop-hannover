import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input({ required: true })
  book?: Book;

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  log() {
    console.log('CHANGE DETECTION', +new Date())
  }
}
