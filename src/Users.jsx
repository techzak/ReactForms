import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  HandleOnClick = (event) => {
    console.log(event.target.id);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${event.target.id}`
      )
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  HandleOnPost = (event) => {
    console.log(event.target.id);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${event.target.id}`
      )
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({ comments: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    const { users, posts, comments } = this.state;
    return (
      <div>
        <h3>Users</h3>
        <ul>
          {users.map((element) => {
            return (
              <li
                id={element.id}
                value={element.name}
                onClick={this.HandleOnClick}
              >
                {element.name}
              </li>
            );
          })}
        </ul>
        <hr />
        <h3>User Posts</h3>
        <ul>
          {posts.map((element) => {
            return (
              <li id={element.id} onClick={this.HandleOnPost}>
                {element.title}
              </li>
            );
          })}
        </ul>
        <hr />
        <h3>Post Comments</h3>
        <ul>
          {comments.map((element) => {
            return (
              <li id={element.id} onClick={this.HandleOnPost}>
                {element.body}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
