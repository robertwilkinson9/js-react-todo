import React from "react";

const TodoItem = (props) => {
  const [todo, todos, setTodos, setId, setEditMode] = [props.todo, props.todos, props.setter, props.setid, props.seteditmode]
  console.log("TodoItem todo ", JSON.stringify(todo));
  const id = todo.id;

  const DeleteTodo = ({id}) => {
	  setTodos(todos.filter(todo => {return todo.id !== id})) 
  };

  const UpdateEditId = (props) => {
	  setId(id);
          setEditMode(true);
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
      	<button className="btn btn-primary" onClick={() => UpdateEditId(props)}> Edit
	</button>
      </td>
    </tr>
  );
};

export default TodoItem;
