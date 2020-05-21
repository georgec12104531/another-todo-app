import React, { useState } from 'react';
import TodoInput from './components/todo-input/todo-input.component';
import TodoList from './components/todo-list/todo-list.components';


import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  const [todoInput, setNewTodoInput] = useState('');


  function handleNewTodo() {
    let newTodo = {
      id: Math.floor(Math.random() * 10000),
      todo: todoInput,
      completed: false
    }

    if (todoInput.length > 0) {
      setTodos([...todos, newTodo]);
      setNewTodoInput('');
    } else {
      return;
    }
  }

  function removeTodo(id) {
    let newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })

    setTodos(newTodos);
  }

  function handleNewInput(e) {
    setNewTodoInput(e.target.value);
  }

  function handleCompletedTodo(id) {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })

    setTodos(newTodos);
  }

  return (
    <div className='todo-main-container'>
      <div className="todo-container">
        <h2 className='header'>My Todos</h2>
        <TodoInput todoInput={todoInput} handleNewInput={handleNewInput} handleNewTodo={handleNewTodo}></TodoInput>
        <TodoList todos={todos} removeTodo={removeTodo} handleCompletedTodo={handleCompletedTodo}></TodoList>
      </div>
    </div>
  )
}

export default App;
