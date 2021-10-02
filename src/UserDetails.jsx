import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";

function UserDetails(props) {
  console.log(props);
  const { userInfo } = props.location.state;

  const handleOnEdit = (event) => {
    props.history.push(`/Users/${userInfo.id}/edit`, { userInfo });
  };

  const handleOnDelete = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userInfo.id}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div>
      <h3>User Details</h3>
      <h5>Name: {userInfo.name}</h5>
      <h5>Email: {userInfo.email}</h5>
      <h5>Phone Number: {userInfo.phone}</h5>
      <h5>User Name: {userInfo.username}</h5>
      <h5>Website: {userInfo.website}</h5>
      <h5>City: {userInfo.address.city}</h5>
      <h5>Street Name: {userInfo.address.street}</h5>
      <h5>Suite: {userInfo.address.suite}</h5>
      <h5>Zip Code: {userInfo.address.zipcode}</h5>
      <h5>Company Name: {userInfo.company.name}</h5>
      <h5>Company Catch Phrase: {userInfo.company.catchPhrase}</h5>
      <h5>Company BS: {userInfo.company.bs}</h5>
      <button onClick={handleOnEdit} style={{ marginRight: "12px" }}>
        <FontAwesomeIcon icon={faUserEdit} />
        <span style={{ marginLeft: "6px" }}>Edit</span>
      </button>
      <button onClick={handleOnDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
        <span style={{ marginLeft: "6px" }}>Delete User</span>
      </button>
    </div>
  );
}

export default UserDetails;
