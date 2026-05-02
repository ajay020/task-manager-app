import { NotepadText } from "lucide-react";
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
            <div className="flex flex-col items-center gap-2 my-8">
                <NotepadText />
                <p className="text-center text-gray-400 ">
                    No tasks yet. <br />
                    Add one to get started
                </p>
            </div>
        );
    }

    return (
        <div className=" space-y-3">
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