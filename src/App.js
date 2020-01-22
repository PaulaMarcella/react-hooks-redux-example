import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn Hoos",
      isCompleted: false
    },
    {
      text: "Use Hooks with Redux",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodo = {
      text,
      isCompleted: false
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const markCompleted = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h5>Todo List Component using Hooks</h5>
      <div className="todo-list">
        {(todos &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              markCompleted={markCompleted}
              deleteTodo={deleteTodo}
            />
          ))) || <h4>No Todos Added yet</h4>}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
