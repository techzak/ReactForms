import React from "react";

function UserDetails(props) {
  console.log(props);
  const { userInfo } = props.location.state;

  const handleOnEdit = (event) => {
    props.history.push(`/Users/${userInfo.id}/edit`, { userInfo });
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
      <button onClick={handleOnEdit}>Edit</button>
    </div>
  );
}

export default UserDetails;
