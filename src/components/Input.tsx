import React from "react";

interface Props {
  inputVal: string;
  id: string | null;
  isEditing: boolean;
  addTask: () => void;
  handleEdit: (id: string | null) => void;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ id, isEditing, handleEdit, inputVal, setInputVal, addTask }: Props) => {
  return (
    <>
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
      {isEditing ? (
        <button className="btn-success" onClick={() => handleEdit(id)}>
          Edit task
        </button>
      ) : (
        <button className="btn-primary" onClick={addTask}>
          Add task
        </button>
      )}
    </>
  );
};

export default Input;
