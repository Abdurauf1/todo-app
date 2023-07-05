import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ToDoItem = ({ children }: Props) => {
  return (
    <li className="d-flex list-group-item justify-content-between align-items-center">
      {children}
    </li>
  );
};

export default ToDoItem;
