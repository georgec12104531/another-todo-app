import React from 'react';

import './todo-list.styles.css';

function TodoList({ todos, handleCompletedTodo, removeTodo }) {
  return (
    <div>
      {
        todos.map(({ id, todo, completed }, index) => (
          <div key={id} className='todo-row'>
            <input type='checkbox' onChange={() => handleCompletedTodo(id)} className='checkbox'></input>
            <div className='sub-row'>
              <div>{todo}</div>
              <div className='delete' onClick={() => removeTodo(id)}>X</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList;