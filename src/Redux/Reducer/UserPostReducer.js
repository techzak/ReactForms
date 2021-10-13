import { POST_FETCHING, POST_SUCCESS, POST_ERROR } from "../actions";

const INITIAL_STATE = {
  post: [],
};

export default function usersPosts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_FETCHING:
      return { ...state, isFetching: true };

    case POST_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };

    case POST_ERROR:
      return { ...state, isFetching: false, isError: true };

    default:
      return state;
  }
}
