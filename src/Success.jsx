import React from "react";
import { withRouter } from "react-router-dom";

function Success(props) {
  console.log(props);
  return (
    <div>
      <h3>Your submission have been recieved.</h3>
      <br />
      <button onClick={() => props.history.goBack()}>Go Back</button>
      <button onClick={() => props.history.push("/")}>Go Home</button>
    </div>
  );
}

export default withRouter(Success);
