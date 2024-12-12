import React from 'react';
import '../App.css'

interface Todo {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate: string | null;
}

interface TodoListProps {
  todos: Todo[];
  onTodoCompletionChange: (id: string, isComplete: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onTodoCompletionChange }) => {
  const isOverdue = (dueDate: string | null, isComplete: boolean) => {
    if (!dueDate || isComplete) return false;
    const now = new Date();
    const due = new Date(dueDate);
    return due < now; 
  }

  const sortedTodos = [...todos].sort((a, b) => {
    const aOverdue = isOverdue(a.dueDate, a.isComplete);
    const bOverdue = isOverdue(b.dueDate, b.isComplete);

    if (aOverdue && !bOverdue) return -1;
    if (!aOverdue && bOverdue) return 1;

    if (!a.isComplete && !b.isComplete) {
      const aDue = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
      const bDue = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
      return aDue - bDue;
    }

    if (!a.isComplete && b.isComplete) return -1;
    if (a.isComplete && !b.isComplete) return 1;

    return 0;
  });
  
  return (
    <div className="todoList">
      {sortedTodos.map((todo) => {
        const overdue = isOverdue(todo.dueDate, todo.isComplete);
        let itemClass = 'todoItem';

        if (overdue) {
          itemClass += ' todoItemOverdue';
        } else if (todo.isComplete && !overdue) {
          itemClass += ' todoItemComplete';
        }

        const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          onTodoCompletionChange(todo.id, event.target.checked);
        };

        return (
          <div
            key={todo.id}
            className={itemClass}
          >
            <div className="todoHeader">
              <input 
                type="checkbox" 
                checked={todo.isComplete}
                onChange={handleCheckboxChange}
                style={{ marginRight: '10px' }}
              />
              <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                {todo.description}
              </span>
            </div>
            <div className="todoDetails">
              {todo.dueDate && (
                <div className="todoDate">
                  <p className="dateBox">
                    {new Date(todo.dueDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
