import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    let url = 'http://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }

  public getUserById($userId) {
    let url = 'http://jsonplaceholder.typicode.com/users/' + $userId
    return this.http.get(url);
  }

  public getUserAlbums($userId) {
    let url = 'http://jsonplaceholder.typicode.com/albums?userId=' + $userId;
    return this.http.get(url);
  }

  public getAlbumPhotos($albumId) {
    let url = 'http://jsonplaceholder.typicode.com/photos?albumId=' + $albumId;
    return this.http.get(url);
  }
}
