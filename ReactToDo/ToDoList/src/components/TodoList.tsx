import React from 'react';
import { useAtom } from 'jotai';
import { todoListAtom } from '../atoms/todoAtom';
import TodoForm from './TodoForm';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useAtom(todoListAtom);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span>{todo.text}</span>
            <button onClick={() => handleToggleCompleted(todo.id)}>
              {todo.completed ? 'Mark as Unread' : 'Mark as Read'}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, text: prompt('Edit Todo', t.text) || t.text } : t))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;