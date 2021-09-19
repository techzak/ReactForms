import React from "react";

function Radio(props) {
  if (!props.onChange) {
    throw new Error("You forgot to pass OnChange");
  }
  return (
    <React.Fragment>
      <input
        type="radio"
        id={props.label}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label>{props.label}</label>
    </React.Fragment>
  );
}

export default Radio;
