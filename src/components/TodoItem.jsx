import { useContext } from "react";
import { TodoDeleteContext } from '../App';

export const TodoItem = ({id, todoText, todoLimit, todoStatus}) => {

  // タスク削除用の関数をuseContextで読み込む
  const handleTodoDeleteFromContext = useContext(TodoDeleteContext);
  
  const deleteTodo = (deleteEvent) => {
    const deleteId = {id};
    deleteEvent.preventDefault();
    handleTodoDeleteFromContext(deleteId);
  }

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{todoText}</td>
        <td>
          <button className="btn btn--notStart">{todoStatus}</button>
        </td>
        <td>{todoLimit}</td>
        <td>
          <button
            id="deleteBtn"
            className="btn btn--delete"
            onClick={deleteTodo}
          >
            削除
          </button>
        </td>
      </tr>
    </>
  )
}