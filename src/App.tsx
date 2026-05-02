import { useMemo, useState } from "react";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import TaskInput from "./components/TaskInput";
import type { Task } from "./types/Task";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useDebounce } from "./hooks/useDebounce";
import { getTaskStatus } from "./utils/date";

export type Filter = "all" | "active" | "completed";

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  const { totalCount, activeCount, completedCount, dueCount } = useMemo(() => {
    return {
      totalCount: tasks.length,
      activeCount: tasks.filter(t => !t.completed).length,
      completedCount: tasks.filter(t => t.completed).length,
      dueCount: tasks.filter(t => getTaskStatus(t.dueDate) === "overdue" && !t.completed).length
    }
  }, [tasks])

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

  const clearCompleted = () => {
    if (!confirm("Clear all completed tasks?")) return;

    setTasks((prev) => prev.filter((task) => !task.completed));
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 space-y-4 ">

        <div className=" mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Task Manager
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Stay organized and productive
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-xs text-gray-400 border rounded-full px-2">
              {totalCount} tasks
            </span>

            {dueCount > 0 && <span className="text-xs text-red-700 bg-red-100 
            border rounded-full px-2">
              {dueCount} overdue
            </span>}

            {completedCount > 0 && <span className="text-xs text-green-700 border  
            rounded-full px-2
           bg-green-100">
              {completedCount} done
            </span>}

          </div>
        </div>

        <TaskInput onAdd={addTask} />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          totalCount={totalCount}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full border border-gray-300 rounded-lg 
          px-3 py-2 text-sm focus:ring-2 focus:ring-blue-300
           focus:border-blue-400 outline-none"
        />

        <TaskList
          filter = {filter}
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}