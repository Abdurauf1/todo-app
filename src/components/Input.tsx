import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";


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
      <input
        type="text"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            isEditing ? handleEdit(id) : addTask()
          }
        }}
      />
      {isEditing ? (
        <button
          className="btn-success"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </button>
      ) : (
        <button
          className="btn-primary"
          onClick={addTask}
        >
          <IoMdAdd />
        </button>
      )}
    </>
  );
};

export default Input;
