import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', loadChildren: () => import('./books/book.routes') }
  // { path: '**', component: NotFoundComponent }
];
