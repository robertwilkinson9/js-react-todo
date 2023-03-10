import TodoItem from "./todoItem";

const TodoList = props => {
	const [todos, setTodos, addTodo] = [props.list, props.setter, props.adder]
	console.log("TODO LIST todos is ", JSON.stringify(todos));

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
