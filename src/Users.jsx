import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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

  render() {
    const { users } = this.state;
    return (
      <div>
        <ul>
          {users.map((element) => {
            return (
              <li id={element.id} value={element.name}>
                {element.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
