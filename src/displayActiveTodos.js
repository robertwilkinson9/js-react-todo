import DisplayActiveTodo from "./displayActiveTodo"

const DisplayActiveTodos = (props) => {
  console.log("DisplayActiveTodos TODO LIST props.todos is ", JSON.stringify(props.todos));

  return (
    <>
         {props.todos?.map((todo) => <DisplayActiveTodo key={todo.id} todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} /> )}
    </>
  );
};

export default DisplayActiveTodos;
