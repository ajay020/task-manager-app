import type { Task } from "../types/Task";
import { getTaskStatus } from "../utils/date";

type Props = {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
    const status = getTaskStatus(task.dueDate);

    return (
        <div
            className="flex items-center justify-between p-2 border-b hover:bg-gray-50 transition rounded">
            <span
                onClick={() => onToggle(task.id)}
                className={` cursor-pointer transition
                    ${task.completed ? "line-through text-gray-400" : "hover:text-blue-500"}
                    ${status === "overdue" ? "text-red-500" : ""}
                    ${status === "today" ? "text-yellow-500" : ""}
              `}
            >
                {task.title}
            </span>

            <span className="text-xs ml-2 ">
                {status === "overdue" && "Overdue"}
                {status === "today" && "Today"}
            </span>

            {task.dueDate && (
                <p className="text-xs text-gray-400">
                    {new Date(task.dueDate).toLocaleDateString()}
                </p>
            )}

            <button
                onClick={() => onDelete(task.id)}
                className="text-red-500"
            >
                Delete
            </button>
        </div>
    );
}