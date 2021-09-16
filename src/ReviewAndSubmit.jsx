import React from "react";
import { withRouter } from "react-router-dom";

function ReviewAndSubmit(props) {
  console.log(props);

  const handleOnSubmit = () => {
    props.history.push("/Success");
  };

  const values = props.location.state;

  return (
    <div>
      <div>
        <label>
          <b>Area:</b>
          {values.areas}
        </label>
      </div>
      <div>
        <label>
          <b>Size of Land:</b>
          {values.size}
        </label>
      </div>
      <div>
        <label>
          <b>Design:</b>
          {values.design}
        </label>
      </div>
      <div>
        <label>
          <b>Current Status:</b>
          {values.currentStatus}
        </label>
      </div>
      <div>
        <label>
          <b>Start Project</b>
          {values.startProject}
        </label>
      </div>
      <div>
        <label>
          <b>Budget:</b>
          {values.budget}
        </label>
      </div>
      <div>
        <label>
          <b>Total Budget(including GST):</b>
          {values.budget}
        </label>
      </div>
      <button onClick={handleOnSubmit}>Submit</button>
      <button onClick={() => props.history.goBack()}>Go Back</button>
    </div>
  );
}

export default withRouter(ReviewAndSubmit);
