import React, { useState } from "react";

const TodoItem = ({ todo }) => {
	console.log("TodoItem todo ", JSON.stringify(todo));
  const id = todo.id;

  const DeleteTodo = ({id}) => {
	  alert("Deleting " + id);
	  {/*	  setTodos(todos.filter(todo => {return todo.id !== id})) */}
  };

  const EditTodo = ({id}) => {
	  alert("Editingo " + id);
	  {/* 
    setTodos([
      ...todos,
      {
        id: 3,
	datetime: "2023-04-08T10:30",
	summary: "improve typescript",
	text: "learn how to write better typescript",
      },
    ]);
  */ }
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
