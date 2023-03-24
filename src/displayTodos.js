import DisplayTodo from "./displayTodo"

const DisplayTodos = (props) => {
  console.log("DisplayTodos TODO LIST props is ", JSON.stringify(props));

  return (
    <>
         {props.todos?.map((todo) => <DisplayTodo key={todo._id} todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} getTodos={props.getTodos} /> )}
    </>
  );
};

export default DisplayTodos;
