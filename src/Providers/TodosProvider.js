import React from "react";

export const TodosContext = React.createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const removeTodo = (todoId) => {
    const filteredTodo = todos.filter(
      (item) => item.id !== todos.at(todoId).id
    );
    setTodos(filteredTodo);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
