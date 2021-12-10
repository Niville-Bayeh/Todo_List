import React from "react";
import { TodosContext } from "../Providers/TodosProvider";
import NoData from "./NoData";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todos } = React.useContext(TodosContext);
  if (todos.length === 0) {
    return <NoData />;
  }
  return (
    <ul className="todo__list">
      {todos.map((todo, index) => (
        <TodoItem todo={todo.todo} id={index} key={index} />
      ))}
    </ul>
  );
};

export default TodoItems;
