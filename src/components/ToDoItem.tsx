import { TodoItem } from "../types/index";
import { MdDelete, MdEdit } from "react-icons/md";

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
          <MdEdit />
        </button>
        <button className="btn btn-danger" onClick={() => deleteTask(todo.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
