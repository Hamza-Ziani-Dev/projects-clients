import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsersRoutingModule } from './crud-users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CrudUsersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CrudUsersModule { }
