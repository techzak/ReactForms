import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import ReduxCounterCard from "../Components/ReduxCounter";

function ReduxCounter() {
  const dispatchAPI = useDispatch();
  const data = useSelector((state) => state.counter);
  const handleOnIncrement = () => {
    dispatchAPI({ type: "INCREMENT" });
  };
  const handleOnDecrement = () => {
    dispatchAPI({ type: "DECREMENT" });
  };
  return (
    <div>
      <ReduxCounterCard counter={data.count} />
      <Button variant="contained" onClick={handleOnIncrement}>
        Increment
      </Button>
      <Button variant="contained" onClick={handleOnDecrement}>
        Decrement
      </Button>
    </div>
  );
}
export default ReduxCounter;
