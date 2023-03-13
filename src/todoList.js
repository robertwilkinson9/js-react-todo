import TodoItem from "./todoItem";
import DisplayActiveTodos from "./displayActiveTodos";

const TodoList = props => {
  const [todos, setTodos, addTodo, deleteTodo] = [props.list, props.setter, props.adder, props.deleter]
  console.log("TODO LIST todos is ", JSON.stringify(todos));
  console.log("TODO LIST adder is ", JSON.stringify(props.adder));

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
