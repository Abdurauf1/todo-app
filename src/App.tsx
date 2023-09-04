import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Input from "./components/Input";
import "react-toastify/dist/ReactToastify.css";
import ToDoItem from "./components/ToDoItem";

export interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
}

const App: FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

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

  const editTask = (id: string): void => {
    todos.map(todo => {
      if (id === todo.id) {
        const editedTodo: TodoItem = {
          id: todo.id,
          name: inputVal,
          completed: todo.completed,
        };
        setTodos([...todos, editedTodo]);
      }
    });
    setInputVal("");
    setIsEditing(false);
  };

  const startEditTask = (id: string): void => {
    todos.map(todo => {
      if (id === todo.id) {
        setInputVal(todo.name);
      }
    });
    setIsEditing(true);
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
          <Input
            inputVal={inputVal}
            setInputVal={setInputVal}
            isEditing={isEditing}
            todos={todos}
            editTask={editTask}
            addTask={addTask}
          />
        </div>
        <ul className="list-group">
          {todos?.map(todo => (
            <ToDoItem
              todo={todo}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              deleteTask={deleteTask}
              startEditTask={startEditTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
