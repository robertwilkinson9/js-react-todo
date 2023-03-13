import DisplayActiveTodo from "./displayActiveTodo"

const DisplayActiveTodos = (props) => {
	console.log("DisplayActiveTodos TODO LIST props.todos is ", JSON.stringify(props.todos));

{/*
          <ul><li>HELLO</li></ul>
*/}

  return (
    <>
         {props.todos?.map((todo) => <DisplayActiveTodo key={todo.id} todo={todo} /> )}
    </>
  );
};

export default DisplayActiveTodos;