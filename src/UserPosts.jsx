import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch, useHistory, Route } from "react-router-dom";
import UsersPostsComments from "./UserPostsComments";

function UsersPosts() {
  const [posts, setposts] = useState([]);
  const {
    params: { userId },
  } = useRouteMatch();
  console.log(userId);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setposts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [userId]);
  const handleOnClick = (event) => {
    console.log(event.target.id);
    history.push(`/Users/${userId}/posts/${event.target.id}/comments`);
  };
  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((element) => {
          return (
            <li id={element.id} onClick={handleOnClick}>
              {element.title}
            </li>
          );
        })}
      </ul>
      <Route
        path="/Users/:userId/posts/:postId/comments"
        exact={true}
        component={UsersPostsComments}
      />
    </div>
  );
}

export default UsersPosts;
