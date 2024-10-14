import { useTodo } from '../context/Context';

function TodoItem({ id, title, completed }) {
  const { deleteTodoByid, changeTodos } = useTodo();

  return (
    <div
      className="todo_card"
      style={{ backgroundColor: completed ? 'green' : 'red' }}
      onDoubleClick={() => deleteTodoByid(id)}
      onClick={() => changeTodos(id)}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default TodoItem;
