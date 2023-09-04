import React from "react";
import { TodoItem } from "../App";

interface Props {
  inputVal: string;
  todos: TodoItem[];
  isEditing: boolean;
  addTask: () => void;
  editTask: (e: string) => void;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ inputVal, setInputVal, isEditing, todos, editTask, addTask }: Props) => {
  return (
    <>
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
      {isEditing ? (
        todos.map((todo: TodoItem) => (
          <button className="btn-success" onClick={() => editTask(todo.id)}>
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
