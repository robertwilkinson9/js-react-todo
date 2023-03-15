import React from "react";

const TodoItem = (props) => {
  const [todo, todos, setTodos, setId, setEditMode] = [props.todo, props.todos, props.setter, props.setid, props.seteditmode]
  console.log("TodoItem todo ", JSON.stringify(todo));
  const id = todo.id;

  const DeleteTodo = ({id}) => {
	  const newtodos = todos.filter(todo => {return todo.id !== id});
          console.log("DeleteTodo -> newtodos are ", JSON.stringify(newtodos));
          setTodos(newtodos)
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
