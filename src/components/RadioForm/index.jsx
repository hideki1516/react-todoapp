import styles from './RadioForm.module.scss';

export const RadioForm = ({radioStatus, selectedStatus, handleRadioStatusChange}) => {
  return (
    <>
      <form action="" id="radioForm">
        <ul id="stateRadio" className={styles.list}>
          {
            radioStatus.map((status) => {
              return (
                <li key={status} className={styles.item}>
                  <label>
                    <input
                      type="radio"
                      name="state"
                      value={status}
                      checked={selectedStatus === status}
                      onChange={handleRadioStatusChange}
                      className={styles.radio}
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