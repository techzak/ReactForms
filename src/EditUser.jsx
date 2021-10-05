import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Edit Details</h3>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />
      {/* <input value={email} onChange={(event) => setemail(event.target.value)} /> */}
      <br />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={phone}
        onChange={(event) => setphone(event.target.value)}
      />
      {/* <input value={phone} onChange={(event) => setphone(event.target.value)} /> */}
      <Button
        variant="contained"
        onClick={saveDetails}
        style={{ marginTop: "12px" }}
      >
        Save
      </Button>
      {/* <button onClick={saveDetails} style={{ marginTop: "12px" }}>
        Save
      </button> */}
    </div>
  );
}

export default EditUser;
