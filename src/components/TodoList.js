import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos,filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
            id={todo.id}
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            setTodos={setTodos}
            todos={todos}
          />
          )
        })}
      </ul>
    </div>
  );
};

export default TodoList;
