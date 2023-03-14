import React, { useState } from "react";
import Banner from './Banner.js';
import EditButton from './editButton.js';
import ListOrEditPage from './list_or_edit_page.js';
import './App.css';

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

  const onUpdate = props => {
	console.log("App onUpdate and TODOS are ", JSON.stringify(props.todos));
        const [id] = [props.edit_id];
	console.log("App onUpdate and ID is ", id);
        const [datetime, summary, text] = [props.datetime, props.summary, props.text];
        const newtodo = {id: id, datetime, summary, text, is_active: true};
	console.log("App onUpdate and NEWTODO is ", JSON.stringify(newtodo));
	const newTodos = todos.map(todo => {
		if (todo.id === id) {
			return newtodo;
		}
		return todo;
 	});
	setTodos(newTodos);
  };


  const [edit_id, setEditId] = useState(-1);

  const [edit_mode, setEditMode] = useState(false);

  const toggleEditCallback = (edit_mode) => {
    setEditMode(edit_mode => !edit_mode)
  };
 
  const addTodo = () => {
    console.log("Adding todo");
    alert("adding new eleement");
    const newTodos = ([
      ...todos,
      {
        id: 3,
	datetime: "2023-04-08T10:30",
	summary: "improve typescript",
	text: "learn how to write better typescript",
	is_active: true,
      },
    ]);
    console.log("AFTER addition and TODOS are ", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
	<div>
	  <Banner /> 
          <center>
	  <EditButton edit_mode={edit_mode} toggle_edit_callback={toggleEditCallback} /> 
          </center>
          <ListOrEditPage edit_mode={edit_mode} seteditmode={setEditMode} todos={todos} setter={setTodos} adder={addTodo} deleter={onDelete} updater={onUpdate} edit_id={edit_id} setid={setEditId} />
	</div>
  );
}

export default App;
