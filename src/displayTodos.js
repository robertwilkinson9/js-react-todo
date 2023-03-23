import DisplayTodo from "./displayTodo"

const DisplayTodos = (props) => {
  console.log("DisplayTodos TODO LIST props.todos is ", JSON.stringify(props.todos));
{ /*
  const data = props.todos.data;
  console.log("DisplayTodos TODO LIST props.todos.data is ", JSON.stringify(props.todos.data));
  console.log("DisplayTodos TODO LIST data is ", JSON.stringify(data));
*/ }

  return (
    <>
         {props.todos.data?.map((todo) => <DisplayTodo key={todo._id} todos={props.todos.data} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} /> )}

{ /*
         {props.todos?.map((todo) => <DisplayTodo key={todo._id} todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} /> )}
         {props.todos?.map((todo) => <DisplayTodo todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} /> )}
*/ }
    </>
  );
};

export default DisplayTodos;
