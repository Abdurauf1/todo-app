import { TodoItem } from "../App";
import React from "react";

interface Props {
  todo: TodoItem;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  startEditTask: (e: string) => void;
  deleteTask: (e: string) => void;
}

const ToDoItem = ({ todo, isChecked, setIsChecked, deleteTask, startEditTask }: Props) => {
  return (
    <li key={todo.id} className="list-group-item">
      <div>
        <input
          className={`${isChecked ? "animate-input" : ""} checkbox`}
          type="checkbox"
          id={todo.id}
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
        />
        <label className={isChecked ? "animate-label" : ""} htmlFor={todo.id}>
          {todo.name}
        </label>
      </div>
      <div>
        <button className="btn btn-success" onClick={() => startEditTask(todo.id)}>
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
