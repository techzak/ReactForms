import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

function UsersPostsComments() {
  const [comments, setcomments] = useState([]);

  const {
    params: { postId },
  } = useRouteMatch();
  console.log(postId);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setcomments(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [postId]);

  return (
    <div>
      <h3>Post Comments</h3>
      <ul>
        {comments.map((element) => {
          return <li id={element.id}>{element.body}</li>;
        })}
      </ul>
    </div>
  );
}

export default UsersPostsComments;
