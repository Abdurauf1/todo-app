import { TodoItem } from "../App";

interface Props {
  todo: TodoItem;
  setEdit: (id: string) => void;
  deleteTask: (e: string) => void;
  setIsChecked: (id: string, checked: boolean) => void;
}

const ToDoItem = ({ todo, setEdit, setIsChecked, deleteTask }: Props) => {
  const handleCheckboxChange = (): void => {
    setIsChecked(todo.id, !todo.completed);
  };
  return (
    <li className="list-group-item" key={todo.id}>
      <div>
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
          className={`${todo.completed ? "animate-input" : ""} checkbox`}
        />
        <label className={todo.completed ? "animate-label" : ""} htmlFor={todo.id}>
          {todo.name}
        </label>
      </div>
      <div>
        <button className="btn btn-success" onClick={() => setEdit(todo.id)}>
          Edit task
        </button>
        <button className="btn btn-danger" onClick={() => deleteTask(todo.id)}>
          Delete task
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
