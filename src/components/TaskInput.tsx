import { useState } from "react";

type Props = {
    onAdd: (title: string) => void;
};

export default function TaskInput({ onAdd }: Props) {
    const [value, setValue] = useState("");

    const handleAdd = () => {
        onAdd(value);
        setValue("");
    };

    return (
        <div className="flex gap-2 mb-4">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="Add a task..."
                className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition"
            >
                Add
            </button>
        </div>
    );
}