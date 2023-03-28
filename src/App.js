import React, { useState, useEffect } from "react";
import Banner from './Banner.js';
import ListOrEditPage from './list_or_edit_page.js';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [edit_id, setEditId] = useState(-1);
  const [edit_mode, setEditMode] = useState(false);
  const API_url = 'http://localhost:5000/api/';
  const TODO_url = API_url + 'todo/';

  console.log("before useEffect App and TODOS are ", JSON.stringify(todos));

  const get_todos = () => {
    // Change this endpoint to whatever local or online address you have
    const TODOS_url = API_url + 'todos/';

    fetch(TODOS_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data.data);
      });
    };

    useEffect(() => {
        get_todos();
    }, []);
  console.log("after useEffect App and TODOS are ", JSON.stringify(todos));

  const add_todo = (newtodo) => {
    console.log("ADD_TODO and newtodo is ", JSON.stringify(newtodo));
    fetch(TODO_url, {
      method: 'POST',
      body: JSON.stringify(newtodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle data
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const onUpdate = props => {
	console.log("App onUpdate and TODOS are ", JSON.stringify(props.todos));
        const [id] = [props.edit_id];
	console.log("App onUpdate and ID is ", id);
        const [due, summary, text] = [props.due, props.summary, props.text];
	let newTodos = [];
        if ((id == undefined) || (id === -1)) { // new todo
          const newtodo = {due, summary, text};
	  console.log("App onUpdate and NEWTODO is ", JSON.stringify(newtodo));
          add_todo({newtodo});
          console.log("App onUpdate and NOW todos are ", JSON.stringify(todos));
        } else {
          const this_TODO_url = TODO_url + id;
  	  console.log("App onUpdate and this_TODO_url is ", this_TODO_url);
          const newtodo = {id: id, due, summary, text};
  	  console.log("App onUpdate and NEWTODO is ", JSON.stringify(newtodo));
          fetch(this_TODO_url, {
            method: 'PATCH',
            body: JSON.stringify(newtodo),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                // Handle data
             })
             .catch((err) => {console.log(err.message);});
        }
        setEditId(-1);
        setEditMode(false);      
  };

  return (
	<div>
	  <Banner /> 
          <ListOrEditPage edit_mode={edit_mode} seteditmode={setEditMode} todos={todos} setter={setTodos} add_todo={add_todo} updater={onUpdate} edit_id={edit_id} setid={setEditId} getTodos={get_todos} />
	</div>
  );
}

export default App;
