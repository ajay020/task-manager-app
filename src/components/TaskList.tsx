import type { Task } from "../types/Task";
import TaskItem from "./TaskItem";

type Props = {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

export default function TaskList({ tasks, onToggle, onDelete }: Props) {
    return (
        <div className="mb-4">
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