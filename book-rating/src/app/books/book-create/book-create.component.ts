import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
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
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    // Hands On: Forms
    // 1. Erstelle eine Event mit dem Namen `create`
    // 2. Emite das Event mit dem `newBook`
    // 3. Subscribe dich auf das Event im Dashboard
    // 4. Füge das neue Buch dem Buch-Array hinzu, beachte die Immutability

    this.bookForm.reset();
  }
}
