import './css/App.css';
import { createContext, useEffect, useState } from "react";
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList";

// タスク状態切り替え用のContextを作成
export const TodoContext = createContext();

// タスク削除用のContextを作成
export const TodoDeleteContext = createContext();

// タスク状態の定数
const ALL = "全て";
const NOT_START = "作業前";
const DONE = "完了";
const TODO_STATUS = [ALL, NOT_START, DONE];

export const App = () => {
  // タスク情報のState
  const [todoItems, setTodoItems] = useState([]);

  // 状態ラジオボタン 選択されたオプションを管理するState
  const [selectedStatus, setSelectedStatus] = useState(ALL); // useStateは上にまとめて書く

  // ランダムのIDを生成
  const getKey = () => Math.random().toString(32).substring(2, 5);

  // タスク追加用関数：TodoFormの入力値をsetTodoItems()にセット
  const handleTodoAdd = (todoText, todoLimit) => {
    setTodoItems((prevTodoItem) => [
      ...prevTodoItem,
      {
        id: getKey(),
        todoText: todoText,
        todoLimit: todoLimit,
        todoStatus: NOT_START,
      }
    ])
  };

  // 状態切り替え関数
  const handleTodoChangeStatus = (id, todoCurrentStatus) => {
    const newTodoItems = todoItems.map((todoItem) => { // todoItemsはそもそも配列なので、スプレッド構文必要ナシ
      if( todoItem.id === id) {
        return { ...todoItem, todoStatus: todoCurrentStatus === NOT_START ? DONE : NOT_START }
      }
      return todoItem;
    });
    setTodoItems(newTodoItems);
  };
  
  // タスク削除用関数
  const handleTodoDelete = (deleteId) => {
    const newTodoItems = todoItems.filter((todoItem) => {
      return todoItem.id !== deleteId;
    });
    setTodoItems(newTodoItems);
  };

  // 状態ラジオボタン オプションを取得
  const handleRadioStatusChange = (radioEvent) => {
    setSelectedStatus(radioEvent.target.value);
  }

  // TODOリスト フィルタリング
  const filteredTodos = todoItems.filter((todoItem) => {
    return selectedStatus === ALL ? true : todoItem.todoStatus === selectedStatus;  // filter関数はtrueの要素が残されて、falseの要素が取り除かれる
  });

  return (
    <>
      <div className="container">
        <h1 className="title">JS Todoリスト</h1>
  
        <TodoForm handleTodoAdd={handleTodoAdd} />
  
        <RadioForm radioStatus={TODO_STATUS} selectedStatus={selectedStatus} handleRadioStatusChange={handleRadioStatusChange} />

        <TodoContext.Provider value={handleTodoChangeStatus}>
          <TodoDeleteContext.Provider value={handleTodoDelete}>
            <TodoList todoItems={filteredTodos} />
          </TodoDeleteContext.Provider>
        </TodoContext.Provider>
      </div>
    </>
  );
}