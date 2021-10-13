import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/actions/userActionCreator";
import Users from "../Components/Users";
import { useHistory } from "react-router-dom";

function UserContainer() {
  let history = useHistory();
  const dispatchAPI = useDispatch();
  const data = useSelector((state) => state.users.data);
  useEffect(() => {
    dispatchAPI(fetchUsers());
  });
  const HandleOnPost = (event) => {
    history.push(`/Users/${event.target.id}/posts`);
  };
  return (
    <div>
      <Users details={data} onClick={HandleOnPost} />
    </div>
  );
}

export default UserContainer;
