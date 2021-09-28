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
      <h3>{props.name}</h3>
      <p>{props.email}</p>
      <button onClick={props.onClick} id={props.id}>
        More
      </button>
    </div>
  );
}

export default ReactTile;
