import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, index, markCompleted, deleteTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      <h4>{todo.text}</h4>
      <div>
        <button onClick={() => markCompleted(index)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={() => deleteTodo(index)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}

export default Todo;
