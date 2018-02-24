import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { UsersService }  from '../../core/services/http/users.service';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.css']
})
export class UserAlbumComponent implements OnInit, OnDestroy {
  photos: object;

  subscription;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let albumId = params['albumId'];
      this.subscription = this.userService.getAlbumPhotos(albumId).subscribe(res => {
        this.photos = res;
      }, err => {
        this.router.navigate(['/']);
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
