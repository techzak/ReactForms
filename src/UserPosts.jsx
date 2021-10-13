import React, { useEffect } from "react";
import { useRouteMatch, Route, Link, Switch } from "react-router-dom";
import UsersPostsComments from "./UserPostsComments";
import { fetchPostByUserId } from "./Redux/actions/userActionCreator";
import { useDispatch, useSelector } from "react-redux";

function UsersPosts(props) {
  const dispatchAPI = useDispatch();
  const posts = useSelector((state) => state.userPosts.post);
  // const [posts, setposts] = useState([]);
  const {
    params: { userId },
  } = useRouteMatch();
  console.log(userId);
  // const history = useHistory();

  useEffect(() => {
    dispatchAPI(fetchPostByUserId(userId));
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    //   .then((response) => {
    //     // handle success
    //     console.log(response.data);
    //     setposts(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  }, [userId]);

  // const handleOnClick = (event) => {
  //   console.log(event.target.id);
  //   history.push(`/Users/${userId}/posts/${event.target.id}/comments`);
  // };
  console.log(props.match);
  return (
    <div>
      <Switch>
        <Route
          path={`${props.match.url}/:postId/comments`}
          component={UsersPostsComments}
        />
      </Switch>
      <Route path={`${props.match.url}`} exact={true}>
        <h3>User Posts</h3>
        <ul>
          {posts.map((element) => {
            return (
              <li id={element.id}>
                <Link to={`/Users/${userId}/posts/${element.id}/comments`}>
                  {element.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button onClick={() => props.history.goBack()}>Back</button>
      </Route>
    </div>
  );
}

export default UsersPosts;
