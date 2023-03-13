import DisplayActiveTodo from "./displayActiveTodos"

const DisplayActiveTodos = (props) => {
	console.log("DisplayActiveTodos TODO LIST props.todos is ", JSON.stringify(props.todos));


  return (
    <>
          {props.todos?.map((todo) => <DisplayActiveTodo key={todo.id} todo={todo} /> )}
    </>
  );
};

export default DisplayActiveTodos;
