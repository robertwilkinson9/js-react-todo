import React, { useState, useEffect } from "react";
import Banner from './Banner.js';
import ListOrEditPage from './list_or_edit_page.js';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [edit_id, setEditId] = useState(-1);
  const [edit_mode, setEditMode] = useState(false);
  const API_url = 'http://localhost:5000/api/';

  console.log("before useEffect App and TODOS are ", JSON.stringify(todos));

    useEffect(() => {
        const get_todos = () => {
            // Change this endpoint to whatever local or online address you have
            // Local PostgreSQL Database
            //const TODOS_url = 'http://127.0.0.1:5000/'; // XXX WSL is b0rked
            const TODOS_url = API_url + 'todos/';

            fetch(TODOS_url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setTodos(data);
                });
        };
        get_todos();
    }, []);

/*
                    console.log(response.json());
                    console.log(data);
*/

  console.log("after useEffect App and TODOS are ", JSON.stringify(todos));

  const onUpdate = props => {
	console.log("App onUpdate and TODOS are ", JSON.stringify(props.todos));
        const [id] = [props.edit_id];
	console.log("App onUpdate and ID is ", id);
        const [due, summary, text] = [props.due, props.summary, props.text];
	let newTodos = {};
        if (id === -1) { // new todo
          const max_id = Math.max(...props.todos.map(o => o.id));
	  console.log("App onUpdate and MAX_ID is ", max_id);
          const new_id = max_id + 1;
          const newtodo = {id: new_id, due, summary, text};
	  console.log("App onUpdate and NEWTODO is ", JSON.stringify(newtodo));
	  newTodos = todos;
	  newTodos.push(newtodo);
        } else {
          const newtodo = {id: id, due, summary, text};
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

  return (
	<div>
	  <Banner /> 
          <ListOrEditPage edit_mode={edit_mode} seteditmode={setEditMode} todos={todos} setter={setTodos} updater={onUpdate} edit_id={edit_id} setid={setEditId} />
	</div>
  );
}

export default App;
