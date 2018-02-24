import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users-component/users.component';
import { UsersRoutingModule }  from './users-routing.module'

import { UsersService }  from '../core/services/http/users.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  declarations: [UsersComponent]
})
export class UsersModule { }
