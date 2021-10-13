import { USER_FETCHING, USER_SUCCESS, USER_ERROR } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  isError: false,
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_FETCHING:
      return { ...state, isFetching: true };

    case USER_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };

    case USER_ERROR:
      return { ...state, isFetching: false, isError: true };

    default:
      return state;
  }
}
