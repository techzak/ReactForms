import React from "react";

function Radio(props) {
  return (
    <React.Fragment>
      <input
        type="radio"
        id={props.label}
        name="areas"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label>{props.label}</label>
    </React.Fragment>
  );
}

export default Radio;
