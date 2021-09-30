import React, { useState } from "react";
import axios from "axios";

function NewUser() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    address: { streetName: "" },
  });
  const [loading, setloading] = useState(false);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { ...user })
      .then((response) => {
        console.log(response.data);
        setloading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setloading(false);
      });
  };
  console.log(user);
  return (
    <div>
      <h2>New User</h2>
      <form onSubmit={handleOnSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={user.name}
          onChange={(event) => setuser({ ...user, name: event.target.value })}
        />
        <br />
        <br />
        <label>Email: </label>
        <input
          type="email"
          value={user.email}
          onChange={(event) => setuser({ ...user, email: event.target.value })}
        />
        <br />
        <br />
        <label>Phone: </label>
        <input
          type="text"
          value={user.phone}
          onChange={(event) => setuser({ ...user, phone: event.target.value })}
        />
        <br />
        <br />
        <label>Username: </label>
        <input
          type="text"
          value={user.username}
          onChange={(event) =>
            setuser({ ...user, username: event.target.value })
          }
        />
        <br />
        <br />
        <h3>Address</h3>
        <label>StreetName: </label>
        <input
          type="text"
          value={user.address.streetName}
          onChange={(event) =>
            setuser({
              ...user,
              address: { ...user.address, streetName: event.target.value },
            })
          }
        />
        <br />
        <br />
        <button type="submit" disabled={loading}>
          Submit
        </button>
        {loading === true && <p>In Progress</p>}
      </form>
    </div>
  );
}

export default NewUser;
