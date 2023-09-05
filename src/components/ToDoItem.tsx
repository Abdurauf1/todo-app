import React from "react";
import { TodoItem } from "../App";

interface Props {
  todo: TodoItem;
  isChecked: boolean;
  setEdit: (id: string) => void;
  deleteTask: (e: string) => void;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToDoItem = ({ setEdit, todo, isChecked, setIsChecked, deleteTask }: Props) => {
  return (
    <li className="list-group-item">
      <div>
        <input
          id={todo.id}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className={`${isChecked ? "animate-input" : ""} checkbox`}
        />
        <label className={isChecked ? "animate-label" : ""} htmlFor={todo.id}>
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
