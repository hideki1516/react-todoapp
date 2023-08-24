import './css/App.css';
import { useId } from "react";
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList";

export const App = () => {

  const ALL = "全て";
  const NOT_START = "作業前";
  const DONE = "完了";
  const TODO_STATUS = [NOT_START, DONE];

  const todos = [
    {
      id: useId(),
      todoName: 'AAA',
      todoLimit: '2023-08-22',
      todoStatus: NOT_START,
    },
    {
      id: useId(),
      todoName: 'BBB',
      todoLimit: '2023-08-22',
      todoStatus: NOT_START,
    },
    {
      id: useId(),
      todoName: 'CCC',
      todoLimit: '2023-08-22',
      todoStatus: NOT_START,
    },
  ];
  
  return (
    <>
      <div className="container">
        <h1 className="title">JS Todoリスト</h1>
  
        <TodoForm />
  
        <RadioForm />
  
        <TodoList todos={todos} />
      </div>
    </>
  );
}