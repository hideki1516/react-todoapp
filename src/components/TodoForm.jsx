export const TodoForm = () => {
  return (
    <>
      <form id="todoForm" className="input">
        <dl className="input__block input__name">
          <dt className="input__label"><label htmlFor="todoName">タスク名</label></dt>
          <dd className="input__field"><input id="todoName" type="text" name="todoName" /></dd>
        </dl>
        <dl className="input__block input__date">
          <dt className="input__label"><label htmlFor="todoLimit">期日</label></dt>
          <dd className="input__field"><input id="todoLimit" type="date" name="todoLimit" /></dd>
        </dl>
        <div className="input__btn">
          <button id="addBtn" className="btn btn--add">追加</button>
        </div>
      </form>
    </>
  )
}