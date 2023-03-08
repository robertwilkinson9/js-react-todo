import React, { useState } from "react";

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

const TodoItem = ({ todo }) => {
  const [todos, setTodos] = useState(todoArray); 

  const DeleteTodo = (id) => {
    setTodos([
      ...todos,
    ]);
  };

  const EditTodo = (id) => {
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
  return (
    <tr>
	  { /* <td>{Date.parse(todo.datetime)}</td> */ }
      <td>{todo.datetime}</td>
      <td>{todo.summary}</td>
      <td>{todo.text}</td>
      <td>
      	<button className="btn btn-primary" onClick={DeleteTodo}>
       	 Delete
	</button>
      </td>
      <td>
      	<button className="btn btn-primary" onClick={EditTodo}> Edit
	</button>
      </td>
    </tr>
  );
};

export default TodoItem;
