import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

import { getPosts } from '../actions/post.actions';
import { GET_POSTS_SUCCESS } from '../actions/post.action.types';

import { Store, ActionsSubject, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  actionlistener: Subscription;

  constructor(
    private store: Store<any>,
    private actionsSubject: ActionsSubject
  ) {}

  ngOnInit() {
    this.store.dispatch(getPosts());
    this.actionlistener = this.actionsSubject
      .pipe(ofType(GET_POSTS_SUCCESS))
      .subscribe(action => {
        if (action['payload']) {
          this.posts = action['payload'];
        }
      });
  }
}
