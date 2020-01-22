import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const { counter } = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementCount = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="counter">
      <h5>Counter Component using Hooks & Redux</h5>
      <h1>Counter: {counter}</h1>
      <div>
        <button className="btn-round plus" onClick={incrementCount}>
          <FontAwesomeIcon icon={faPlus} size="2x" style={{ color: "white" }} />
        </button>
        <button className="btn-round minus" onClick={decrementCount}>
          <FontAwesomeIcon
            icon={faMinus}
            size="2x"
            style={{ color: "white" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Counter;
