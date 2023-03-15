import Edit from './edit.js';
import TodoList from './todoList.js';

const ListOrEditPage = (props) => {
      console.log("ListOrEditPage TODOS are ", JSON.stringify(props.todos));
          if (props.edit_mode) {
	    return <Edit todos={props.todos} edit_id={props.edit_id} setid={props.setid} setter={props.setter} updater={props.updater} seteditmode={props.seteditmode} />
          } else {
	    return <TodoList seteditmode={props.seteditmode} todos={props.todos} setter={props.setter} deleter={props.deleter} edit_id={props.edit_id} setid={props.setid} />
          }
}

export default ListOrEditPage;
