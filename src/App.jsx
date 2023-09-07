import './css/App.css';
import { createContext, useState } from "react";
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList";

export const TodoContext = createContext();

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

  const handleTodoChangeStatus = (id,todoStatus) => {
    todoItems.forEach((todoItem) => {
      if(todoItem.id === id) {
        todoItem.todoStatus = todoStatus === NOT_START ? DONE : NOT_START;
      }
    });
  };
  
  return (
    <>
      <div className="container">
        <h1 className="title">JS Todoリスト</h1>
  
        <TodoForm handleTodoAdd={handleTodoAdd} />
  
        <RadioForm />
  
        <TodoContext.Provider value={handleTodoChangeStatus}>
          <TodoList todoItems={todoItems} />
        </TodoContext.Provider>
      </div>
    </>
  );
}