import React from 'react';
import './todo-input.styles.css';

function TodoInput({ todoInput, handleNewInput, handleNewTodo }) {
  return (
    <div className='add-todo-container'>
      <input value={todoInput} type='text' className='add-todo-input' placeholder='Enter new todo...' onChange={handleNewInput}></input>
      <button className='add-todo-button' onClick={handleNewTodo}>Add</button>
    </div>
  )
}

export default TodoInput;