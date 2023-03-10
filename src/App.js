import React, { useState } from "react";
import Banner from './Banner.js';
import TodoList from './todoList.js';
import Edit from './edit.js';
import './App.css';

const todoArray = [
	{
		id: 1,
		datetime: "2023-03-08T10:30",
		summary: "learn react",
		text: "learn how to create react applications",
	},
	{
		id: 2,
		datetime: "2023-12-18T10:00",
		summary: "prepare for christmas",
		text: "Put up xmas tree and wait for Santa",
	},
];

function App() {
  const [todos, setTodos] = useState(todoArray);

  const addTodo = (todo) => {
	  console.log(todo);
	  todos = [...todos, todo];
  };
	// eslint-disable-next-line
	{/*
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: 3,
	datetime: "2023-04-08T10:30",
	summary: "improve typescript",
	text: "learn how to write better typescript",
      },
    ]);
  };

  let editMode = false;

  const setEditMode = (editmode) => {
	  editmode = true;
  };
  */ }
  
  return (
	  <div>
	  <Banner />
	  <TodoList list={todos} setter={setTodos} adder={addTodo} />
	  <Edit />
	  </div>
  );
}

export default App;
