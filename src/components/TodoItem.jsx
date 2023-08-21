export const TodoItem = ({id, todoName, todoLimit, todoStatus}) => {
  console.log(todoName);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{todoName}</td>
        <td>
          <button className="btn btn--notStart">{todoStatus}</button>
        </td>
        <td>{todoLimit}</td>
        <td>
          <button id="deleteBtn" className="btn btn--delete">削除</button>
        </td>
      </tr>
    </>
  )
}