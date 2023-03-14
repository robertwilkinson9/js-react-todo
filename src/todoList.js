import TodoItem from "./todoItem";
import DisplayActiveTodos from "./displayActiveTodos";


const TodoList = (props) => {
  console.log("TODO LIST props is ", JSON.stringify(props));
  console.log("TODO LIST todos is ", JSON.stringify(props.todos));

  const UpdateEditMode = (props) => {
{/*
          const [setEditMode] = [props.seteditmode];
          setEditMode(true);
*/}
          props.seteditmode(true);
  };

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
	  <DisplayActiveTodos todos={props.todos} setter={props.setter} deleter={props.deleter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} />
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => {UpdateEditMode(props)}}>
        Add New Item
      </button>
    </>
  );
};

export default TodoList;
