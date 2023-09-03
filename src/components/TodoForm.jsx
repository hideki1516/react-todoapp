import { useState } from "react";

export const TodoForm = ({handleTodoAdd}) => {

  const [todoText, setTodoText] = useState(''); // タスク名のState
  const [todoLimit, setTodoLimit] = useState(''); // 期日のState

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
      <form id="todoForm" className="input" onSubmit={handleSubmit}>
        <dl className="input__block input__name">
          <dt className="input__label"><label htmlFor="todoText">タスク名</label></dt>
          <dd className="input__field">
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
        <dl className="input__block input__date">
          <dt className="input__label"><label htmlFor="todoLimit">期日</label></dt>
          <dd className="input__field">
            <input
              id="todoLimit"
              type="date"
              name="todoLimit"
              value={todoLimit}
              onChange={handleTodoLimitChange}
            />
          </dd>
        </dl>
        <div className="input__btn">
          <button id="addBtn" className="btn btn--add">追加</button>
        </div>
      </form>
    </>
  )
}