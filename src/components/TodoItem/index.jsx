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
        {/* todoLimitはJSのDate型なので、toDateString()でString型に変換する */}
        {/* todoLimitに値がない場合はnullを返すための三項演算子 todoLimitに値が入る＝String型になる＝trueを返す → trueならtodoLimitを返し、falseならnull（空）を返す */}
        <td>{todoLimit ? todoLimit.toDateString() : null}</td>
        <td>
          <Button id={'deleteBtn'} type={'delete'} text={'削除'} onClick={deleteTodo} />
        </td>
      </tr>
    </>
  )
}