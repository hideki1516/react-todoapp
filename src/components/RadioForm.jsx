export const RadioForm = () => {
  return (
    <>
      <form action="" id="radioForm">
        <ul id="stateRadio" className="state">
          <li className="state__item">
            <label>
              <input id="state-all" type="radio" name="state" value="全て" defaultChecked={true} />
              <span>全て</span>
            </label>
          </li>
          <li className="state__item">
            <label>
              <input id="state-pending" type="radio" name="state" value="作業前" />
              <span>作業前</span>
            </label>
          </li>
          <li className="state__item">
            <label>
              <input id="state-done" type="radio" name="state" value="完了" />
              <span>完了</span>
            </label>
          </li>
        </ul>
      </form>
    </>
  )
}