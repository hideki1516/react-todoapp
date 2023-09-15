export const RadioForm = ({radioStatus, selectedStatus, handleRadioStatusChange}) => {
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
                      type="radio"
                      name="state"
                      value={status}
                      checked={selectedStatus === status}
                      onChange={handleRadioStatusChange}
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