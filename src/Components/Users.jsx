import React from "react";
import ReactTile from "./ReactTile";

function Users(props) {
  const { details, onClick } = props;

  return (
    <div className="users">
      <ul className="user-list">
        {details.map((element) => {
          return (
            <li id={element.id} value={element.name}>
              <ReactTile
                name={element.name}
                email={element.email}
                id={element.id}
                onClick={onClick}
                // handleDetails={this.handleOnDetails}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
