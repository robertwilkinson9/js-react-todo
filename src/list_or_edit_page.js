import Edit from './edit.js';
import TodoList from './todoList.js';

const ListOrEditPage = (props) => {
          if (props.edit_mode) {
	    return <Edit />
          } else {
	    return <TodoList todos={props.todos} setter={props.setter} adder={props.adder} deleter={props.deleter} editer={props.editer} />
          }
}

export default ListOrEditPage;
