import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { UsersService }  from '../../core/services/http/users.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  userAlbums: object;

  subscription;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let userId = params['userId'];

      this.subscription = this.userService.getUserAlbums(userId).subscribe(res => {
        this.userAlbums = res;
      }, err => {
        this.router.navigate(['/']);
      });
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
