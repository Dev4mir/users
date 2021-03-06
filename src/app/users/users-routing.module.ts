import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users-component/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: []
})
export class UsersRoutingModule { }
