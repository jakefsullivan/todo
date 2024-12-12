import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/todoList'

interface Todo {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate: string | null;
}

const API_URL = import.meta.env.VITE_API_GET;
const API_KEY = import.meta.env.VITE_API_KEY_VALUE;

async function getTodos(): Promise<Todo[]> {
  const response = await fetch(API_URL, {
    headers: {
      'X-Api-Key': API_KEY
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }

  const data = await response.json();
  return data as Todo[];
}


function App() {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleTodoCompletionChange = (id: string, isComplete: boolean) => {
    setTodoData(prev => prev.map(todo => 
      todo.id === id ? { ...todo, isComplete } : todo
    ));
  };

  useEffect(() => {
    async function fetchTodos() {
      try {
        setLoading(true);
        setError(null);
        const todos = await getTodos();
        setTodoData(todos);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div className="header"><h1>Todo App</h1></div>

      <div className="todoListContainer">
        {loading && <p>Loading todos...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && (
          <TodoList todos={todoData} onTodoCompletionChange={handleTodoCompletionChange}/>
        )}
      </div>
    
    </>
  )
}

export default App
