import './css/App.css';
import { createContext, useState } from "react";
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList";

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

  // タスク削除用関数
  const handleTodoDelete = (deleteId) => {
    const newTodoItems = todoItems.filter((todoItem) => {
      return todoItem.id !== deleteId;
    });
    setTodoItems(newTodoItems);
  };
  
  
  return (
    <>
      <div className="container">
        <h1 className="title">JS Todoリスト</h1>
  
        <TodoForm handleTodoAdd={handleTodoAdd} />
  
        <RadioForm />
  
        <TodoDeleteContext.Provider value={handleTodoDelete}>
          <TodoList todoItems={todoItems} />
        </TodoDeleteContext.Provider>
      </div>
    </>
  );
}