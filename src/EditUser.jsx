import React, { useState } from "react";
import axios from "axios";

function EditUser(props) {
  const { userInfo } = props.location.state;
  const [email, setemail] = useState(userInfo.email);
  const [phone, setphone] = useState(userInfo.phone);
  console.log(props);

  const saveDetails = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${userInfo.id}`, {
        email,
        phone,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Edit Details</h3>
      <label>Email: </label>
      <input value={email} onChange={(event) => setemail(event.target.value)} />
      <br />
      <label>Phone Number</label>
      <input value={phone} onChange={(event) => setphone(event.target.value)} />
      <button onClick={saveDetails}>Save</button>
    </div>
  );
}

export default EditUser;
