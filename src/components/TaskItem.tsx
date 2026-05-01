type Props = {
    title: string;
    completed: boolean;
};

export default function TaskItem({ title, completed }: Props) {
    return (
        <div className="flex items-center justify-between p-2 border-b">
            <span className={completed ? "line-through text-gray-400" : ""}>
                {title}
            </span>

            <button className="text-red-500">Delete</button>
        </div>
    );
}