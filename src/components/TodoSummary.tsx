import { ToDo } from "../types/todo";

interface TodoSummaryProps {
  todos: ToDo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const compeletedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      {todos.length != 0 && (
        <p className="text-sm font-medium">
          {compeletedTodos.length}/{todos.length} todos completed
        </p>
      )}

      {compeletedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
