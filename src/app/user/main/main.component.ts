import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { UsersService }  from '../../core/services/http/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  userData: object;
  username;
  showPhotos: boolean;

  subscription;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let userId = params['userId'];
      this.chechParam();

      this.subscription = this.userService.getUserById(userId).subscribe(res => {
        this.userData = res;
        this.username = res['name'] + "'s Albums";
      }, err => {
        this.router.navigate(['/404']);
      })

    });

    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd) {
        this.chechParam();
      }
    })
  }
  chechParam() {
    let albumId = this.route.firstChild.snapshot.params['albumId'];
    if(albumId !== undefined) {
      this.showPhotos = true;
    }else {
      this.showPhotos = false;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
