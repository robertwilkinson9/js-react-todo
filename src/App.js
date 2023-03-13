import React, { useState } from "react";
import Banner from './Banner.js';
import EditButton from './editButton.js';
import ListOrEditPage from './list_or_edit_page.js';
import './App.css';

		// is_active: true,
const todoArray = [
	{
		id: 1,
		datetime: "2023-03-08T10:30",
		summary: "learn react",
		text: "learn how to create react applications",
		is_active: true,
	},
	{
		id: 2,
		datetime: "2023-12-18T10:00",
		summary: "prepare for christmas",
		text: "Put up xmas tree and wait for Santa",
		is_active: true,
	},
];

function App() {
  const [todos, setTodos] = useState(todoArray);
	console.log("App and TODOS are ", JSON.stringify(todos));

	const onDelete = id => {
		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return{...todo, is_active: false};
			}
			return todo;
 		});
		setTodos(newTodos);
	};

  const addTodo = (todo) => {
	  console.log(todo);
	  //	  let new_todos = [...todos, todo];
  };

  const [edit_mode, setEditMode] = useState(false);

const toggleEditCallback = (edit_mode) => {
  setEditMode(edit_mode => !edit_mode)
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
          <center>
	  <EditButton edit_mode={edit_mode} toggle_edit_callback={toggleEditCallback} /> 
          </center>
          <ListOrEditPage edit_mode={edit_mode} todos={todos} setter={setTodos} adder={addTodo} deleter={onDelete} />
	</div>
  );
}

export default App;
