import Edit from './edit.js';
import TodoList from './todoList.js';

const ListOrEditPage = (props) => {
          if (props.edit_mode) {
	    return <Edit />
          } else {
	    return <TodoList list={props.todos} setter={props.setTodos} adder={props.addTodo} deleter={props.onDelete} />
          }
}

export default ListOrEditPage;
