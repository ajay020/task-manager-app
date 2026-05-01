import { useState } from "react";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import TaskInput from "./components/TaskInput";
import type { Task } from "./types/Task";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useDebounce } from "./hooks/useDebounce";

type Filter = "all" | "active" | "completed";

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  const addTask = (title: string, date?: string) => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      dueDate: date ? new Date(date).getTime() : undefined,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);

    const searchTerm = debouncedSearch.toLowerCase();
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm);

    return matchesFilter && matchesSearch;
  });


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 space-y-4 ">

        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Task Manager
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Stay organized and productive
          </p>
        </div>

        <TaskInput onAdd={addTask} />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full border border-gray-300 rounded-lg 
          px-3 py-2 text-sm focus:ring-2 focus:ring-blue-300
           focus:border-blue-400 outline-none"
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}