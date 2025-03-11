import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { todoListAtom } from '../atoms/todoAtom';
import { Todo } from '../atoms/todoAtom';

interface TodoFormProps {
  editTodo?: Todo;
}

const TodoForm: React.FC<TodoFormProps> = ({ editTodo }) => {
  const [todos, setTodos] = useAtom(todoListAtom);
  const [text, setText] = useState(editTodo?.text || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === editTodo.id ? { ...todo, text: text } : todo
        )
      );
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button type="submit">{editTodo ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;