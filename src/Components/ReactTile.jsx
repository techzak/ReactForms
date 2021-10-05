import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import UserLogo from "../images/user.svg";

function ReactTile(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          src={UserLogo}
          alt="Thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={props.onClick}
            id={props.id}
            className="btnClass"
          >
            More
          </Button>
          <Button
            variant="outline"
            onClick={props.handleDetails}
            id={props.id}
            className="btnClass"
          >
            Details
          </Button>
        </CardActions>
      </Card>
      {/* <img
        src="https://via.placeholder.com/150/92c952"
        alt="Thumbnail"
        width="100"
        height="100"
      />
      <h3 style={{ marginBottom: "2px" }}>{props.name}</h3>
      <p style={{ marginTop: "2px" }}>{props.email}</p>
      <div className="btngroup">
        <Button
          variant="contained"
          onClick={props.onClick}
          id={props.id}
          className="btnClass"
        >
          More
        </Button> */}
      {/* <button onClick={props.onClick} id={props.id} className="btnClass">
          More
        </button> */}
      {/* <Button
          variant="outline"
          onClick={props.handleDetails}
          id={props.id}
          className="btnClass"
        >
          Details
        </Button> */}
      {/* <button
          onClick={props.handleDetails}
          id={props.id}
          className="btnClass"
        >
          Details
        </button> */}
    </div>
  );
}

export default ReactTile;
