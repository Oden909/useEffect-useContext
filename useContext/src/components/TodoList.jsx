import { useTodo } from '../context/Context';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useTodo();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
