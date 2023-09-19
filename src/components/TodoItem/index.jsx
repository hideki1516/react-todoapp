import { useContext } from "react";
import { TodoContext, TodoDeleteContext } from '../../App';
import { Button } from "../Button";

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
          <Button type={'notStart'} text={todoStatus} onClick={changeStatusTodo} />
        </td>
        <td>{todoLimit}</td>
        <td>
          <Button id={'deleteBtn'} type={'delete'} text={'削除'} onClick={deleteTodo} />
        </td>
      </tr>
    </>
  )
}