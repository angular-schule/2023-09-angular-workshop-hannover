import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  @Output() create = new EventEmitter<Book>();

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  isInvalid(control: FormControl): boolean {
    return control.invalid && control.touched
  }

  hasError(control: FormControl, errorCode: string) {
    return control.hasError(errorCode) && control.touched;
  }

  submitForm() {

    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    this.create.emit(newBook);
    this.bookForm.reset();
  }
}
