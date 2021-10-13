import {
  user_fetching,
  user_success,
  user_error,
  post_fetching,
  post_success,
  post_error,
} from "./index";
import axios from "axios";

function fetchUsers() {
  return async (dispatch) => {
    dispatch(user_fetching());
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        dispatch(user_success(response.data));
      })
      .catch(function (err) {
        // handle error
        dispatch(user_error(err));
      });
  };
}

function fetchPostByUserId(userId) {
  return async (dispatch) => {
    dispatch(post_fetching());
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        // handle success
        dispatch(post_success(response.data));
      })
      .catch(function (err) {
        // handle error
        dispatch(post_error(err));
      });
  };
}

export { fetchUsers, fetchPostByUserId };
