import Edit from './edit.js';
import TodoList from './todoList.js';
import ToDoList from './newtodo.js';

const ListOrEditPage = (props) => {
          if (props.edit_mode) {
	    return <Edit />
          } else {
{/*	    return <ToDoList /> */}
	    return <TodoList list={props.todos} setter={props.setTodos} adder={props.addTodo} deleter={props.onDelete} />
          }
}

export default ListOrEditPage;
