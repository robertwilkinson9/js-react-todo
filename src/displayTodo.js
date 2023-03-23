import TodoItem from "./todoItem";

const DisplayTodo = (props) => {
	const [key, todo] = [props.todo._id, props.todo]
	console.log("DisplayTodo TODO key is ", JSON.stringify(key));
	console.log("DisplayTodo TODO todo is ", JSON.stringify(todo));

	return (<>
                <TodoItem key={key} todos={props.todos} todo={props.todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} />
{ /*
                <TodoItem key={props.todo.id} todos={props.todos} todo={props.todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} />
*/ }
                </>);
};

export default DisplayTodo;
