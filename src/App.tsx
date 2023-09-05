import { FC, useState } from "react";
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
}

const App: FC = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);

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
      toast.success("Task added successfully");
    }
    setInputVal("");
  };

  const handleEdit = (editingId: string | null): void => {
    const updatedTodos: TodoItem[] = todos.map(todo =>
      todo.id === editingId ? { ...todo, name: inputVal } : todo
    );
    setInputVal("");
    setEditingId(null);
    setIsEditing(false);
    setTodos(updatedTodos);
    toast.success("Task edited successfully");
  };

  const setEdit = (id: string): void => {
    todos.map(todo => {
      if (todo.id === id) {
        if (todo.completed === true) {
          return;
        } else {
          setInputVal(todo.name);
          setEditingId(todo.id);
          setIsEditing(true);
        }
      }
    });
  };

  const deleteTask = (id: string): void => {
    const updatedTodos: TodoItem[] = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    toast.success("Task deleted successfully");
  };

  const setIsChecked = (id: string, checked: boolean): void => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: checked } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="background">
      <ToastContainer position="top-left" autoClose={2000} />
      <div className="container">
        <h1>To do list</h1>
        <div className="add-item-wrapper">
          <Input
            id={editingId}
            addTask={addTask}
            inputVal={inputVal}
            isEditing={isEditing}
            handleEdit={handleEdit}
            setInputVal={setInputVal}
          />
        </div>
        <ul className="list-group">
          {todos?.map(todo => (
            <ToDoItem
              todo={todo}
              key={todo.id}
              setEdit={setEdit}
              deleteTask={deleteTask}
              setIsChecked={setIsChecked}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
