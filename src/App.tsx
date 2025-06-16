import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { todoActions } from "./store/todoSlice";
import { TodoItem } from "./types";
import { useAppDispatch, useAppSelector } from "./hooks";

const App: FC = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const todos = useAppSelector(state => state.todo.todos);
  const dispatch = useAppDispatch();

  const addTask = (): void => {
    if (inputVal.trim() === "") {
      toast.error("Please provide value");
    } else {
      dispatch(
        todoActions.addItem({
          id: new Date().getTime().toString(),
          name: inputVal,
          completed: false,
        })
      );
      toast.success("Task added successfully");
    }
    setInputVal("");
  };

  const handleEdit = (editingId: string | null): void => {
    dispatch(todoActions.handleEdit({ editingId, inputVal }));
    setInputVal("");
    setEditingId(null);
    setIsEditing(false);
    toast.success("Task edited successfully");
  };

  const setEdit = (id: string): void => {
    const todo = todos.find(todo => todo.id === id)

    if (!todo) return;

    if (todo.completed) {
      toast.error("Task is already done")
      return;
    }

    setInputVal(todo.name)
    setEditingId(todo.id)
    setIsEditing(true)
  };

  const deleteTask = (id: string): void => {
    dispatch(todoActions.deleteTask({ id }));
    toast.success("Task deleted successfully");
  };

  const setIsChecked = (id: string, checked: boolean): void => {
    dispatch(todoActions.setIsChecked({ id, checked }));
  };

  return (
    <div className="background">
      <ToastContainer
        position="top-left"
        autoClose={2000}
        className="w-90"
      />
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
          {todos?.map((todo: TodoItem) => (
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
