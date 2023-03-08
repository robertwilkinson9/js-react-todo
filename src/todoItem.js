const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.datetime}</td>
      <td>{todo.summary}</td>
      <td>{todo.text}</td>
    </tr>
  );
};

export default TodoItem;
