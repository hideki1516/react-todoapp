import { useContext } from "react";
import { TodoContext } from '../App';

export const TodoItem = ({id, todoText, todoLimit, todoStatus}) => {

  const handleTodoChangeStatusFromContext = useContext(TodoContext);

  const changeStatusTodo = (changeStatusEvent) => {
    changeStatusEvent.preventDefault();
    handleTodoChangeStatusFromContext(id,todoStatus);
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{todoText}</td>
        <td>
          <button
            className="btn btn--notStart"
            onClick={changeStatusTodo}
          >
            {todoStatus}
          </button>
        </td>
        <td>{todoLimit}</td>
        <td>
          <button id="deleteBtn" className="btn btn--delete">削除</button>
        </td>
      </tr>
    </>
  )
}