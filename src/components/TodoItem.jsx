export const TodoItem = ({id, todoText, todoLimit, todoStatus}) => {
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
          <button id="deleteBtn" className="btn btn--delete">削除</button>
        </td>
      </tr>
    </>
  )
}