import React from "react";
import axios from "axios";
import { Route, withRouter, Switch } from "react-router-dom";
import UsersPosts from "./UserPosts";
import ReactTile from "./Components/ReactTile";
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";
import NewUser from "./NewUser";
import IconButton from "@mui/material/IconButton";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { grey } from "@mui/material/colors";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      comments: [],
      view: "grid",
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
    const { users, view } = this.state;
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AppBar position="sticky">
              <Toolbar>
                <h3 style={{ marginRight: "12px" }}>Users</h3>
                <IconButton
                  aria-label="Grid"
                  sx={{ color: grey[50] }}
                  onClick={() => this.setState({ view: "grid" })}
                  style={{ height: "30px" }}
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  aria-label="Grid"
                  sx={{ color: grey[50] }}
                  onClick={() => this.setState({ view: "table" })}
                  style={{ height: "30px" }}
                >
                  <ListIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>
          {view === "grid" && (
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
          )}
          {view === "table" && (
            <div>
              <table>
                <tr>
                  <th style={{ textAlign: "left" }}>Name</th>
                  <th style={{ textAlign: "left" }}>Email</th>
                  <th style={{ textAlign: "left" }}>More</th>
                  <th style={{ textAlign: "left" }}>Details</th>
                </tr>
                {users.map((element) => {
                  return (
                    <tr id={element.id} key={element.id} value={element.name}>
                      {/* <Link to={`/Users/${element.id}/posts`}>{element.name}</Link> */}

                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>
                        <button onClick={this.handleOnClick} id={element.id}>
                          More
                        </button>
                      </td>
                      <td>
                        <button onClick={this.handleOnDetails} id={element.id}>
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )}
          <button onClick={this.handleNewUser}>Create User</button>
        </Route>
      </div>
    );
  }
}

export default withRouter(Users);
