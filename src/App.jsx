import './css/App.css';
import { useState } from "react";
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList";

export const App = () => {

  const ALL = "全て";
  const NOT_START = "作業前";
  const DONE = "完了";
  const TODO_STATUS = [NOT_START, DONE];

  // ランダムのIDを生成
  const getKey = () => Math.random().toString(32).substring(2, 5);

  // タスク情報のState
  const [todoItems, setTodoItems] = useState([]);

  // TodoFormの入力値をsetTodoItems()にセット
  const handleTodoAdd = (todoText, todoLimit) => {
    setTodoItems((prev) => [
      ...prev,
      {
        id: getKey(),
        todoText: todoText,
        todoLimit: todoLimit,
        todoStatus: NOT_START,
      }
    ])
  };

  // 状態ラジオボタン 選択されたオプションを管理するState
  const [selectedStatus, setSelectedStatus] = useState(ALL);

  // 状態ラジオボタン オプション
  const RADIO_STATUS = [ALL, NOT_START, DONE];

  // 状態ラジオボタン オプションを取得
  const handleRadioStatusChange = (radioEvent) => {
    setSelectedStatus(radioEvent.target.value);
  }

  // TODOリスト フィルタリング
  const filteredTodos = todoItems.filter((todoItem) => {
    switch(selectedStatus) {
      case NOT_START:
        return todoItem.todoStatus === NOT_START;
      case DONE:
        return todoItem.todoStatus === DONE;
      default:
        return todoItem;
    }
  });
  
  return (
    <>
      <div className="container">
        <h1 className="title">JS Todoリスト</h1>
  
        <TodoForm handleTodoAdd={handleTodoAdd} />
  
        <RadioForm radioStatus={RADIO_STATUS} selectedStatus={selectedStatus} onChange={handleRadioStatusChange} />

        <TodoList todoItems={filteredTodos} />
      </div>
    </>
  );
}