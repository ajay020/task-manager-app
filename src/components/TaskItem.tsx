import type { Task } from "../types/Task";

type Props = {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
    return (
        <div className="flex items-center justify-between p-2 border-b">
            <span
                onClick={() => onToggle(task.id)}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""
                    }`}
            >
                {task.title}
            </span>

            <button
                onClick={() => onDelete(task.id)}
                className="text-red-500"
            >
                Delete
            </button>
        </div>
    );
}