import React from "react";
import { incrementCountAction } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="maindiv">
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(incrementCountAction(1))}>ADD</button>
      <button onClick={() => dispatch(incrementCountAction(-1))}>REDUCE</button>
    </div>
  );
};
