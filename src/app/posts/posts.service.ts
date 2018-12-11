import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Post } from './post.model';

const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};

const BACKEND_URL = environment.apiUrl + '/posts/';

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{ posts: Post[] }>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    return this.http.get(BACKEND_URL);
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
