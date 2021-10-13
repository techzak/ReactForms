import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ReduxCounterCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 100 }}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            {props.counter}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ReduxCounterCard;
