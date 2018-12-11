import { GET_POSTS } from './post.action.types';

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: null
  };
}
