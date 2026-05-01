import type { Task } from "../types/Task";
import TaskItem from "./TaskItem";

type Props = {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

export default function TaskList({ tasks, onToggle, onDelete }: Props) {

    if (tasks.length === 0) {
        return (
            <p className="text-center text-gray-400">
                No tasks yet. Add one to get started 🚀
            </p>
        );
    }

    return (
        <div className="mb-4 transition-all duration-200">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}