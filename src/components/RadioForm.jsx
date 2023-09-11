export const RadioForm = ({radioStatus, selectedStatus, onChange}) => {
  return (
    <>
      <form action="" id="radioForm">
        <ul id="stateRadio" className="state">
          {
            radioStatus.map((status) => {
              return (
                <li key={status} className="state__item">
                  <label>
                    <input
                      id={`state-${status}`}
                      type="radio"
                      name="state"
                      value={status}
                      checked={selectedStatus === status}
                      onChange={onChange}
                    />
                    <span>{status}</span>
                  </label>
                </li>
              )
            })
          }
        </ul>
      </form>
    </>
  )
}