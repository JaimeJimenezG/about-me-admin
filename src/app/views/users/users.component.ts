import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderColumn, TableComponent } from 'src/app/components/table/table.component';
import { UserService } from 'src/app/services/user.service';
import { DialogModule } from 'primeng/dialog';
import { UserModalCreatorComponent } from './user-modal-creator/user-modal-creator.component';

@Component({
  standalone: true,
  imports: [CommonModule, TableComponent, DialogModule, UserModalCreatorComponent],
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userModalCreatorVisible: boolean = false;
  userTableCols: HeaderColumn[] = [
    { key: 'id', header: 'ID' },
    { key: 'user_name', header: 'User Name' },
    { key: 'name', header: 'Name' },
    { key: 'last_name', header: 'Last Name' },
    { key: 'email', header: 'Email' },
    { key: 'password', header: 'Password' },
    { key: 'active', header: 'Active' },
    { key: 'created_at', header: 'Created At' },
    { key: 'updated_at', header: 'Updated At' }
  ];

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  showDialog() {
    this.userModalCreatorVisible = true;
  }
}
