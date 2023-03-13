import React from "react";
// import React, { useState } from "react";

const TodoItem = (props) => {
  const [todo, todos, setTodos] = [props.todo, props.todos, props.setter]
  console.log("TodoItem todo ", JSON.stringify(todo));
  const id = todo.id;

  const DeleteTodo = ({id}) => {
	  alert("Deleting " + id);
	  setTodos(todos.filter(todo => {return todo.id !== id})) 
  };

  const EditTodo = ({id}) => {
	  alert("Editingo " + id);
  };

  return (
    <tr>
      <td>{todo.datetime}</td>
      <td>{todo.summary}</td>
      <td>{todo.text}</td>
      <td>{todo.is_active}</td>
      <td>
      	<button className="btn btn-primary" onClick={() => DeleteTodo({id})}>
       	 Delete
	</button>
      </td>
      <td>
      	<button className="btn btn-primary" onClick={() => EditTodo({id})}> Edit
	</button>
      </td>
    </tr>
  );
};

export default TodoItem;
