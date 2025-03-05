import React from "react";
import useGetInputValues from "../hooks/UseGetInputValues";

function Todo({ TodoHandler }) {
  const { values, changeHandler, resetHandler } = useGetInputValues({
    title: "",
    completed: "false",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: values.title.trim(),
      completed: values.completed === "true",
    };
    TodoHandler(newTodo);
    resetHandler();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-5 mb-10 justify-center items-center"
    >
      <input
        type="text"
        className="border border-slate-300 px-3 py-1.5 rounded"
        name="title"
        placeholder="Title"
        value={values.title || ""}
        onChange={changeHandler}
        required
      />
      <select
        name="completed"
        value={values.completed || "false"}
        onChange={changeHandler}
        className="border border-slate-300 px-3 py-1.5 rounded"
      >
        <option value="false">Not Completed</option>
        <option value="true">Completed</option>
      </select>
      <button type="submit" className="px-5 py-1 bg-blue-600 text-white rounded">
        Add
      </button>
    </form>
  );
}

export default Todo;
