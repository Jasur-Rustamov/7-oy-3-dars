import React, { useMemo } from "react";
import TodoItem from "./TodoItem";

function Todos({ todos, setTodos, filter }) {
  const changeHandler = (id) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
  };

  const sortedTodos = useMemo(() => {
    try {
      const key = new RegExp(filter.trim(), "i"); 
      return todos.filter((t) => key.test(t.title));
    } catch (error) {
      console.error("Invalid regex in filter:", error);
      return todos;
    }
  }, [filter, todos]);

  return (
    <div>
      <div className="grid grid-cols-3 container px-5 gap-5">
        {sortedTodos.map((t) => (
          <TodoItem changeHandler={changeHandler} key={t.id} todo={t} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Todos);
