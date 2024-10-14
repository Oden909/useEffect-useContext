import { useTodo } from '../context/Context';

function AddForm() {
  const { addTodo } = useTodo();

  function handleKeyUp(event) {
    if (event.key === 'Enter') {
      addTodo(event.target.value);
    }
  }

  return (
    <div className="input_elem">
      <input onKeyUp={handleKeyUp} />
    </div>
  );
}

export default AddForm;
