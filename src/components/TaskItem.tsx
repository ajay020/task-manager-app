import { X } from "lucide-react";
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
        <div className="flex items-start justify-between gap-3 p-3
         hover:shadow-sm
         group
         rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300">

            {/* LEFT SIDE */}
            <div className="flex items-start gap-3 flex-1">

                {/* Checkbox */}
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="mt-1 w-4 h-4 accent-blue-500 cursor-pointer"
                />

                {/* TEXT CONTENT */}
                <div className="flex flex-col">

                    {/* Title */}
                    <span
                        className={`text-sm font-medium cursor-pointer transition ${task.completed
                            ? "line-through text-gray-400"
                            : "text-gray-800 hover:text-blue-600"
                            }`}
                        onClick={() => onToggle(task.id)}
                    >
                        {task.title}
                    </span>

                    {/* Due date */}
                    {task.dueDate && (
                        <span
                            className={`text-xs mt-1 ${status === "overdue"
                                ? "text-red-500"
                                : status === "today"
                                    ? "text-yellow-500"
                                    : "text-gray-400"
                                }`}
                        >
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                    )}
                </div>
            </div>

            {/* RIGHT SIDE ACTION */}
            <button
                onClick={() => onDelete(task.id)}
                className="text-sm  hidden p-2 cursor-pointer
                 text-gray-400 hover:text-red-500 group-hover:flex transition font-medium"
            >
                <X size={18} />
            </button>
        </div>
    );
}