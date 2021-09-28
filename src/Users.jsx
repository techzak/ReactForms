import React from "react";
import axios from "axios";
import { Route, withRouter, Switch } from "react-router-dom";
import UsersPosts from "./UserPosts";
import ReactTile from "./Components/ReactTile";

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
    this.props.history.push(`/Users/${event.target.id}/posts`);
  };
  render() {
    console.log(this.props);
    const { users } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path={`${this.props.match.url}/:userId/posts`}
            component={UsersPosts}
          />
        </Switch>
        <Route path={`${this.props.match.url}`} exact={true}>
          <h3>Users</h3>
          <div className="user-container">
            <ul className="user-container">
              {users.map((element) => {
                return (
                  <li id={element.id} value={element.name} className="users">
                    {/* <Link to={`/Users/${element.id}/posts`}>{element.name}</Link> */}
                    <ReactTile
                      name={element.name}
                      email={element.email}
                      id={element.id}
                      onClick={this.handleOnClick}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </Route>
      </div>
    );
  }
}

export default withRouter(Users);
