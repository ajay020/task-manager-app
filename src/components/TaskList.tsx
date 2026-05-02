import { NotepadText } from "lucide-react";
import type { Task } from "../types/Task";
import TaskItem from "./TaskItem";
import type { Filter } from "../App";

type Props = {
    filter: Filter;
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

export default function TaskList({ filter, tasks, onToggle, onDelete }: Props) {

    let message

    if (filter === "active") {
        message = `All caught up!
         No active tasks right now`
    } else if (filter === "completed") {
        message = `Nothing completed yet.
         Check off some tasks first`
    } else {
        message = `No tasks yet.
        Add one to get started`
    }


    if (tasks.length === 0) {
        return (
            <div className="flex flex-col items-center gap-2 my-8">
                <NotepadText size={20} color="gray" />
                <p className="text-center text-gray-400 whitespace-pre-line ">
                    {message}
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