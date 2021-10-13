export const INCREMENT = "INCREMENT";

export const DECREMENT = "DECREMENT";

export const RESET = "RESET";

export const USER_FETCHING = "USER_FETCHING";

export const USER_SUCCESS = "USER_SUCCESS";

export const USER_ERROR = "USER_ERROR";

export const POST_FETCHING = "POST_FETCHING";

export const POST_SUCCESS = "POST_SUCCESS";

export const POST_ERROR = "POST_ERROR";

export function increaseCount() {
  return { type: INCREMENT };
}

export function decreaseCount() {
  return { type: DECREMENT };
}

export function resetCount() {
  return { type: RESET };
}

export function user_fetching() {
  return { type: USER_FETCHING };
}
export function user_success(payload) {
  return { type: USER_SUCCESS, payload };
}
export function user_error() {
  return { type: USER_ERROR };
}

export function post_fetching() {
  return { type: POST_FETCHING };
}
export function post_success(payload) {
  return { type: POST_SUCCESS, payload };
}
export function post_error() {
  return { type: POST_ERROR };
}
