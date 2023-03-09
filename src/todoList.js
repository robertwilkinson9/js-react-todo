import TodoItem from "./todoItem";
/* import './todoList.css'; */
{/* import React, { useState } from "react"; */}

{/*
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
*/}


const TodoList = (props) => {
	{ /*
const TodoList = () => {
  const [todos, setTodos] = useState(todoArray);

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
  */}
  const [todos, setTodos, addTodo] = [props.list, props.setter, props.adder]

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Outstanding Things to do 
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Datetime</th>
            <th>Summary</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((h) => (
            <TodoItem key={h.id} todo={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addTodo}>
        Add New Item
      </button>
    </>
  );
};

export default TodoList;
