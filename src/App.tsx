import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import TaskInput from "./components/TaskInput";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

        <TaskInput />
        <TaskList />
        <FilterBar />
      </div>
    </div>
  );
}