import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

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
  handleOnClick = (event) => {
    console.log(event.target.id);
    console.log(this.props);
    this.props.history.push(`/Users/${event.target.id}/posts`);
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <h3>Users</h3>
        <ul>
          {users.map((element) => {
            return (
              <li
                id={element.id}
                value={element.name}
                onClick={this.handleOnClick}
              >
                {element.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Users);
