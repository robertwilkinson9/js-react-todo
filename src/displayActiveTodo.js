import TodoItem from "./todoItem";

const DisplayActiveTodo = (props) => {
	const [key, todo] = [props.key, props.todo]
	console.log("DisplayActiveTodo TODO key is ", JSON.stringify(key));
	console.log("DisplayActiveTodo TODO todo is ", JSON.stringify(todo));

	if (todo.is_active) {
		return (<>
                       <TodoItem key={props.todo.id} todos={props.todos} todo={props.todo} setter={props.setter} />
                       </>);
        } else {
          return (<></>);
	} 
};

export default DisplayActiveTodo;
