import React from "react";

function FieldLabelText(props) {
  return (
    <React.Fragment>
      <label className="labelElement">{props.label}</label>
      <input type="text" value={props.value} onChange={props.onChange} />
    </React.Fragment>
  );
}

export default FieldLabelText;
