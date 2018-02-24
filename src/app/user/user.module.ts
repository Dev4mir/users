import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserRoutingModule }  from './user-routing.module';

import { UsersService }  from '../core/services/http/users.service';

import { MainComponent } from './main/main.component';
import { UserComponent } from './user-component/user-component.component';
import { UserAlbumComponent } from './user-album/user-album.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ],
  providers: [UsersService],
  declarations: [UserComponent, MainComponent, UserAlbumComponent],
  exports: []
})
export class UserModule { }
