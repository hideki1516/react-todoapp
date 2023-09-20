import styles from './Button.module.scss';

export const Button = ({id, type, text, onClick, ...props}) => {
  return (
    <button
      id={id}
      className={`${styles.button} ${styles['button--' + type]}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  )
}