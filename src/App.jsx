import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import Todo from "./components/Todo";
import useDebounce from "./hooks/UseDebounce";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const debounced = useDebounce(filter);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    getTodos();
  }, []);

  const TodoHandler = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center items-center py-4 border-b border-gray-300">
          <input
            type="text"
            name="search"
            value={filter}
            className="w-full border rounded-lg px-4 py-2 border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Search todos..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <h1 className="text-gray-700 text-center py-6 text-4xl font-semibold">Todos</h1>
        <Todo TodoHandler={TodoHandler} />
        <Todos todos={todos} setTodos={setTodos} filter={debounced} />
      </div>
    </div>
  );
}

export default App;
