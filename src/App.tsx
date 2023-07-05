import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputVal, setInputVal] = useState<string>("");

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
    toast.success("Task deleted successfully");
  };

  const editItem = (id: string): void => {
    console.log(id);
  };

  return (
    <div className="background">
      <ToastContainer position="top-left" autoClose={2000} />
      <div className="container mx-auto">
        <div className="row col-6 mx-auto mt-5">
          <input onChange={e => setInputVal(e.target.value)} value={inputVal} />
          <Button className="btn-primary" onClick={addItem}>
            Add task
          </Button>
        </div>
        <ul className="list-group my-5">
          {todos.map(todo => (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={todo.id}
            >
              <span>
                <input type="checkbox" />
                {todo.text}
              </span>
              <ButtonGroup>
                <Button className="btn-success" onClick={() => editItem(todo.id)}>
                  Edit task
                </Button>
                <Button className="btn-danger" onClick={() => deleteItem(todo.id)}>
                  Delete task
                </Button>
              </ButtonGroup>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
