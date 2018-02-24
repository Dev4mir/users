import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersService }  from '../../core/services/http/users.service';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: Array<{}>;
  nextUserId: number;

  fg: FormGroup;

  subscription;

  constructor(private usersService: UsersService, private fb: FormBuilder) {
    /* Create form for add user modal */
    this.fg = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])],
      address: fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        suite: ['', Validators.required]
      })
    })
  }

  /* Getting added user data and submit it if it's valid */
  addUser($data) {
    if(this.fg.valid) {
      let id = this.nextUserId;
      $data['id'] = id;
      this.users.push($data);
      this.fg.reset();
      this.nextUserId++;
      $('#addUserModal').modal('hide');
    }
  }

  ngOnInit() {
    /* Getting users data */
    this.subscription = this.usersService.getAllUsers().subscribe(res => {
      this.users = res as [{}];

      /* Set next user id */
      this.nextUserId = this.users[this.users.length - 1]['id'] + 1;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
