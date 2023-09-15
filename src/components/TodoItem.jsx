import { useContext } from "react";
import { TodoContext, TodoDeleteContext } from '../App';

export const TodoItem = ({id, todoText, todoLimit, todoStatus}) => {

  // タスク状態切り替え用の関数をuseContextで読み込む
  const handleTodoChangeStatusFromContext = useContext(TodoContext);

  // タスク削除用の関数をuseContextで読み込む
  const handleTodoDeleteFromContext = useContext(TodoDeleteContext);

  const changeStatusTodo = () => {
    handleTodoChangeStatusFromContext(id,todoStatus);
  };
  
  const deleteTodo = () => {
    handleTodoDeleteFromContext(id);
  }

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