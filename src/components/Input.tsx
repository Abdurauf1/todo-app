import { TodoItem } from "../App";

interface Props {
  inputVal: string;
  setInputVal: (e: string) => void;
  isEditing: boolean;
  todos: TodoItem[];
  editTask: (e: string) => void;
  addTask: () => void;
}

const Input = ({ inputVal, setInputVal, isEditing, todos, editTask, addTask }: Props) => {
  return (
    <>
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
      {isEditing ? (
        todos.map((todo: TodoItem) => (
          <button key={todo.id} className="btn-success" onClick={() => editTask(todo.id)}>
            Edit task
          </button>
        ))
      ) : (
        <button className="btn-primary" onClick={addTask}>
          Add task
        </button>
      )}
    </>
  );
};

export default Input;
