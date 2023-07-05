import React, { useState } from "react";
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import { Button } from "react-bootstrap";

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
    }
  };

  const deleteItem = (id: string): void => {
    const updateTodos: TodoItem[] = todos.filter(todo => todo.id !== id);
    setTodos(updateTodos);
  };

  return (
    <div className="background">
      <div className="container mx-auto">
        <div className="row col-6 mx-auto mt-5">
          <Input onChange={e => setInputVal(e.target.value)} value={inputVal} />
          <Button color="primary" onClick={addItem}>
            Add task
          </Button>
        </div>
        <ul className="list-group my-5">
          {todos.map(todo => (
            <ToDoItem key={todo.id}>
              <div>
                <span>{todo.text}</span>
              </div>
              <div>
                <Button className="btn-danger" onClick={() => deleteItem(todo.id)}>
                  Delete task
                </Button>
              </div>
            </ToDoItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
