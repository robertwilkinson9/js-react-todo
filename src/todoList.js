import TodoItem from "./todoItem";
import DisplayActiveTodos from "./displayActiveTodos";

const TodoList = props => {
	const [todos, setTodos, addTodo, deleteTodo] = [props.list, props.setter, props.adder, props.deleter]
	console.log("TODO LIST todos is ", JSON.stringify(todos));

{/*
	const show_some = todo => {
	  console.log("show_some todo is ", JSON.stringify(todo));
		if (todo.is_active) {
			<TodoItem key={todo.id} todo={todo} />
		} 
	}

	const display_if_active = (props) => {
	  console.log("display_if_active todos is ", JSON.stringify(props.todos));
          props.todos.map(show_some);
	};
*/}

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
	  <DisplayActiveTodos todos={todos} />
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addTodo}>
        Add New Item
      </button>
    </>
  );
};

export default TodoList;
