import React from "react";

function FieldLabelSelect(props) {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <select
        name="Date"
        id={props.id}
        className="selectElement"
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map((element) => {
          return <option value={element}>{element}</option>;
        })}
      </select>
    </React.Fragment>
  );
}

export default FieldLabelSelect;
