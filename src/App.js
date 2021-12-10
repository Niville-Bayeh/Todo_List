import React from "react";
import "./styles.css";
import TodoForm from "./Components/TodoForm";
import TodosProvider from "./Providers/TodosProvider";
import TodoItems from "./Components/TodoItems";

export default function App() {
  return (
    <TodosProvider>
      <h1 style={{ textAlign: "center" }}>Todo List App</h1>
      {/* form input */}
      <TodoForm />

      <TodoItems />
    </TodosProvider>
  );
}
