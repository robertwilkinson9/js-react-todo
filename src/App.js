import React, { useState } from "react";
import Banner from './Banner.js';
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
	let newTodos = {};
        if (id === -1) { // new todo
          const max_id = Math.max(...props.todos.map(o => o.id));
	  console.log("App onUpdate and MAX_ID is ", max_id);
          const new_id = max_id + 1;
          const newtodo = {id: new_id, datetime, summary, text, is_active: true};
	  console.log("App onUpdate and NEWTODO is ", JSON.stringify(newtodo));
	  newTodos = todos;
	  newTodos.push(newtodo);
        } else {
          const newtodo = {id: id, datetime, summary, text, is_active: true};
  	  console.log("App onUpdate and NEWTODO is ", JSON.stringify(newtodo));
  	  newTodos = todos.map(todo => {
		if (todo.id === id) {
			return newtodo;
		}
		return todo;
   	  });
        }
	console.log("App onUpdate and NEWTODOS are ", JSON.stringify(newTodos));
	setTodos(newTodos);
        setEditId(-1);
        setEditMode(false);      
  };

  const [edit_id, setEditId] = useState(-1);
  const [edit_mode, setEditMode] = useState(false);

  return (
	<div>
	  <Banner /> 
          <ListOrEditPage edit_mode={edit_mode} seteditmode={setEditMode} todos={todos} setter={setTodos} deleter={onDelete} updater={onUpdate} edit_id={edit_id} setid={setEditId} />
	</div>
  );
}

export default App;
