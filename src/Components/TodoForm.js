import React from "react";
import { TodosContext } from "../Providers/TodosProvider";

const TodoForm = () => {
  const { addTodo } = React.useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const todo = form.todo.value;
    addTodo({
      todo: todo,
      id: todo
    });
    form.reset();
    form.focus();
  };
  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <input
        className="todo__input"
        type="text"
        name="todo"
        placeholder="Add new todo and press enter..."
      />
    </form>
  );
};

export default TodoForm;
