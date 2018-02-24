import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule  } from './core-routing.module';

import { UsersService }  from './services/http/users.service';

import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  providers: [UsersService],
  exports: [
    RouterModule,
    NavbarComponent
  ]
})
export class CoreModule { }
