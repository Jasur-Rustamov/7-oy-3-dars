import React from 'react'

function TodoItem({todo, changeHandler}) {
  return (
    <label className='shadow p-3 rounded-md flex items-center gap-3'>
        <input type="checkbox" 
        checked={todo.completed}
        onChange={() => changeHandler(todo.id)}/>
        <h3>{todo.title}</h3>
    </label>
  )
}

export default TodoItem