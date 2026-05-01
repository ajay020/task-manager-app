import TaskItem from "./TaskItem";

const tasks = [
    { id: "1", title: "Learn React", completed: false },
    { id: "2", title: "Build project", completed: true },
];

export default function TaskList() {
    return (
        <div className="mb-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    completed={task.completed}
                />
            ))}
        </div>
    );
}