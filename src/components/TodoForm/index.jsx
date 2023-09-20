import { useState } from "react";
import styles from './TodoForm.module.scss';
import { Button } from "../Button";

export const TodoForm = ({handleTodoAdd}) => {

  // タスク名のState
  const [todoText, setTodoText] = useState('');

  // 期日のState
  const [todoLimit, setTodoLimit] = useState('');

  // タスク追加用の関数
  const addTodo = () => {
    if(todoText === '') {
      alert('タスク名を追加してください');
      return;
    }
    handleTodoAdd(todoText, todoLimit);
    setTodoText('');
    setTodoLimit('');
  };

  // todoTextの入力値をsetTodoText()にセット
  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  // todoLimitの入力値をsetTodoLimit()にセット
  const handleTodoLimitChange = (e) => {
    setTodoLimit(e.target.value);
  };

  // ⌘ + Enterでタスクを追加
  const handleKeyDown = (keyEvent) => {
    if(keyEvent.key === 'Enter') {
      keyEvent.preventDefault();
    }

    if(keyEvent.key === 'Enter' && (keyEvent.ctrlKey || keyEvent.metaKey)) {
      addTodo();
    }
  };

  // 追加ボタンでタスクを追加
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    addTodo();
  };

  return (
    <>
      <form id="todoForm" className={styles.form} onSubmit={handleSubmit}>
        <dl className={`${styles.formBlock} ${styles.name}`}>
          <dt className={styles.label}><label htmlFor="todoText">タスク名</label></dt>
          <dd className={styles.field}>
            <input
              id="todoText"
              type="text"
              name="todoText"
              value={todoText}
              onChange={handleTodoTextChange}
              onKeyDown={handleKeyDown}
            />
          </dd>
        </dl>
        <dl className={`${styles.formBlock} ${styles.date}`}>
          <dt className={styles.label}><label htmlFor="todoLimit">期日</label></dt>
          <dd className={styles.field}>
            <input
              id="todoLimit"
              type="date"
              name="todoLimit"
              value={todoLimit}
              onChange={handleTodoLimitChange}
            />
          </dd>
        </dl>
        <div className={styles.formBtn}>
          <Button id={'addBtn'} type={'add'} text={'追加'} />
        </div>
      </form>
    </>
  )
}