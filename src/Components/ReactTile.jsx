import React from "react";

function ReactTile(props) {
  return (
    <div>
      <img
        src="https://via.placeholder.com/150/92c952"
        alt="Thumbnail"
        width="100"
        height="100"
      />
      <h3 style={{ marginBottom: "2px" }}>{props.name}</h3>
      <p style={{ marginTop: "2px" }}>{props.email}</p>
      <div className="btngroup">
        <button onClick={props.onClick} id={props.id} className="btnClass">
          More
        </button>
        <button
          onClick={props.handleDetails}
          id={props.id}
          className="btnClass"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default ReactTile;
