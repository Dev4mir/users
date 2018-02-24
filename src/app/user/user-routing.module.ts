import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { UserComponent } from './user-component/user-component.component';
import { UserAlbumComponent } from './user-album/user-album.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: ':userId',
    component: MainComponent,
    children : [
      {
        path: '',
        component: UserComponent
      },
      {
        path: 'album/:albumId',
        component: UserAlbumComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: []
})
export class UserRoutingModule { }
