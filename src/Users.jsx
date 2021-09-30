import React from "react";
import axios from "axios";
import { Route, withRouter, Switch } from "react-router-dom";
import UsersPosts from "./UserPosts";
import ReactTile from "./Components/ReactTile";
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";
import NewUser from "./NewUser";

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

  handleOnDetails = (event) => {
    const userInfo = this.state.users.find(
      (element) => element.id === Number(event.target.id)
    );
    this.props.history.push(`/Users/${event.target.id}/details`, {
      userInfo,
    });
  };

  handleNewUser = (event) => {
    this.props.history.push(`/Users/NewUser`);
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
          <Route
            path={`${this.props.match.url}/:userId/details`}
            component={UserDetails}
          />
          <Route
            path={`${this.props.match.url}/:userId/edit`}
            component={EditUser}
          />
          <Route path={`${this.props.match.url}/NewUser`} component={NewUser} />
        </Switch>
        <Route path={`${this.props.match.url}`} exact={true}>
          <h3>Users</h3>
          <div className="users">
            <ul className="user-list">
              {users.map((element) => {
                return (
                  <li id={element.id} value={element.name}>
                    {/* <Link to={`/Users/${element.id}/posts`}>{element.name}</Link> */}
                    <ReactTile
                      name={element.name}
                      email={element.email}
                      id={element.id}
                      onClick={this.handleOnClick}
                      handleDetails={this.handleOnDetails}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <button onClick={this.handleNewUser}>Create User</button>
        </Route>
      </div>
    );
  }
}

export default withRouter(Users);
