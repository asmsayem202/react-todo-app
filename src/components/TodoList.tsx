import { ToDo } from "../types/todo";
import ToDoItem from "./Todoitem";

interface TodoListProps {
  todos: ToDo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompleteChange,
  onDelete,
}: TodoListProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id; // Sort by id if completed status is the same
    }
    return a.completed ? 1 : -1; // Completed todos go to the end
  });

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onCompeleteChange={onCompleteChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          No todos yet! Add some tasks to get started.
        </p>
      )}
    </>
  );
}
