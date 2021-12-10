import React from "react";
import { TodosContext } from "../Providers/TodosProvider";

const TodoItem = ({ todo = "test", id }) => {
  const { removeTodo } = React.useContext(TodosContext);

  return (
    <li className="todo__item">
      <input type="checkbox" id={id} className="todo__item__check" />
      <label>
        <p className="todo__item__value">{todo}</p>
        <div className="todo__options">
          <label className="custom__check" htmlFor={id}></label>
          <span className="delete__option" onClick={() => removeTodo(id)}>
            <i className="bx bx-trash"></i>
          </span>
        </div>
      </label>
    </li>
  );
};

export default TodoItem;
