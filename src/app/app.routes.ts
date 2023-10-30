import { Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: 'users', pathMatch: 'full' }
];
