import * as types from '../actions/post.action.types';

const initialState = {
  id: '',
  title: '',
  content: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      // console.log(action.payload);
      return { ...state, state: action.payload };

    case types.GET_POSTS_SUCCESS:
      console.log(action.payload);
      return { ...state, state: action.payload };
    default:
      /* code */
      break;
  }
  console.log(state);
  return state;
};
