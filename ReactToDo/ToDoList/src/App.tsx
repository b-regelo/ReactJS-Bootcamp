import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo List App</h1>
      <TodoList />
    </div>
  );
};

export default App;