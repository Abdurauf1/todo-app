import { useState, FC } from "react";
import { ToastContainer, toast } from "react-toastify";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const App: FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputVal, setInputVal] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const addItem = (): void => {
    if (inputVal.trim() !== "") {
      const newTodo: TodoItem = {
        id: new Date().getTime().toString(),
        text: inputVal,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputVal("");
      toast.success("Task added successfully");
    } else {
      toast.error("Please provide value");
    }
  };

  const deleteItem = (id: string): void => {
    const updateTodos: TodoItem[] = todos.filter(todo => todo.id !== id);
    setTodos(updateTodos);
    toast.error("Task deleted successfully");
  };

  const handleEditing = (): void => {
    todos.map(todo => {
      const oldTodo = {
        id: todo.id,
        text: todo.text,
        completed: todo.completed,
      };
      setInputVal(oldTodo.text);
    });
    setIsEditing(true);
  };

  const editItem = (): void => {
    let newName = inputVal;
    todos.map(todo => {
      const newTodo = {
        id: todo.id,
        text: newName,
        completed: todo.completed,
      };
      setTodos([newTodo]);
    });
    setInputVal("");
    setIsEditing(false);
  };

  return (
    <div className="background">
      <ToastContainer position="top-left" autoClose={2000} />
      <div className="container">
        <h1>To do list</h1>
        <div className="add-item-wrapper">
          <input onChange={e => setInputVal(e.target.value)} value={inputVal} />
          <button
            className={`${isEditing ? "btn-success" : "btn-primary"}`}
            onClick={isEditing ? editItem : addItem}
          >
            {isEditing ? "Save" : "Add task"}
          </button>
        </div>
        <ul className="list-group">
          {todos.map(todo => (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={todo.id}
            >
              <div>
                <input
                  className="checkbox"
                  onChange={() => setIsChecked(!isChecked)}
                  id={todo.id}
                  type="checkbox"
                />
                <label htmlFor={todo.id}>{todo.text}</label>
              </div>
              <div>
                <button className="btn btn-success" onClick={() => handleEditing()}>
                  Edit task
                </button>
                <button className="btn btn-danger" onClick={() => deleteItem(todo.id)}>
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
