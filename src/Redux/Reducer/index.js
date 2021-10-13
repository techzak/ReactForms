import { combineReducers } from "redux";

import counter from "./Reducer";
import users from "./UserReducer";
import usersPosts from "./UserPostReducer";

export default combineReducers({
  counter,
  users,
  usersPosts,
});
