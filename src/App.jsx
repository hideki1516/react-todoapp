import db from "./lib/firebase/config";
import { collection, onSnapshot, addDoc, doc, deleteDoc, serverTimestamp, Timestamp, query, orderBy, toDate } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { RadioForm } from './components/RadioForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from "./components/TodoList";
import styles from './App.module.scss';

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
  const [selectedStatus, setSelectedStatus] = useState(ALL);

  // Firestoreのドキュメントに登録されたタスクをリストに表示
  useEffect(() => {
    const todosCollectionRef = collection(db, 'todos'); // todosのデータベースを参照する
    const q = query(todosCollectionRef, orderBy('timestamp', 'desc')); // 追加日降順に並び替え
    onSnapshot(q, (querySnapshot) => { // onSnapshot ... リアルタイムでデータ取得
      setTodoItems(
        querySnapshot.docs.map((doc) => {
          const limitObj = doc.data().limit.toDate();
          const limitString = limitObj;

          return {
            ...doc.data(),
            id: doc.id,
            todoText: doc.data().text,
            todoLimit: limitString,
            todoStatus: NOT_START,
          }
        })
      );
    });
  }, []);

  // タスク追加用関数（Firestoreのドキュメントに追加）
  const handleTodoAdd = async (todoText, todoLimit) => {
    const todosCollectionRef = collection(db, 'todos');
    const todoLimitObject = new Date(todoLimit);
    const todoLimitTimestamp = Timestamp.fromDate(todoLimitObject);
    await addDoc(todosCollectionRef, {
      text: todoText,
      limit: todoLimitTimestamp,
      timestamp: serverTimestamp(), // タイムスタンプ追加
    })
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
  const handleTodoDelete = async (deleteId) => {
    const todoDocumentRef = doc(db, 'todos', deleteId); // データベースの中から削除するタスクIDを参照する
    await deleteDoc(todoDocumentRef); // データベースからタスクを削除する
  };

  // 状態ラジオボタン オプションを取得
  const handleRadioStatusChange = (radioEvent) => {
    setSelectedStatus(radioEvent.target.value);
  };

  // TODOリスト フィルタリング
  const filteredTodos = todoItems.filter((todoItem) => {
    // filter関数はtrueの要素が残されて、falseの要素が取り除かれる
    return selectedStatus === ALL ? true : todoItem.todoStatus === selectedStatus;
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>JS Todoリスト</h1>
  
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