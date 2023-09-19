import styles from './Button.module.scss';

export const Button = ({id, type, text, ...functions}) => {
  return (
    <button
      id={id}
      className={`${styles.button} ${styles['button--' + type]}`}
      {...functions}
    >
      {text}
    </button>
  )
}