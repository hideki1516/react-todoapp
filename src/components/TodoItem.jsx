export const TodoItem = ({id, todoText, todoLimit, todoStatus, handleTodoDelete}) => {
  
  const deleteTodo = (deleteEvent) => {
    const deleteId = {id};
    deleteEvent.preventDefault();
    handleTodoDelete(deleteId);
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