import TodoItem from "./todoItem";
import DisplayActiveTodos from "./displayActiveTodos";

const TodoList = (props) => {
  console.log("TODO LIST todos is ", JSON.stringify(props.todos));

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
	  <DisplayActiveTodos todos={props.todos} setter={props.setter} deleter={props.deleter} editer={props.editer} />
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={props.adder}>
        Add New Item
      </button>
    </>
  );
};

export default TodoList;
