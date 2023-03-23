import DisplayTodo from "./displayTodo"

const DisplayTodos = (props) => {
  console.log("DisplayTodos TODO LIST props.todos is ", JSON.stringify(props.todos));

  return (
    <>
         {props.todos.data?.map((todo) => <DisplayTodo key={todo._id} todos={props.todos.data} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} /> )}
    </>
  );
};

export default DisplayTodos;
