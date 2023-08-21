import './App.css';
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList"

export const App = () => {

  const todos = []
  
  return (
    <>
      <div className="container">
        <h1 className="title">JS Todoリスト</h1>
  
        <TodoForm />
  
        <RadioForm />
  
        <div className="todoContainer">
          <table className="todoList">
            <thead>
              <tr>
                <th>ID</th>
                <th>タスク名</th>
                <th>状態</th>
                <th>期日</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="addTodoTarget">
              <TodoList />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}