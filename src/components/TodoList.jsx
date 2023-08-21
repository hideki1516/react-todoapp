import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const ALL = "全て";
  const NOT_START = "作業前";
  const DONE = "完了";
  const TODO_STATUS = [NOT_START, DONE];

  const todos = [
    {
      id: 1,
      todoName: 'AAA',
      todoLimit: '2023-08-22',
      todoStatus: NOT_START,
    },
    {
      id: 2,
      todoName: 'BBB',
      todoLimit: '2023-08-22',
      todoStatus: NOT_START,
    },
    {
      id: 3,
      todoName: 'CCC',
      todoLimit: '2023-08-22',
      todoStatus: NOT_START,
    },
  ];

  return (
    <>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />
      })}
    </>
  )
}