import './css/App.css';
import { createContext, useState } from "react";
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList";

// タスク状態切り替え用のContextを作成
export const TodoContext = createContext();

// タスク削除用のContextを作成
export const TodoDeleteContext = createContext();

export const App = () => {

  const ALL = "全て";
  const NOT_START = "作業前";
  const DONE = "完了";
  const TODO_STATUS = [NOT_START, DONE];

  // ランダムのIDを生成
  const getKey = () => Math.random().toString(32).substring(2, 5);

  // タスク情報のState
  const [todoItems, setTodoItems] = useState([]);

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
    const newTodoItems = [...todoItems].map((newTodoItem) => {
      if( newTodoItem.id === id) {
        return { ...newTodoItem, todoStatus: todoCurrentStatus === NOT_START ? DONE : NOT_START }
      }
      return newTodoItem;
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

        <TodoContext.Provider value={handleTodoChangeStatus}>
          <TodoDeleteContext.Provider value={handleTodoDelete}>
            <TodoList todoItems={filteredTodos} />
          </TodoDeleteContext.Provider>
        </TodoContext.Provider>
      </div>
    </>
  );
}