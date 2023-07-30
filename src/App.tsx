import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
}

const App: FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const addTask = (): void => {
    if (inputVal.trim() === "") {
      toast.error("Please provide value");
    } else {
      const newTodo: TodoItem = {
        id: new Date().getTime().toString(),
        name: inputVal,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputVal("");
      toast.success("Task added successfully");
    }
  };

  const deleteTask = (id: string): void => {
    const updatedTodos: TodoItem[] = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    toast.success("Task deleted successfully");
  };

  return (
    <div className="background">
      <ToastContainer position="top-left" autoClose={2000} />
      <div className="container">
        <h1>To do list</h1>
        <div className="add-item-wrapper">
          <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
          <button className="btn-primary" onClick={addTask}>
            Add task
          </button>
        </div>
        <ul className="list-group">
          {todos?.map(todo => (
            <li
              key={todo.id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
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
                <button className="btn btn-success">Edit task</button>
                <button className="btn btn-danger" onClick={() => deleteTask(todo.id)}>
                  Delete task
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
