import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, mergeEffects } from '@ngrx/effects';
// import { switchMap } from 'rxjs/operators';
import { Observable, pipe, of } from 'rxjs';
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR
} from '../actions/post.action.types';
import { PostsService } from '../posts/posts.service';
import { switchMap, map, catchError } from 'rxjs/operators';
// import { switchMap } from 'rxjs/operators';
// import { switchMap } from 'rxjs/operators';
// switchMap

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, public postService: PostsService) {}

  @Effect() getPosts$ = this.actions$.ofType(GET_POSTS).pipe(
    switchMap(actions =>
      this.postService.getPosts().pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: GET_POSTS_SUCCESS, payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: GET_POSTS_ERROR }))
      )
    )
  );
}
