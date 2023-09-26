import { Routes } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const BOOK_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: ':isbn', component: BookDetailsComponent },
];

export default BOOK_ROUTES;
